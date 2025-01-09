/*
  Warnings:

  - You are about to drop the column `firstFingerprint` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastFingerprint` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "firstFingerprint",
DROP COLUMN "lastFingerprint",
ADD COLUMN     "first_fingerprint" TEXT,
ADD COLUMN     "last_fingerprint" TEXT;
