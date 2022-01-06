import { inject, injectable } from "tsyringe";
import axios from "axios";

import { IQuotationRepository } from "@modules/purchase/repositories/IQuotationRepository";
import { ReturnsQuotation } from "@modules/purchase/dtos/IQuotationDTO";

import BCB from "@shared/client/BancoCentralDoBrasil";

@injectable()
export class FindQuotationUseCase {
  constructor(
    @inject("QuotationRepository")
    private quotationRepository: IQuotationRepository
  ) { }

  async execute(date: Date): Promise<ReturnsQuotation> {
    const quotation = await this.quotationRepository.find(date)

    if (!quotation) {
      const returnBCB = await new BCB(axios).findCurrencyQuote(date);
      
      if (!returnBCB)
        return null;
      
      return await this.quotationRepository.create(returnBCB)
    }

    return quotation;
  }
}
