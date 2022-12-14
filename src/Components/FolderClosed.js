import "./FolderClosed.scss";
import folderClosed from "../Media/folder-closed.png";
import Draggable from "react-draggable";

const FolderClosed = ({folderName}) => {
  return (
    <div class="folder-container">
    <Draggable>
      <div className="folder-closed-container">
        <img src={folderClosed} className="desktop-item" draggable="false" />
        <span>{folderName}</span>
      </div>
    </Draggable>
    </div>
  );
};

export default FolderClosed;
