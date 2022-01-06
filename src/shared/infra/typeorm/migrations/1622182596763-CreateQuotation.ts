import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuotation1622182596763 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "quotation",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid"
          },
          {
            name: "purchaseQuotation",
            type: "float",
          },
          {
            name: "salesQuotation",
            type: "float",
          },
          {
            name: "currencyQuoteDate",
            type: "timestamp",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("quotation");
  }
}
