import "./NotepadIcon.scss"
import notepad from "../Media/notepad.png";


const NotepadIcon = ({name}) => {
  return (
    <div>
      <img src={notepad} className="notepad"/>
      <p>{name}</p>
    </div>
  );
};

export default NotepadIcon;
