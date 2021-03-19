import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTableCategory1616120304871 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "categories" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying NOT NULL,
        "description" character varying NOT NULL,
        "type" character varying NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "productId" uuid,
        CONSTRAINT "categories_pk" PRIMARY KEY ("id"),
        CONSTRAINT "FK_product_id_key" FOREIGN KEY ("productId")
        REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE categories');
  }
}
