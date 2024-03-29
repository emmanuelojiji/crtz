import "./Window.scss";
import Draggable from "react-draggable";

const NotepadWindow = ({
  content,
  minimize,
  close,
  changeFileView,
  file,
  window,
}) => {
  return (
    <Draggable handle=".header">
      <div className="FileWindow">
        <div className="header">
          <h3>Notepad</h3>
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

        <div className="file-container">{content}</div>
      </div>
    </Draggable>
  );
};

export const DiscountCodes = () => {
  return (
    <div className="DiscountCodes">
      <h1>Discount codes</h1>
      <p>dcdsocjdld</p>
      <p>kdsbkcbkds</p>
    </div>
  );
};

export default NotepadWindow;
