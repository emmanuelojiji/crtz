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

  const changeView = (windowId, view) => {
    setWindows((prevWindows) => {
      return prevWindows.map((window) => {
        if (window.id === windowId) {
          return { ...window, view: view };
        }
        return window;
      });
    });
  };

  const [alertWindowVisible, setAlertWindowVisible] = useState(true);
  const [notepadVisible, setNotepadVisible] = useState(false);

  return (
    <main>
      {notepadVisible && <FileWindow />}

      {alertWindowVisible && (
        <AlertWindow onClick={() => setAlertWindowVisible(false)} />
      )}

      {windows
        .filter((window) => window.view === "open")
        .map((window) => (
          <Finder
            heading={window.name}
            close={() => changeView(window.id, "close")}
            minimize={() => changeView(window.id, "minimized")}
            position={window.position}
            window={window}
          />
        ))}

      <div className="folder-container">
        {windows
          .filter((window) => window.category === "folder")
          .map((window) => (
            <FolderClosed
              folderName={window.name}
              key={window.id}
              onClick={() => changeView(window.id, "open")}
            />
          ))}
      </div>

      <Taskbar windows={windows} changeView={changeView} />
    </main>
  );
};

export default Desktop;
