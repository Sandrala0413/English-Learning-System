/*
  Warnings:

  - Added the required column `capital` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `word` ADD COLUMN `capital` VARCHAR(191) NOT NULL;
