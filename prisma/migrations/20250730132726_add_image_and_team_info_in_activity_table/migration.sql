-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "imagePublicId" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "teamInfo" TEXT NOT NULL DEFAULT '';
