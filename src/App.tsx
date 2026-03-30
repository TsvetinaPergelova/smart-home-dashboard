import ActivityLog from "./components/ActivityLog";
import DeviceGrid from "./components/DeviceGrid";
import RoomsPage from "./components/RoomsPage";
import SceneControls from "./components/SceneControls";
import SensorPanel from "./components/SensorPanel";
import { useSmartHome } from "./hooks/useSmartHome";
import { Link, Navigate, Route, Routes } from "react-router-dom";
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
    <Routes>
      <Route
        path="/"
        element={
          <main className="dashboard">
            <header className="hero">
              <div className="hero-top">
                <h1>Smart Home Dashboard</h1>
                <Link className="nav-link" to="/rooms">
                  Към стаи
                </Link>
              </div>
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
        }
      />

      <Route
        path="/rooms"
        element={
          <>
            <nav className="top-nav">
              <Link className="nav-link" to="/">
                Към dashboard
              </Link>
            </nav>
            <RoomsPage devices={devices} onToggle={toggleDevice} />
          </>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
