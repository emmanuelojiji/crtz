import "./Taskbar.scss";
import start from "../Media/start.png";
import { useState } from "react";
import computerIcon from "../Media/icon-computer.png"

const Taskbar = ({ windows, changeView }) => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  return (
    <div className="taskbar">
      <div className="start-menu">
        <div className="start-menu-logo">
          <h2>Windows95</h2>
        </div>
        <div className="start-menu-right">
          {windows
            //.filter((window) => window.category === "folder")
            .map((window) => (
              <div className="menu-option">
                <img src={window.icon} />
                <span>{window.name}</span>
              </div>
            ))}
             <div className="menu-option">
                <img src={computerIcon} />
                <span>Shut down</span>
              </div>
        </div>
      </div>
      <div className="taskbar-left">
        <button class="start-button">
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
