import { container } from "tsyringe";

import { IQuotationRepository } from "@modules/purchase/repositories/IQuotationRepository";
import { QuotationRepository } from "@modules/purchase/infra/typeorm/repositories/QuotationRepository";

container.registerSingleton<IQuotationRepository>(
  "QuotationRepository",
  QuotationRepository
);