import "./FolderClosed.scss";
import Draggable from "react-draggable";

const DesktopIcon = ({ folderName, onClick, image }) => {
  return (
    <div class="folder-container" onClick={onClick}>
      <Draggable>
        <div className="folder-closed-container">
          <img src={image} className="desktop-item" draggable="false"/>
          <span>{folderName}</span>
        </div>
      </Draggable>
    </div>
  );
};

export default DesktopIcon;
