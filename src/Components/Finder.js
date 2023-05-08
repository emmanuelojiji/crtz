import "./Finder.scss";
import Draggable from "react-draggable";
import NotepadIcon from "./NotepadIcon";
import { useEffect } from "react";

const Finder = ({
  currentFolder,
  setCurrentFolder,
  close,
  minimize,
  heading,
  position,
  onStopDrag,
  draggablePosition,
  content,
  window,
}) => {
  const handleChange = (e) => {
    setCurrentFolder(e.target.value);
    console.log(currentFolder);
  };

  return (
    <Draggable defaultPosition={position} onStop={onStopDrag}>
      <div className="Finder">
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
            <>
              <img src={window.icon} style={{width: "30px"}}></img>
              <p>{file.name}</p>
            </>
          ))}
        </div>
      </div>
    </Draggable>
  );
};

export default Finder;
