/*
  Warnings:

  - You are about to drop the column `endDate` on the `experiences` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `experiences` table. All the data in the column will be lost.
  - Added the required column `start_date` to the `experiences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `experiences` DROP COLUMN `endDate`,
    DROP COLUMN `startDate`,
    ADD COLUMN `end_date` DATETIME(3) NULL,
    ADD COLUMN `start_date` DATETIME(3) NOT NULL;
