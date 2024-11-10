-- CreateEnum
CREATE TYPE "PetSpecies" AS ENUM ('DOG', 'CAT', 'RABBIT', 'FISH', 'BIRD', 'TURTLE', 'SNAKE', 'OTHER');

-- CreateEnum
CREATE TYPE "PetStatus" AS ENUM ('AVAILABLE', 'ADOPTED');

-- CreateEnum
CREATE TYPE "PetSize" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "PetPersonality" AS ENUM ('CALM', 'AGGRESSIVE', 'PLAYFUL', 'INDEPENDENT', 'DEPENDENT', 'LOYAL', 'CURIOUS', 'LOVING');

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "species" "PetSpecies" NOT NULL,
    "birth_date" DATE NOT NULL,
    "description" VARCHAR(300),
    "status" "PetStatus" NOT NULL DEFAULT 'AVAILABLE',
    "size" "PetSize" NOT NULL,
    "personality" "PetPersonality",

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adopter" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" VARCHAR(13) NOT NULL,

    CONSTRAINT "Adopter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adress" (
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "adopter_id" TEXT NOT NULL,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("adopter_id")
);

-- CreateTable
CREATE TABLE "Adoption" (
    "pet_id" TEXT NOT NULL,
    "adopter_id" TEXT NOT NULL,
    "adoption_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Adoption_pkey" PRIMARY KEY ("pet_id","adopter_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Adopter_email_key" ON "Adopter"("email");

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "fk_adopter" FOREIGN KEY ("adopter_id") REFERENCES "Adopter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "fk_pet" FOREIGN KEY ("pet_id") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "fk_adopter" FOREIGN KEY ("adopter_id") REFERENCES "Adopter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
