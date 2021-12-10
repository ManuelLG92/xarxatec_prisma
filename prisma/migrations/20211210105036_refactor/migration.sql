/*
  Warnings:

  - You are about to drop the column `tecnologyId` on the `EducationOnTecnologies` table. All the data in the column will be lost.
  - You are about to drop the column `tecnologyId` on the `ExperienceOnTecnologies` table. All the data in the column will be lost.
  - You are about to drop the column `tecnologyId` on the `XpPoints` table. All the data in the column will be lost.
  - You are about to drop the `Tecnology` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `TechnologyId` to the `EducationOnTecnologies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TechnologyId` to the `ExperienceOnTecnologies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TechnologyId` to the `XpPoints` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `EducationOnTecnologies` DROP FOREIGN KEY `EducationOnTecnologies_tecnologyId_fkey`;

-- DropForeignKey
ALTER TABLE `ExperienceOnTecnologies` DROP FOREIGN KEY `ExperienceOnTecnologies_tecnologyId_fkey`;

-- DropForeignKey
ALTER TABLE `XpPoints` DROP FOREIGN KEY `XpPoints_tecnologyId_fkey`;

-- AlterTable
ALTER TABLE `EducationOnTecnologies` DROP COLUMN `tecnologyId`,
    ADD COLUMN `TechnologyId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ExperienceOnTecnologies` DROP COLUMN `tecnologyId`,
    ADD COLUMN `TechnologyId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `XpPoints` DROP COLUMN `tecnologyId`,
    ADD COLUMN `TechnologyId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Tecnology`;

-- CreateTable
CREATE TABLE `Technology` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EducationOnTecnologies` ADD CONSTRAINT `EducationOnTecnologies_TechnologyId_fkey` FOREIGN KEY (`TechnologyId`) REFERENCES `Technology`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExperienceOnTecnologies` ADD CONSTRAINT `ExperienceOnTecnologies_TechnologyId_fkey` FOREIGN KEY (`TechnologyId`) REFERENCES `Technology`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `XpPoints` ADD CONSTRAINT `XpPoints_TechnologyId_fkey` FOREIGN KEY (`TechnologyId`) REFERENCES `Technology`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
