import type { Activity } from "../types";

interface ActivityLogProps {
  logs: Activity[];
  onClear: () => void;
}

function ActivityLog({ logs, onClear }: ActivityLogProps) {
  return (
    <section className="log">
      <div className="log-header">
        <h2>История</h2>
        <button
          className="ghost"
          onClick={onClear}
          disabled={logs.length === 0}
        >
          Изчисти
        </button>
      </div>

      {logs.length === 0 ? <p>Няма активност.</p> : null}

      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            <span>[{log.time}]</span> {log.message}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ActivityLog;
