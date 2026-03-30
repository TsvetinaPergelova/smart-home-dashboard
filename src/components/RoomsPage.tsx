import type { Device } from "../types";

interface RoomsPageProps {
  devices: Device[];
  onToggle: (id: string) => void;
}

function RoomsPage({ devices, onToggle }: RoomsPageProps) {
  const rooms = Object.entries(
    devices.reduce<Record<string, Device[]>>((acc, device) => {
      if (!acc[device.room]) {
        acc[device.room] = [];
      }

      acc[device.room].push(device);
      return acc;
    }, {}),
  );

  const turnRoomOff = (roomDevices: Device[]) => {
    roomDevices
      .filter((device) => device.isOn && device.type !== "lock")
      .forEach((device) => onToggle(device.id));
  };

  return (
    <main className="dashboard">
      <header className="hero">
        <h1>Стаи и устройства</h1>
        <p>Преглед и управление на устройствата по стаи</p>
      </header>

      <section className="rooms-grid" aria-label="Стаи">
        {rooms.map(([room, roomDevices]) => {
          const activeCount = roomDevices.filter(
            (device) => device.isOn,
          ).length;

          return (
            <article className="room-card" key={room}>
              <div className="room-head">
                <h2>{room}</h2>
                <strong>
                  {activeCount}/{roomDevices.length} активни
                </strong>
              </div>

              <button
                className="ghost"
                onClick={() => turnRoomOff(roomDevices)}
                disabled={!roomDevices.some((d) => d.isOn && d.type !== "lock")}
              >
                Изключи уредите
              </button>

              <ul>
                {roomDevices.map((device) => (
                  <li key={device.id}>
                    <div>
                      <p>{device.name}</p>
                      <small>{device.isOn ? "РАБОТИ" : "ИЗКЛЮЧЕНО"}</small>
                    </div>
                    <button onClick={() => onToggle(device.id)}>
                      {device.isOn ? "Изключи" : "Включи"}
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default RoomsPage;
