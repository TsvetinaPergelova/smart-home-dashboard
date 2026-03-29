import ActivityLog from "./components/ActivityLog";
import DeviceGrid from "./components/DeviceGrid";
import SceneControls from "./components/SceneControls";
import SensorPanel from "./components/SensorPanel";
import { useSmartHome } from "./hooks/useSmartHome";
import "./App.css";

function App() {
  const {
    devices,
    logs,
    temperature,
    humidity,
    scene,
    totalEnergy,
    toggleDevice,
    applyScene,
    clearLogs,
  } = useSmartHome();

  return (
    <main className="dashboard">
      <header className="hero">
        <h1>Smart Home Dashboard</h1>
        <p>Контрол, сензори и история на действията в реално време</p>
      </header>

      <SensorPanel
        temperature={temperature}
        humidity={humidity}
        totalEnergy={totalEnergy}
        scene={scene}
      />

      <SceneControls current={scene} onApply={applyScene} />

      <DeviceGrid devices={devices} onToggle={toggleDevice} />

      <ActivityLog logs={logs} onClear={clearLogs} />
    </main>
  );
}

export default App;
