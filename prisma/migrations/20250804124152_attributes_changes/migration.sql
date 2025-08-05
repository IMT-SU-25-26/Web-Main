/*
  Warnings:

  - You are about to drop the column `teamInfo` on the `Activity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Achievement" ADD COLUMN     "teamInfo" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "teamInfo";
