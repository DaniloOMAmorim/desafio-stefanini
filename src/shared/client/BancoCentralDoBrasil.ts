import { AppError } from "@errors/AppError";
import { AxiosStatic } from "axios";

export interface BCBResponse { 
  purchaseQuotation: number;
  salesQuotation: number;
  currencyQuoteDate: Date;
}

export default class BCB{ 
  constructor(protected request: AxiosStatic){}
  public async findCurrencyQuote(date: Date): Promise<BCBResponse> {

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    const new_date = dd + '-' + mm + '-' + yyyy

    const response = await this.request.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${new_date}%27&&$format=json`);
    
    if(response.status != 200)
      throw new AppError("Problema com a api do Banco Central do Brasil!", 500);
    
    const data = response.data.value[0]

    if (!data)
      throw new AppError("There is no quote for that day!", 200);

    const bcb: BCBResponse = {
      purchaseQuotation: data.cotacaoCompra,
      salesQuotation: data.cotacaoVenda,
      currencyQuoteDate: data.dataHoraCotacao
    }
    return bcb;
  }
}