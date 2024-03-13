-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "actualPrice" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,
    "discountedPrice" DOUBLE PRECISION NOT NULL,
    "seller" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
