import "./SettingsWindow.scss";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";

const SettingsWindow = ({
  changeView,
  window,
  wallpaper_1,
  wallpaper_2,
  wallpaper_3,
  currentWallpaper,
  setCurrentWallpaper,
}) => {
  const changeWallpaper = (wallpaper) => {
    setCurrentWallpaper(wallpaper);
  };

  const [preview, setPreview] = useState(currentWallpaper);

  return (
    <Draggable handle=".header">
      <div className="CodeCracker SettingsWindow FileWindow">
        <div className="header">
          <h3>Settings</h3>
          <div className="header-right">
            <button
              className="header-close"
              onClick={() => changeView(window.id, "minimized")}
            >
              -
            </button>
            <button
              className="header-close"
              onClick={() => changeView(window.id, "close")}
            >
              x
            </button>
          </div>
        </div>

        <div className="file-container">
          <div className="computer-outer">
            <div
              className="computer-inner"
              style={{ backgroundImage: `url(${preview})` }}
            ></div>
          </div>

          <div className="wallpaper-container">
            <span className="container-heading">Wallpaper</span>
            <div className="input-container">
              <input
                type="radio"
                name="fav_language"
                value="wallpaper-1"
                onChange={() => setPreview(wallpaper_1)}
              />
              <label for="wallpaper-1">Ski Mask</label>
            </div>

            <div className="input-container">
              <input
                type="radio"
                name="fav_language"
                value="CSS"
                onChange={() => setPreview(wallpaper_2)}
              />
              <label for="wallpaper-2">Crew</label>
            </div>

            <div className="input-container">
              <input
                type="radio"
                name="fav_language"
                value="JavaScript"
                onChange={() => setPreview(wallpaper_3)}
              />
              <label for="wallpaper-3">Nike</label>
            </div>
          </div>
        </div>

<div className="button-container">
        <button className="button-ok" onClick={() => setCurrentWallpaper(preview)}>Ok</button>
        <button className="button-ok">Cancel</button>
        </div>
      </div>
    </Draggable>
  );
};

export default SettingsWindow;
