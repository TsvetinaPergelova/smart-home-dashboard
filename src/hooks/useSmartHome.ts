import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { initialDevices } from "../data/initialDevices";
import type { Activity, Device, Scene } from "../types";
import { calculateTotalEnergy } from "../utils/energy";
import { formatTimeBG } from "../utils/format";

const DEVICES_STORAGE_KEY = "smart-home:devices";
const LOGS_STORAGE_KEY = "smart-home:logs";
const SCENE_STORAGE_KEY = "smart-home:scene";

function loadDevices(): Device[] {
  try {
    const raw = localStorage.getItem(DEVICES_STORAGE_KEY);
    if (!raw) return initialDevices;
    const parsed = JSON.parse(raw) as Device[];
    if (!Array.isArray(parsed)) return initialDevices;
    return parsed;
  } catch {
    return initialDevices;
  }
}

function loadLogs(): Activity[] {
  try {
    const raw = localStorage.getItem(LOGS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Activity[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function loadScene(): Scene {
  try {
    const raw = localStorage.getItem(SCENE_STORAGE_KEY);
    if (raw === "Home" || raw === "Night" || raw === "Away") return raw;
    return "Home";
  } catch {
    return "Home";
  }
}

export function useSmartHome() {
  const [devices, setDevices] = useState<Device[]>(loadDevices);
  const [logs, setLogs] = useState<Activity[]>(loadLogs);
  const [temperature, setTemperature] = useState(22.3);
  const [humidity, setHumidity] = useState(47);
  const [scene, setScene] = useState<Scene>(loadScene);

  const wasHighTemp = useRef(false);
  const wasLowHumidity = useRef(false);

  const addLog = useCallback((message: string) => {
    const entry: Activity = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      message,
      time: formatTimeBG(new Date()),
    };

    setLogs((prev) => [entry, ...prev].slice(0, 20));
  }, []);

  const clearLogs = useCallback(() => {
    setLogs([]);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTemperature((prev) => {
        const next = Math.min(
          30,
          Math.max(17, prev + (Math.random() > 0.5 ? 0.2 : -0.2)),
        );

        const isHighTemp = next > 27;
        if (isHighTemp && !wasHighTemp.current) {
          addLog("Внимание: висока температура в дома");
        }
        wasHighTemp.current = isHighTemp;

        return next;
      });

      setHumidity((prev) => {
        const next = Math.min(
          70,
          Math.max(25, prev + (Math.random() > 0.5 ? 1 : -1)),
        );

        const isLowHumidity = next < 30;
        if (isLowHumidity && !wasLowHumidity.current) {
          addLog("Внимание: ниска влажност в дома");
        }
        wasLowHumidity.current = isLowHumidity;

        return next;
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, [addLog]);

  useEffect(() => {
    localStorage.setItem(DEVICES_STORAGE_KEY, JSON.stringify(devices));
  }, [devices]);

  useEffect(() => {
    localStorage.setItem(LOGS_STORAGE_KEY, JSON.stringify(logs));
  }, [logs]);

  useEffect(() => {
    localStorage.setItem(SCENE_STORAGE_KEY, scene);
  }, [scene]);

  const totalEnergy = useMemo(() => calculateTotalEnergy(devices), [devices]);

  const toggleDevice = useCallback(
    (id: string) => {
      setDevices((prev) =>
        prev.map((device) => {
          if (device.id !== id) return device;

          const nextState = !device.isOn;
          addLog(
            `${device.name} беше ${nextState ? "включен(а)" : "изключен(а)"}`,
          );

          return { ...device, isOn: nextState };
        }),
      );
    },
    [addLog],
  );

  const applyScene = useCallback(
    (nextScene: Scene) => {
      setScene(nextScene);

      setDevices((prev) =>
        prev.map((device) => {
          if (nextScene === "Home") {
            if (device.type === "lock") return { ...device, isOn: false };
            return { ...device, isOn: true };
          }

          if (nextScene === "Night") {
            if (device.type === "lock") return { ...device, isOn: true };
            return { ...device, isOn: false };
          }

          if (nextScene === "Away") {
            if (device.type === "lock") return { ...device, isOn: true };
            return { ...device, isOn: false };
          }

          return device;
        }),
      );

      addLog(`Сменен режим: ${nextScene}`);
    },
    [addLog],
  );

  return {
    devices,
    logs,
    temperature,
    humidity,
    scene,
    totalEnergy,
    toggleDevice,
    applyScene,
    clearLogs,
  };
}
