/*
  Warnings:

  - A unique constraint covering the columns `[nim]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `Competition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Competition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `information` to the `Competition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Competition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizer` to the `Competition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Competition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Competition` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Level" AS ENUM ('REGIONAL', 'NATIONAL', 'INTERNATIONAL');

-- CreateEnum
CREATE TYPE "public"."Type" AS ENUM ('INDIVIDUAL', 'GROUP');

-- AlterTable
ALTER TABLE "public"."Achievement" ALTER COLUMN "teamInfo" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."Activity" ADD COLUMN     "generation" TEXT;

-- AlterTable
ALTER TABLE "public"."Application" ADD COLUMN     "competitionId" TEXT,
ALTER COLUMN "activityId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Competition" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "information" TEXT NOT NULL,
ADD COLUMN     "level" "public"."Level" NOT NULL,
ADD COLUMN     "organizer" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "type" "public"."Type" NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "nim" TEXT,
ADD COLUMN     "phoneNumber" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_nim_key" ON "public"."User"("nim");

-- AddForeignKey
ALTER TABLE "public"."Application" ADD CONSTRAINT "Application_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "public"."Competition"("id") ON DELETE CASCADE ON UPDATE CASCADE;
