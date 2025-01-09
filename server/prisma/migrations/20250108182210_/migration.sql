/*
  Warnings:

  - You are about to drop the column `authorization_code` on the `user_verify_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `recovery_password_code` on the `user_verify_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `registration_code` on the `user_verify_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `reset_password_code` on the `user_verify_tokens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_verify_tokens" DROP COLUMN "authorization_code",
DROP COLUMN "recovery_password_code",
DROP COLUMN "registration_code",
DROP COLUMN "reset_password_code",
ADD COLUMN     "token" TEXT;
