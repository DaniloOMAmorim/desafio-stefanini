import { Router } from "express";

import quotationRoute from "./quotation.routes";

const router = Router();

router.use("/quotation", quotationRoute);

export default router;
