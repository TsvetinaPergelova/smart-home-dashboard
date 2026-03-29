import type { Device, DeviceType } from "../types";

const ENERGY_MAP: Record<DeviceType, number> = {
  light: 0.06,
  ac: 1.2,
  lock: 0.01,
};

export function calculateTotalEnergy(devices: Device[]): number {
  return devices
    .filter((device) => device.isOn)
    .reduce((sum, device) => sum + ENERGY_MAP[device.type], 0);
}
