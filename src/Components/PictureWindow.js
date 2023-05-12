import "./Window.scss";

import Draggable from "react-draggable";

const PictureWindow = ({
  content,
  minimize,
  close,
  changeFileView,
  file,
  window,
  image,
}) => {
  return (
    <Draggable handle=".header">
      <div className="FileWindow">
        <div className="header">
          <h3>Picture Viewer</h3>
          <div className="header-right">
            <button
              className="header-close"
              onClick={() => changeFileView(window.id, file.id, "minimized")}
            >
              -
            </button>
            <button
              className="header-close"
              onClick={() => changeFileView(window.id, file.id, "close")}
            >
              x
            </button>
          </div>
        </div>

        <div className="file-container">
          <img src={image} />
        </div>
      </div>
    </Draggable>
  );
};

export default PictureWindow;
