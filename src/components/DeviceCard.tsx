import type { Device } from "../types";

interface DeviceCardProps {
  device: Device;
  onToggle: (id: string) => void;
}

const DEVICE_LABELS: Record<Device["type"], string> = {
  light: "Осветление",
  ac: "Климатик",
  lock: "Ключалка",
};

function DeviceCard({ device, onToggle }: DeviceCardProps) {
  return (
    <article className={`device ${device.isOn ? "on" : "off"}`}>
      <h3>{device.name}</h3>
      <p>Тип: {DEVICE_LABELS[device.type]}</p>
      <p>Статус: {device.isOn ? "РАБОТИ" : "ИЗКЛЮЧЕНО"}</p>
      <button onClick={() => onToggle(device.id)}>
        {device.isOn ? "Изключи" : "Включи"}
      </button>
    </article>
  );
}

export default DeviceCard;
