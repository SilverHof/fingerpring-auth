/*
  Warnings:

  - You are about to drop the column `applicationId` on the `settings_fingerprints` table. All the data in the column will be lost.
  - You are about to drop the column `browserId` on the `settings_fingerprints` table. All the data in the column will be lost.
  - You are about to drop the column `deviceId` on the `settings_fingerprints` table. All the data in the column will be lost.
  - You are about to drop the column `networkId` on the `settings_fingerprints` table. All the data in the column will be lost.
  - You are about to drop the column `screenId` on the `settings_fingerprints` table. All the data in the column will be lost.
  - You are about to drop the column `timezoneId` on the `settings_fingerprints` table. All the data in the column will be lost.
  - You are about to drop the `settings_applications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `settings_browsers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `settings_devices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `settings_networks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `settings_screens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `settings_timezones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "settings_fingerprints" DROP CONSTRAINT "settings_fingerprints_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "settings_fingerprints" DROP CONSTRAINT "settings_fingerprints_browserId_fkey";

-- DropForeignKey
ALTER TABLE "settings_fingerprints" DROP CONSTRAINT "settings_fingerprints_deviceId_fkey";

-- DropForeignKey
ALTER TABLE "settings_fingerprints" DROP CONSTRAINT "settings_fingerprints_networkId_fkey";

-- DropForeignKey
ALTER TABLE "settings_fingerprints" DROP CONSTRAINT "settings_fingerprints_screenId_fkey";

-- DropForeignKey
ALTER TABLE "settings_fingerprints" DROP CONSTRAINT "settings_fingerprints_timezoneId_fkey";

-- DropIndex
DROP INDEX "settings_fingerprints_applicationId_key";

-- DropIndex
DROP INDEX "settings_fingerprints_browserId_key";

-- DropIndex
DROP INDEX "settings_fingerprints_deviceId_key";

-- DropIndex
DROP INDEX "settings_fingerprints_networkId_key";

-- DropIndex
DROP INDEX "settings_fingerprints_screenId_key";

-- DropIndex
DROP INDEX "settings_fingerprints_timezoneId_key";

-- AlterTable
ALTER TABLE "settings_fingerprints" DROP COLUMN "applicationId",
DROP COLUMN "browserId",
DROP COLUMN "deviceId",
DROP COLUMN "networkId",
DROP COLUMN "screenId",
DROP COLUMN "timezoneId",
ADD COLUMN     "availHeight" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "availWidth" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "batteryStatus" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "browserFullVersion" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "browserMajorVersion" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "browserName" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "city" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "colorDepth" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "connection_type" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "continent_code" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "continent_name" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "cookiesEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "country_code" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "country_name" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "cpu" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "currentTime" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "device" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "deviceMemory" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "deviceXDPI" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "deviceYDPI" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "dma" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "doNotTrack" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "hardwareConcurrency" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "indexedDBEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "innerHeight" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "innerWidth" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "ip" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "ip_routing_type" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isDST" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isDesktop" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isHeadless" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isLandscape" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isMobile" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isOnline" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isTablet" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isTouchDevice" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isVirtualMachine" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "language" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "languages" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "latitude" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "localStorageEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "localeDateFormat" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "localeTime" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "location" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "longitude" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "maxTouchPoints" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "mediaDevices" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "msa" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "orientation" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "os" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "osVersion" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "pixelDepth" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "pixelRatio" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "platform" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "plugins" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "radius" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "region_code" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "region_name" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "screenHeight" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "screenReader" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "screenWidth" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "serviceWorkerEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "sessionStorageEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "timezone" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "type" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "userAgent" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "utcOffset" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "utcOffsetFormatted" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "vendor" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "zip" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "settings_applications";

-- DropTable
DROP TABLE "settings_browsers";

-- DropTable
DROP TABLE "settings_devices";

-- DropTable
DROP TABLE "settings_networks";

-- DropTable
DROP TABLE "settings_screens";

-- DropTable
DROP TABLE "settings_timezones";

-- CreateTable
CREATE TABLE "user_verify_tokens" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "registration_code" TEXT NOT NULL,
    "authorizationTokens" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_verify_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_verify_tokens_email_key" ON "user_verify_tokens"("email");
