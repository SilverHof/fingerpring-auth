/*
  Warnings:

  - You are about to drop the column `canvasActive` on the `settings_fingerprints` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "settings_fingerprints" DROP COLUMN "canvasActive",
ADD COLUMN     "canvas" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "webgl" BOOLEAN NOT NULL DEFAULT true;
