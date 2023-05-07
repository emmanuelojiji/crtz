import AlertWindow from "./AlertWindow";
import "./Desktop.scss";
import FolderClosed from "./FolderClosed";
import "./global.scss";
import Taskbar from "./Taskbar";
import { useState } from "react";
import Finder from "./Finder";

const Desktop = () => {
  const folders = [
    { folder: "new_releases", folderName: "New Releases" },
    { folder: "media", folderName: "Media" },
    { folder: "notes", folderName: "Notes" },
  ];

  const [alertWindowVisible, setAlertWindowVisible] = useState(true);
  const [currentFolder, setCurrentFolder] = useState("hey");
  const [finderVisible, setFinderVisible] = useState(false);

  return (
    <main>
      {alertWindowVisible && (
        <AlertWindow onClick={() => setAlertWindowVisible(false)} />
      )}

      {finderVisible && (
        <Finder
          currentFolder={currentFolder}
          setCurrentFolder={setCurrentFolder}
        />
      )}

      <div class="folder-container">
        {folders.map(({ folder, folderName }) => (
          <FolderClosed
            folderName={folderName}
            folder={folder}
            setCurrentFolder={setCurrentFolder}
            setFinderVisible={setFinderVisible}
          />
        ))}
      </div>

      <Taskbar />
    </main>
  );
};

export default Desktop;
