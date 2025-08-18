-- CreateEnum
CREATE TYPE "CategoryActivity" AS ENUM ('RESEARCH', 'ACTIVITY');

-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "category" "CategoryActivity" NOT NULL DEFAULT 'ACTIVITY';
