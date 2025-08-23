-- CreateTable
CREATE TABLE "public"."Pulse" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "lineId" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "firstChoice" TEXT NOT NULL,
    "secondChoice" TEXT NOT NULL,
    "idCard" TEXT NOT NULL,
    "idCardPublicId" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "cvPublicId" TEXT NOT NULL,
    "commitmentLetter" TEXT NOT NULL,
    "commitmentLetterPublicId" TEXT NOT NULL,
    "portfolio" TEXT,
    "portfolioPublicId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pulse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pulse_email_key" ON "public"."Pulse"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pulse_nim_key" ON "public"."Pulse"("nim");
