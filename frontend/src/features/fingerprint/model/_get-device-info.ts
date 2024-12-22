// export interface DeviceInfo {
//   deviceModel: string | null;
//   osName: string | null;
//   osVersion: string | null;
//   cpuArchitecture: string | null;
//   isVirtualEnvironment: boolean;
// }

// export const getDeviceInfo = (): DeviceInfo => {
//   const isVirtualEnvironment = () => {
//     // Проверка на виртуальную среду (простая версия, может быть улучшена)
//     const userAgent = navigator.userAgent.toLowerCase();
//     return userAgent.includes("virtualbox") || userAgent.includes("vmware");
//   };

//   return {
//     deviceModel: navigator.platform || null,
//     osName: navigator.userAgentData?.platform || navigator.platform || null,
//     osVersion: navigator.userAgent.match(/\((.*?)\)/)?.[1] || null,
//     cpuArchitecture: navigator.userAgentData?.architecture || null,
//     isVirtualEnvironment: isVirtualEnvironment(),
//   };
// };