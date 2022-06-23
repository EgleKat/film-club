-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "username" ON "accounts"("username");
