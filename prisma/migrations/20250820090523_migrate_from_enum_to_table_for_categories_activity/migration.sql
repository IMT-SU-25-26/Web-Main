/*
  Warnings:

  - You are about to drop the column `category` on the `Activity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Activity" DROP COLUMN "category";

-- DropEnum
DROP TYPE "public"."CategoryActivity";

-- CreateTable
CREATE TABLE "public"."CategoryActivity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CategoryActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoryActivity_name_key" ON "public"."CategoryActivity"("name");
