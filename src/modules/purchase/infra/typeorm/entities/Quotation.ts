import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("quotation")
export default class Quotation {
  @PrimaryColumn()
  id: string;

  @Column()
  purchaseQuotation: number;

  @Column()
  salesQuotation: number;

  @CreateDateColumn({ type: "timestamp"})
  currencyQuoteDate: Date;
  
  @CreateDateColumn({ type: "timestamp", default: () => "now()", select: false })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "now()", onUpdate: "now()", select: false })
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
