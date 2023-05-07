import "./FileWindow.scss";
import Draggable from "react-draggable";

const FileWindow = () => {
  return (
    <Draggable>
      <div className="FileWindow">
        <div className="header">Notepad</div>
        <div className="file-container"></div>
      </div>
    </Draggable>
  );
};

export default FileWindow;
