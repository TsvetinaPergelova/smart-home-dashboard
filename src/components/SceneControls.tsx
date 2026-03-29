import type { Scene } from "../types";

interface SceneControlsProps {
  current: Scene;
  onApply: (scene: Scene) => void;
}

const SCENES: Scene[] = ["Home", "Night", "Away"];

function SceneControls({ current, onApply }: SceneControlsProps) {
  return (
    <section className="scenes">
      {SCENES.map((scene) => (
        <button
          key={scene}
          className={current === scene ? "active" : ""}
          onClick={() => onApply(scene)}
        >
          {scene}
        </button>
      ))}
    </section>
  );
}

export default SceneControls;
