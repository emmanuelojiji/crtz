import "./Taskbar.scss";
import start from "../Media/start.png";
import { useState } from "react";
import computerIcon from "../Media/icon-computer.png";
import settingsIcon from "../Media/icon-settings.png";
import { useRef } from "react";

const Taskbar = ({ windows, changeView }) => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const startMenuRef = useRef(null)

  return (
    <div className="taskbar">
      {startMenuOpen && (
        <div className="start-menu">
          <div className="start-menu-logo">
            <h2>Windows95</h2>
          </div>
          <div className="start-menu-right">
            {windows
              //.filter((window) => window.category === "folder")
              .map((window) => (
                <div className="menu-option" onClick={() => changeView(window.id, "open")}>
                  <img src={window.icon} />
                  <span>{window.name}</span>
                </div>
              ))}
            <div className="menu-option">
              <img src={settingsIcon} />
              <span>Settings</span>
            </div>
            <div className="menu-option">
              <img src={computerIcon} />
              <span>Shut Down..</span>
            </div>
          </div>
        </div>
      )}
      <div className="taskbar-left">
        <button class="start-button"  onClick={() => setStartMenuOpen(true)}>
          <img src={start}></img>start
        </button>

        {windows
          .filter(
            (window) => window.view === "open" || window.view === "minimized"
          )
          .map((window) => (
            <button
              className="taskbar-pill"
              onClick={() => changeView(window.id, "open")}
            >
              {window.name}
            </button>
          ))}
      </div>

      <p>19:05</p>
    </div>
  );
};

export default Taskbar;
