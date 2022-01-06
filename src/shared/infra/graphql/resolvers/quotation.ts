import { FindQuotationController } from "@modules/purchase/useCases/quotation/FindController";

const findQuotationController = new FindQuotationController();

export default {
  Query: {
    quotation: async () => findQuotationController.handle
  }
}