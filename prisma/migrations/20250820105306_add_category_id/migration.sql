-- AlterTable
ALTER TABLE "public"."Activity" ADD COLUMN     "categoryId" INTEGER NOT NULL DEFAULT 2;

-- AddForeignKey
ALTER TABLE "public"."Activity" ADD CONSTRAINT "Activity_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."CategoryActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
