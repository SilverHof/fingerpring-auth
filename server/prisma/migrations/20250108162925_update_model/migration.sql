-- AlterTable
ALTER TABLE "user_verify_tokens" ALTER COLUMN "registration_code" DROP NOT NULL,
ALTER COLUMN "authorization_code" DROP NOT NULL,
ALTER COLUMN "recovery_password_code" DROP NOT NULL,
ALTER COLUMN "reset_password_code" DROP NOT NULL;
