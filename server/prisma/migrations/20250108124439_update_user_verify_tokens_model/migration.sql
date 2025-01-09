/*
  Warnings:

  - You are about to drop the column `authorizationTokens` on the `user_verify_tokens` table. All the data in the column will be lost.
  - Added the required column `authorization_code` to the `user_verify_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recovery_password_code` to the `user_verify_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reset_password_code` to the `user_verify_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_verify_tokens" DROP COLUMN "authorizationTokens",
ADD COLUMN     "authorization_code" TEXT NOT NULL,
ADD COLUMN     "recovery_password_code" TEXT NOT NULL,
ADD COLUMN     "reset_password_code" TEXT NOT NULL;
