/*
  Warnings:

  - You are about to drop the column `chinese` on the `word` table. All the data in the column will be lost.
  - You are about to drop the column `part_of_speech` on the `word` table. All the data in the column will be lost.
  - Added the required column `define` to the `Word` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speech` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `word` DROP COLUMN `chinese`,
    DROP COLUMN `part_of_speech`,
    ADD COLUMN `audio_src` VARCHAR(191) NULL,
    ADD COLUMN `define` VARCHAR(191) NOT NULL,
    ADD COLUMN `pronounce` VARCHAR(191) NULL,
    ADD COLUMN `sentence` VARCHAR(191) NULL,
    ADD COLUMN `speech` VARCHAR(191) NOT NULL;
