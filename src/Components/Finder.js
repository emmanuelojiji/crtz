import "./Finder.scss";
import Draggable from "react-draggable";
import NotepadIcon from "./NotepadIcon";

const Finder = ({ currentFolder, setCurrentFolder }) => {
  const handleChange = (e) => {
    setCurrentFolder(e.target.value);
    console.log(currentFolder);
  };

  const notes = [
    {name: ""}
  ]
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
             <NotepadIcon/>
             <NotepadIcon/>
             <NotepadIcon/>
            </>
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default Finder;
