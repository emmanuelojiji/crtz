import AlertWindow from "./AlertWindow";
import "./Desktop.scss";
import FolderClosed from "./FolderClosed";
import "./global.scss";
import Taskbar from "./Taskbar";
import { useEffect, useState } from "react";
import Finder from "./Finder";
import FileWindow from "./FileWindow";
import { windowsArray } from "./WindowsArray";

const Desktop = () => {
  const [windows, setWindows] = useState(windowsArray);

  const openFolder = (windowId) => {
    setWindows((prevWindows) => {
      return prevWindows.map((window) => {
        if (window.id === windowId) {
          return { ...window, view: "open" };
        }
        return window;
      });
    });
  };

  useEffect(() => {
    console.log(windows);
  });

  const [alertWindowVisible, setAlertWindowVisible] = useState(true);
  const [currentFolder, setCurrentFolder] = useState("hey");
  const [notepadVisible, setNotepadVisible] = useState(false);

  return (
    <main>
      {notepadVisible && <FileWindow />}

      {alertWindowVisible && (
        <AlertWindow onClick={() => setAlertWindowVisible(false)} />
      )}

      {windows
        .filter((window) => window.view === "open")
        .map(() => (
          <Finder
            currentFolder={currentFolder}
            setCurrentFolder={setCurrentFolder}
          />
        ))}

      <div className="folder-container">
        {windows
          .filter((window) => window.category === "folder")
          .map((window) => (
            <FolderClosed
              folderName={window.name}
              key={window.id}
              onClick={() => openFolder(window.id)}
            />
          ))}
      </div>

      <Taskbar windows={windows} />
    </main>
  );
};

export default Desktop;
