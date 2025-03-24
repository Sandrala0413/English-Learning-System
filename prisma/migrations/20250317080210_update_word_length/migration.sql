-- AlterTable
ALTER TABLE `word` MODIFY `word` VARCHAR(255) NOT NULL,
    MODIFY `audio_src` VARCHAR(255) NULL,
    MODIFY `define` VARCHAR(255) NOT NULL,
    MODIFY `sentence` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `Account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `creat_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Account_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FavoriteWords` (
    `userId` INTEGER NOT NULL,
    `wordId` INTEGER NOT NULL,
    `creatTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`userId`, `wordId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FavoriteWords` ADD CONSTRAINT `FavoriteWords_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Account`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FavoriteWords` ADD CONSTRAINT `FavoriteWords_wordId_fkey` FOREIGN KEY (`wordId`) REFERENCES `Word`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
