import "./Taskbar.scss";
import start from "../Media/start.png";

const Taskbar = ({ windows, changeView }) => {
  return (
    <div className="taskbar">
      <div className="taskbar-left">
        <button class="start-button">
          <img src={start}></img>start
        </button>

        {windows
          .filter(
            (window) => window.view === "open" || window.view === "minimized"
          )
          .map((window) => (
            <div
              className="taskbar-pill"
              onClick={() => changeView(window.id, "open")}
            >
              {window.name}
            </div>
          ))}
      </div>

      <p>19:05</p>
    </div>
  );
};

export default Taskbar;
