import { AppError } from "@errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindQuotationUseCase } from "./FindUseCase";

export class FindQuotationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findQuotation = container.resolve(FindQuotationUseCase);

    const findDate = request.query.date as string;

    if(!findDate)
      throw new AppError("Date not found!", 400);

    const parts =findDate.split('-');
    const date = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]))
    const quotation = await findQuotation.execute(date);

    return response.status(200).json(quotation);
  }
}
