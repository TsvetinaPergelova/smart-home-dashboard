import type { Device } from "../types";

export const initialDevices: Device[] = [
  { id: "1", name: "Хол - Лампа", type: "light", isOn: false },
  { id: "2", name: "Кухня - Климатик", type: "ac", isOn: true },
  { id: "3", name: "Входна врата", type: "lock", isOn: false },
  { id: "4", name: "Спалня - Лампа", type: "light", isOn: false },
];
