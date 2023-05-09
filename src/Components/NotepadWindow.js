import "./NotepadWindow.scss";
import Draggable from "react-draggable";

const NotepadWindow = ({content}) => {
  return (
    <Draggable handle=".header">
      <div className="FileWindow">
        <div className="header">Notepad</div>
        <div className="file-container">{content}</div>
      </div>
    </Draggable>
  );
};

export const DiscountCodes = () => {
  return(
    <div className="DiscountCodes">
    <h1>Discount codes</h1>
    <p>dcdsocjdld</p>
    <p>kdsbkcbkds</p>
    </div>
  )
}

export default NotepadWindow;
