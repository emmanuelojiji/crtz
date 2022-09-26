import AlertWindow from "./AlertWindow";
import "./Desktop.scss";
import FolderClosed from "./FolderClosed";
import "./global.scss";
import Taskbar from "./Taskbar";

const Desktop = () => {
  return (
    <main>

        <AlertWindow/>
      <FolderClosed folderName="New Releases" />
      <FolderClosed folderName="Media"/>
      <FolderClosed folderName="Notes"/>
      <FolderClosed folderName="knk"/>

      <Taskbar/>
    </main>

  );
};

export default Desktop;
