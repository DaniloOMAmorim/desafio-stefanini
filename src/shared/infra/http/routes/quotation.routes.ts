import { Router } from 'express';
import { FindQuotationController } from '@modules/purchase/useCases/quotation/FindController';

const quotationRoute = Router();

const findQuotationController = new FindQuotationController();

quotationRoute.get('/', findQuotationController.handle);

export default quotationRoute;