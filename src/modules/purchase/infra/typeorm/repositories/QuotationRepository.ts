import { getRepository, Repository } from "typeorm";

import Quotation from "../entities/Quotation";
import { IQuotationRepository } from "@modules/purchase/repositories/IQuotationRepository";
import { ICreateQuotationDTO, ReturnsQuotation } from "@modules/purchase/dtos/IQuotationDTO";
export class QuotationRepository implements IQuotationRepository {
  private repository: Repository<Quotation>;

  constructor() {
    this.repository = getRepository(Quotation);
  }  
  
  async create(data: ICreateQuotationDTO): Promise<Quotation> {

    const date = new Date(data.currencyQuoteDate)
    const quotation = this.repository.create({
      currencyQuoteDate: date.toISOString(),
      purchaseQuotation: data.purchaseQuotation,
      salesQuotation: data.salesQuotation
    });
    const new_quotations = await this.repository.save(quotation);
    return new_quotations;
  }

  async find(date: Date): Promise<ReturnsQuotation> {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    const new_date = yyyy + '-' + dd + '-' + mm
    
    // yyyy-mm-dd
    const quotation_query = this.repository.createQueryBuilder("quotation")
    .andWhere('quotation.currencyQuoteDate >= :after', { after: `${new_date} 05:00:14.045` })
    .andWhere('quotation.currencyQuoteDate < :before', { before: `${new_date} 18:00:14.045` })
    const quotation = await quotation_query.getOne();
    return quotation;
  }
}
