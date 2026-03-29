export type DeviceType = "light" | "ac" | "lock";
export type Scene = "Home" | "Night" | "Away";

export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  isOn: boolean;
}

export interface Activity {
  id: number;
  message: string;
  time: string;
}
