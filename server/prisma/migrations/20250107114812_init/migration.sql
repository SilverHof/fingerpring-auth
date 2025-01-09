-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('REGULAR', 'ADMIN');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('VERIFICATION', 'TWO_FACTOR', 'PASSWORD_RESET');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'REGULAR',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fingerprints" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "browserId" TEXT NOT NULL,
    "screenId" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "timezoneId" TEXT NOT NULL,
    "networkId" TEXT,
    "applicationId" TEXT NOT NULL,
    "canvas" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fingerprints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "browsers" (
    "id" TEXT NOT NULL,
    "browserName" TEXT NOT NULL,
    "browserMajorVersion" TEXT NOT NULL,
    "browserFullVersion" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "osVersion" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,

    CONSTRAINT "browsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "screens" (
    "id" TEXT NOT NULL,
    "screenWidth" INTEGER NOT NULL,
    "screenHeight" INTEGER NOT NULL,
    "pixelRatio" DOUBLE PRECISION NOT NULL,
    "colorDepth" INTEGER NOT NULL,
    "orientation" TEXT NOT NULL,
    "availWidth" INTEGER NOT NULL,
    "availHeight" INTEGER NOT NULL,
    "innerWidth" INTEGER NOT NULL,
    "innerHeight" INTEGER NOT NULL,
    "deviceXDPI" DOUBLE PRECISION NOT NULL,
    "deviceYDPI" DOUBLE PRECISION NOT NULL,
    "isLandscape" BOOLEAN NOT NULL,

    CONSTRAINT "screens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devices" (
    "id" TEXT NOT NULL,
    "isTouchDevice" BOOLEAN NOT NULL,
    "maxTouchPoints" INTEGER NOT NULL,
    "deviceMemory" INTEGER,
    "hardwareConcurrency" INTEGER NOT NULL,
    "isMobile" BOOLEAN NOT NULL,
    "isDesktop" BOOLEAN NOT NULL,
    "isTablet" BOOLEAN NOT NULL,
    "isVirtualMachine" BOOLEAN NOT NULL,
    "isOnline" BOOLEAN NOT NULL,
    "platform" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "screenReader" BOOLEAN NOT NULL,
    "cpu" TEXT NOT NULL,
    "isHeadless" BOOLEAN NOT NULL,
    "batteryStatus" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timezones" (
    "id" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "utcOffset" INTEGER NOT NULL,
    "utcOffsetFormatted" TEXT NOT NULL,
    "currentTime" TEXT NOT NULL,
    "localeTime" TEXT NOT NULL,
    "isDST" BOOLEAN NOT NULL,
    "localeDateFormat" TEXT NOT NULL,

    CONSTRAINT "timezones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "networks" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "continentCode" TEXT NOT NULL,
    "continentName" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,
    "regionCode" TEXT NOT NULL,
    "regionName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "location" JSONB NOT NULL,
    "connectionType" TEXT,
    "ipRoutingType" TEXT,
    "msa" TEXT,
    "dma" TEXT,
    "radius" INTEGER,

    CONSTRAINT "networks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" TEXT NOT NULL,
    "plugins" TEXT[],
    "localStorageEnabled" BOOLEAN NOT NULL,
    "sessionStorageEnabled" BOOLEAN NOT NULL,
    "indexedDBEnabled" BOOLEAN NOT NULL,
    "cookiesEnabled" BOOLEAN NOT NULL,
    "mediaDevices" TEXT[],
    "serviceWorkerEnabled" BOOLEAN NOT NULL,
    "languages" TEXT[],
    "doNotTrack" TEXT,
    "colorDepth" INTEGER NOT NULL,
    "pixelDepth" INTEGER NOT NULL,
    "hardwareConcurrency" INTEGER NOT NULL,
    "maxTouchPoints" INTEGER NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings_fingerprints" (
    "id" TEXT NOT NULL,
    "browserId" TEXT NOT NULL,
    "screenId" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "timezoneId" TEXT NOT NULL,
    "networkId" TEXT NOT NULL,
    "applicationId" TEXT NOT NULL,
    "canvasActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "settings_fingerprints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings_browsers" (
    "id" TEXT NOT NULL,
    "browserName" BOOLEAN NOT NULL DEFAULT true,
    "browserMajorVersion" BOOLEAN NOT NULL DEFAULT true,
    "browserFullVersion" BOOLEAN NOT NULL DEFAULT true,
    "os" BOOLEAN NOT NULL DEFAULT true,
    "osVersion" BOOLEAN NOT NULL DEFAULT true,
    "device" BOOLEAN NOT NULL DEFAULT true,
    "userAgent" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "settings_browsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings_screens" (
    "id" TEXT NOT NULL,
    "screenWidth" BOOLEAN NOT NULL DEFAULT true,
    "screenHeight" BOOLEAN NOT NULL DEFAULT true,
    "pixelRatio" BOOLEAN NOT NULL DEFAULT true,
    "colorDepth" BOOLEAN NOT NULL DEFAULT true,
    "orientation" BOOLEAN NOT NULL DEFAULT true,
    "availWidth" BOOLEAN NOT NULL DEFAULT true,
    "availHeight" BOOLEAN NOT NULL DEFAULT true,
    "innerWidth" BOOLEAN NOT NULL DEFAULT true,
    "innerHeight" BOOLEAN NOT NULL DEFAULT true,
    "deviceXDPI" BOOLEAN NOT NULL DEFAULT true,
    "deviceYDPI" BOOLEAN NOT NULL DEFAULT true,
    "isLandscape" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "settings_screens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings_devices" (
    "id" TEXT NOT NULL,
    "isTouchDevice" BOOLEAN NOT NULL DEFAULT true,
    "maxTouchPoints" BOOLEAN NOT NULL DEFAULT true,
    "deviceMemory" BOOLEAN NOT NULL DEFAULT true,
    "hardwareConcurrency" BOOLEAN NOT NULL DEFAULT true,
    "isMobile" BOOLEAN NOT NULL DEFAULT true,
    "isDesktop" BOOLEAN NOT NULL DEFAULT true,
    "isTablet" BOOLEAN NOT NULL DEFAULT true,
    "isVirtualMachine" BOOLEAN NOT NULL DEFAULT true,
    "isOnline" BOOLEAN NOT NULL DEFAULT true,
    "platform" BOOLEAN NOT NULL DEFAULT true,
    "language" BOOLEAN NOT NULL DEFAULT true,
    "screenReader" BOOLEAN NOT NULL DEFAULT true,
    "cpu" BOOLEAN NOT NULL DEFAULT true,
    "isHeadless" BOOLEAN NOT NULL DEFAULT true,
    "batteryStatus" BOOLEAN NOT NULL DEFAULT true,
    "vendor" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "settings_devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings_timezones" (
    "id" TEXT NOT NULL,
    "timezone" BOOLEAN NOT NULL DEFAULT true,
    "utcOffset" BOOLEAN NOT NULL DEFAULT true,
    "utcOffsetFormatted" BOOLEAN NOT NULL DEFAULT true,
    "currentTime" BOOLEAN NOT NULL DEFAULT true,
    "localeTime" BOOLEAN NOT NULL DEFAULT true,
    "isDST" BOOLEAN NOT NULL DEFAULT true,
    "localeDateFormat" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "settings_timezones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings_networks" (
    "id" TEXT NOT NULL,
    "ip" BOOLEAN NOT NULL DEFAULT true,
    "type" BOOLEAN NOT NULL DEFAULT true,
    "continent_code" BOOLEAN NOT NULL DEFAULT true,
    "continent_name" BOOLEAN NOT NULL DEFAULT true,
    "country_code" BOOLEAN NOT NULL DEFAULT true,
    "country_name" BOOLEAN NOT NULL DEFAULT true,
    "region_code" BOOLEAN NOT NULL DEFAULT true,
    "region_name" BOOLEAN NOT NULL DEFAULT true,
    "city" BOOLEAN NOT NULL DEFAULT true,
    "zip" BOOLEAN NOT NULL DEFAULT true,
    "latitude" BOOLEAN NOT NULL DEFAULT true,
    "longitude" BOOLEAN NOT NULL DEFAULT true,
    "location" BOOLEAN NOT NULL DEFAULT true,
    "connection_type" BOOLEAN NOT NULL DEFAULT true,
    "ip_routing_type" BOOLEAN NOT NULL DEFAULT true,
    "msa" BOOLEAN NOT NULL DEFAULT true,
    "dma" BOOLEAN NOT NULL DEFAULT true,
    "radius" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "settings_networks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings_applications" (
    "id" TEXT NOT NULL,
    "plugins" BOOLEAN NOT NULL DEFAULT true,
    "localStorageEnabled" BOOLEAN NOT NULL DEFAULT true,
    "sessionStorageEnabled" BOOLEAN NOT NULL DEFAULT true,
    "indexedDBEnabled" BOOLEAN NOT NULL DEFAULT true,
    "cookiesEnabled" BOOLEAN NOT NULL DEFAULT true,
    "mediaDevices" BOOLEAN NOT NULL DEFAULT true,
    "serviceWorkerEnabled" BOOLEAN NOT NULL DEFAULT true,
    "languages" BOOLEAN NOT NULL DEFAULT true,
    "doNotTrack" BOOLEAN NOT NULL DEFAULT true,
    "colorDepth" BOOLEAN NOT NULL DEFAULT true,
    "pixelDepth" BOOLEAN NOT NULL DEFAULT true,
    "hardwareConcurrency" BOOLEAN NOT NULL DEFAULT true,
    "maxTouchPoints" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "settings_applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "type" "TokenType" NOT NULL,
    "expires_in" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "fingerprints_browserId_key" ON "fingerprints"("browserId");

-- CreateIndex
CREATE UNIQUE INDEX "fingerprints_screenId_key" ON "fingerprints"("screenId");

-- CreateIndex
CREATE UNIQUE INDEX "fingerprints_deviceId_key" ON "fingerprints"("deviceId");

-- CreateIndex
CREATE UNIQUE INDEX "fingerprints_timezoneId_key" ON "fingerprints"("timezoneId");

-- CreateIndex
CREATE UNIQUE INDEX "fingerprints_networkId_key" ON "fingerprints"("networkId");

-- CreateIndex
CREATE UNIQUE INDEX "fingerprints_applicationId_key" ON "fingerprints"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "settings_fingerprints_browserId_key" ON "settings_fingerprints"("browserId");

-- CreateIndex
CREATE UNIQUE INDEX "settings_fingerprints_screenId_key" ON "settings_fingerprints"("screenId");

-- CreateIndex
CREATE UNIQUE INDEX "settings_fingerprints_deviceId_key" ON "settings_fingerprints"("deviceId");

-- CreateIndex
CREATE UNIQUE INDEX "settings_fingerprints_timezoneId_key" ON "settings_fingerprints"("timezoneId");

-- CreateIndex
CREATE UNIQUE INDEX "settings_fingerprints_networkId_key" ON "settings_fingerprints"("networkId");

-- CreateIndex
CREATE UNIQUE INDEX "settings_fingerprints_applicationId_key" ON "settings_fingerprints"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_token_key" ON "tokens"("token");

-- AddForeignKey
ALTER TABLE "fingerprints" ADD CONSTRAINT "fingerprints_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fingerprints" ADD CONSTRAINT "fingerprints_browserId_fkey" FOREIGN KEY ("browserId") REFERENCES "browsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fingerprints" ADD CONSTRAINT "fingerprints_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "screens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fingerprints" ADD CONSTRAINT "fingerprints_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fingerprints" ADD CONSTRAINT "fingerprints_timezoneId_fkey" FOREIGN KEY ("timezoneId") REFERENCES "timezones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fingerprints" ADD CONSTRAINT "fingerprints_networkId_fkey" FOREIGN KEY ("networkId") REFERENCES "networks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fingerprints" ADD CONSTRAINT "fingerprints_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "applications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings_fingerprints" ADD CONSTRAINT "settings_fingerprints_browserId_fkey" FOREIGN KEY ("browserId") REFERENCES "settings_browsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings_fingerprints" ADD CONSTRAINT "settings_fingerprints_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "settings_screens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings_fingerprints" ADD CONSTRAINT "settings_fingerprints_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "settings_devices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings_fingerprints" ADD CONSTRAINT "settings_fingerprints_timezoneId_fkey" FOREIGN KEY ("timezoneId") REFERENCES "settings_timezones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings_fingerprints" ADD CONSTRAINT "settings_fingerprints_networkId_fkey" FOREIGN KEY ("networkId") REFERENCES "settings_networks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings_fingerprints" ADD CONSTRAINT "settings_fingerprints_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "settings_applications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
