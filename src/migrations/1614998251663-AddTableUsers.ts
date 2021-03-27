import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTableUsers1614998251663 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryRunner.query(`CREATE TABLE "users" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying NOT NULL,
        "surname" character varying NOT NULL,
        "nick_name" character varying NULL,
        "email" character varying NOT NULL,
        "password" character varying NOT NULL,
        "tel" character varying NULL,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT users_unique_email UNIQUE (email),
        CONSTRAINT "users_pk" PRIMARY KEY ("id"));`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "users";');
  }
}
