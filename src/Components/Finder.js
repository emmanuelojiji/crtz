import "./Finder.scss";
import Draggable from "react-draggable";
import notepad from "../Media/notepad.png";

const Finder = ({ currentFolder, setCurrentFolder }) => {
  const handleChange = (e) => {
    setCurrentFolder(e.target.value);
    console.log(currentFolder);
  };
  return (
    <Draggable>
      <div className="Finder">
        <div className="header">
          <h3>Documents</h3>
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
          {currentFolder === "new_releases" && <h1>New Releases</h1>}
          {currentFolder === "media" && <h1>media</h1>}
          {currentFolder === "notes" && (
            <>
              <div>
                <img src={notepad} className="notepad" />
                <p>Secrets</p>
              </div>

              <div>
                <img src={notepad} className="notepad" />
                <p>Secrets</p>
              </div>
            </>
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default Finder;
