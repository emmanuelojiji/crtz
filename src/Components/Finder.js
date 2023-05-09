import "./Finder.scss";
import Draggable from "react-draggable";
import NotepadIcon from "./NotepadIcon";
import { useEffect, useState } from "react";

const Finder = ({
  currentFolder,
  setCurrentFolder,
  close,
  minimize,
  heading,
  position,
  onStopDrag,
  window,
  setWindows,
}) => {
  const handleChange = (e) => {
    setCurrentFolder(e.target.value);
    console.log(currentFolder);
  };

  const openFile = (windowId, fileId, view) => {
    setWindows((prevWindows) =>
      prevWindows.map((window) => {
        if (window.id !== windowId) return window;
        return {
          ...window,
          files: window.files.map((file) => {
            if (file.id !== fileId) return file;
            return { ...file, view };
          }),
        };
      })
    );
  };

  const [zIndex, setZIndex] = useState(0)

  return (
    <Draggable defaultPosition={position}>
      <div className="Finder" style={{zIndex: zIndex}} onClick={() => setZIndex(5)}>
        <div className="header">
          <h3>{heading}</h3>
          <div>
            <h5 onClick={minimize}>Minimize</h5>
            <h5 onClick={close}>Close</h5>
          </div>
        </div>
        <div className="finder-navigation">
          <h4>Folder:</h4>
          <select onChange={handleChange}>
            <option value="media">Media</option>
            <option value="notes">Notes</option>
            <option value="new_releases">New Releases</option>
          </select>
        </div>

        <div className="folders-container">
          {window.files.map((file) => (
            <div
              className="icon-name-wrap"
              onClick={() => openFile(window.id, file.id, "open")}
            >
              <img src={window.icon} style={{ width: "30px" }}></img>
              <p>{file.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Draggable>
  );
};

export default Finder;
