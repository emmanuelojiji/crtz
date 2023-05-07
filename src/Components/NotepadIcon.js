import "./NotepadIcon.scss"
import notepad from "../Media/notepad.png";


const NotepadIcon = () => {
  return (
    <div>
      <img src={notepad} className="notepad"/>
      <p>Secrets</p>
    </div>
  );
};

export default NotepadIcon;
