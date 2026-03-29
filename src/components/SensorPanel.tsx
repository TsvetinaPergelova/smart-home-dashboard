import type { Scene } from "../types";

interface SensorPanelProps {
  temperature: number;
  humidity: number;
  totalEnergy: number;
  scene: Scene;
}

function SensorPanel({
  temperature,
  humidity,
  totalEnergy,
  scene,
}: SensorPanelProps) {
  return (
    <section className="stats">
      <article className="card">
        <h3>Температура</h3>
        <strong>{temperature.toFixed(1)}°C</strong>
      </article>

      <article className="card">
        <h3>Влажност</h3>
        <strong>{humidity}%</strong>
      </article>

      <article className="card">
        <h3>Енергия</h3>
        <strong>{totalEnergy.toFixed(2)} kW</strong>
      </article>

      <article className="card">
        <h3>Режим</h3>
        <strong>{scene}</strong>
      </article>
    </section>
  );
}

export default SensorPanel;
