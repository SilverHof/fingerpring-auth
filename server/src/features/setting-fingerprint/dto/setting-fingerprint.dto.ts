import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateSettingsFingerprintDto {
  @IsOptional()
  @IsBoolean()
  browserName?: boolean;

  @IsOptional()
  @IsBoolean()
  browserMajorVersion?: boolean;

  @IsOptional()
  @IsBoolean()
  browserFullVersion?: boolean;

  @IsOptional()
  @IsBoolean()
  os?: boolean;

  @IsOptional()
  @IsBoolean()
  osVersion?: boolean;

  @IsOptional()
  @IsBoolean()
  device?: boolean;

  @IsOptional()
  @IsBoolean()
  userAgent?: boolean;

  @IsOptional()
  @IsBoolean()
  screenWidth?: boolean;

  @IsOptional()
  @IsBoolean()
  screenHeight?: boolean;

  @IsOptional()
  @IsBoolean()
  pixelRatio?: boolean;

  @IsOptional()
  @IsBoolean()
  colorDepth?: boolean;

  @IsOptional()
  @IsBoolean()
  orientation?: boolean;

  @IsOptional()
  @IsBoolean()
  availWidth?: boolean;

  @IsOptional()
  @IsBoolean()
  availHeight?: boolean;

  @IsOptional()
  @IsBoolean()
  innerWidth?: boolean;

  @IsOptional()
  @IsBoolean()
  innerHeight?: boolean;

  @IsOptional()
  @IsBoolean()
  deviceXDPI?: boolean;

  @IsOptional()
  @IsBoolean()
  deviceYDPI?: boolean;

  @IsOptional()
  @IsBoolean()
  isLandscape?: boolean;

  @IsOptional()
  @IsBoolean()
  isTouchDevice?: boolean;

  @IsOptional()
  @IsBoolean()
  maxTouchPoints?: boolean;

  @IsOptional()
  @IsBoolean()
  deviceMemory?: boolean;

  @IsOptional()
  @IsBoolean()
  hardwareConcurrency?: boolean;

  @IsOptional()
  @IsBoolean()
  isMobile?: boolean;

  @IsOptional()
  @IsBoolean()
  isDesktop?: boolean;

  @IsOptional()
  @IsBoolean()
  isTablet?: boolean;

  @IsOptional()
  @IsBoolean()
  isVirtualMachine?: boolean;

  @IsOptional()
  @IsBoolean()
  isOnline?: boolean;

  @IsOptional()
  @IsBoolean()
  platform?: boolean;

  @IsOptional()
  @IsBoolean()
  language?: boolean;

  @IsOptional()
  @IsBoolean()
  screenReader?: boolean;

  @IsOptional()
  @IsBoolean()
  cpu?: boolean;

  @IsOptional()
  @IsBoolean()
  isHeadless?: boolean;

  @IsOptional()
  @IsBoolean()
  batteryStatus?: boolean;

  @IsOptional()
  @IsBoolean()
  vendor?: boolean;

  @IsOptional()
  @IsBoolean()
  timezone?: boolean;

  @IsOptional()
  @IsBoolean()
  utcOffset?: boolean;

  @IsOptional()
  @IsBoolean()
  utcOffsetFormatted?: boolean;

  @IsOptional()
  @IsBoolean()
  currentTime?: boolean;

  @IsOptional()
  @IsBoolean()
  localeTime?: boolean;

  @IsOptional()
  @IsBoolean()
  isDST?: boolean;

  @IsOptional()
  @IsBoolean()
  localeDateFormat?: boolean;

  @IsOptional()
  @IsBoolean()
  ip?: boolean;

  @IsOptional()
  @IsBoolean()
  type?: boolean;

  @IsOptional()
  @IsBoolean()
  continent_code?: boolean;

  @IsOptional()
  @IsBoolean()
  continent_name?: boolean;

  @IsOptional()
  @IsBoolean()
  country_code?: boolean;

  @IsOptional()
  @IsBoolean()
  country_name?: boolean;

  @IsOptional()
  @IsBoolean()
  region_code?: boolean;

  @IsOptional()
  @IsBoolean()
  region_name?: boolean;

  @IsOptional()
  @IsBoolean()
  city?: boolean;

  @IsOptional()
  @IsBoolean()
  zip?: boolean;

  @IsOptional()
  @IsBoolean()
  latitude?: boolean;

  @IsOptional()
  @IsBoolean()
  longitude?: boolean;

  @IsOptional()
  @IsBoolean()
  location?: boolean;

  @IsOptional()
  @IsBoolean()
  connection_type?: boolean;

  @IsOptional()
  @IsBoolean()
  ip_routing_type?: boolean;

  @IsOptional()
  @IsBoolean()
  msa?: boolean;

  @IsOptional()
  @IsBoolean()
  dma?: boolean;

  @IsOptional()
  @IsBoolean()
  radius?: boolean;

  @IsOptional()
  @IsBoolean()
  plugins?: boolean;

  @IsOptional()
  @IsBoolean()
  localStorageEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  sessionStorageEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  indexedDBEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  cookiesEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  mediaDevices?: boolean;

  @IsOptional()
  @IsBoolean()
  serviceWorkerEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  languages?: boolean;

  @IsOptional()
  @IsBoolean()
  doNotTrack?: boolean;

  @IsOptional()
  @IsBoolean()
  pixelDepth?: boolean;

  @IsOptional()
  @IsBoolean()
  canvas?: boolean;

  @IsOptional()
  @IsBoolean()
  webgl?: boolean;
}
