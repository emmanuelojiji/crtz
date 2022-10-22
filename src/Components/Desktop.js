import AlertWindow from "./AlertWindow";
import "./Desktop.scss";
import FolderClosed from "./FolderClosed";
import "./global.scss";
import Taskbar from "./Taskbar";
import { useState } from "react";

const Desktop = () => {
  const [alertWindowVisible, setAlertWindowVisible] = useState(true);

  return (
    <main>
      {alertWindowVisible && (
        <AlertWindow onClick={() => setAlertWindowVisible(false)} />
      )}

      <div class="folder-container">
        <FolderClosed folderName="New Releases" />
        <FolderClosed folderName="Media" />
        <FolderClosed folderName="Notes" />
        <FolderClosed folderName="knk" />
      </div>

      <Taskbar />
    </main>
  );
};

export default Desktop;
