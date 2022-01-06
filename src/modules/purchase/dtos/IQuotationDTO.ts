export interface ICreateQuotationDTO { 
  purchaseQuotation: number;
  salesQuotation: number;
  currencyQuoteDate: Date;
}

export interface IFindQuotationDTO {
  data: Date;
}

export class ReturnsQuotation implements ICreateQuotationDTO{
  id: string;
  purchaseQuotation: number;
  salesQuotation: number;
  currencyQuoteDate: Date;
  timestamp?: number;

  constructor(){
    this.timestamp = -3
  }
}