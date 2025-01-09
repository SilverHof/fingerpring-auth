/*
  Warnings:

  - You are about to drop the `applications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `browsers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `devices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fingerprints` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `networks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `screens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `timezones` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `firstFingerprint` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastFingerprint` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "fingerprints" DROP CONSTRAINT "fingerprints_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "fingerprints" DROP CONSTRAINT "fingerprints_browserId_fkey";

-- DropForeignKey
ALTER TABLE "fingerprints" DROP CONSTRAINT "fingerprints_deviceId_fkey";

-- DropForeignKey
ALTER TABLE "fingerprints" DROP CONSTRAINT "fingerprints_networkId_fkey";

-- DropForeignKey
ALTER TABLE "fingerprints" DROP CONSTRAINT "fingerprints_screenId_fkey";

-- DropForeignKey
ALTER TABLE "fingerprints" DROP CONSTRAINT "fingerprints_timezoneId_fkey";

-- DropForeignKey
ALTER TABLE "fingerprints" DROP CONSTRAINT "fingerprints_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "fingerprints" TEXT[],
ADD COLUMN     "firstFingerprint" TEXT NOT NULL,
ADD COLUMN     "lastFingerprint" TEXT NOT NULL;

-- DropTable
DROP TABLE "applications";

-- DropTable
DROP TABLE "browsers";

-- DropTable
DROP TABLE "devices";

-- DropTable
DROP TABLE "fingerprints";

-- DropTable
DROP TABLE "networks";

-- DropTable
DROP TABLE "screens";

-- DropTable
DROP TABLE "timezones";
