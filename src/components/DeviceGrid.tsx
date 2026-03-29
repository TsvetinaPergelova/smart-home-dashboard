import type { Device } from "../types";
import DeviceCard from "./DeviceCard";

interface DeviceGridProps {
  devices: Device[];
  onToggle: (id: string) => void;
}

function DeviceGrid({ devices, onToggle }: DeviceGridProps) {
  return (
    <section className="devices">
      {devices.map((device) => (
        <DeviceCard key={device.id} device={device} onToggle={onToggle} />
      ))}
    </section>
  );
}

export default DeviceGrid;
