/*
  Warnings:

  - You are about to drop the column `first_fingerprint` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `last_fingerprint` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "first_fingerprint",
DROP COLUMN "last_fingerprint",
ADD COLUMN     "current_fingerprint" TEXT;
