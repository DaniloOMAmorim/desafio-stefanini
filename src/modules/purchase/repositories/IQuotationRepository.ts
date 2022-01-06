import { ICreateQuotationDTO, ReturnsQuotation } from "../dtos/IQuotationDTO";
import Quotation from "../infra/typeorm/entities/Quotation";

export interface IQuotationRepository {
  create(data: ICreateQuotationDTO): Promise<Quotation>;
  find(data: Date): Promise<ReturnsQuotation>;
}
