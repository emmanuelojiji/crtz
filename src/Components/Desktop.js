import AlertWindow from "./AlertWindow";
import "./Desktop.scss";
import FolderClosed from "./FolderClosed";
import "./global.scss";
import Taskbar from "./Taskbar";
import { useEffect, useState } from "react";
import Finder from "./Finder";
import NotepadWindow from "./NotepadWindow";
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

  useEffect(() => {
    const files = windowsArray?.[0]?.files;
    console.log(files);
  });

  const [alertWindowVisible, setAlertWindowVisible] = useState(true);
  const [notepadVisible, setNotepadVisible] = useState(false);

  return (
    <main>
      {alertWindowVisible && (
        <AlertWindow onClick={() => setAlertWindowVisible(false)} />
      )}

      {windows.map((window) => {
        return window.files
          .filter((file) => file.view === "open")
          .map((file) => <NotepadWindow content={file.content} />);
      })}

      {windows
        .filter((window) => window.view === "open")
        .map((window) => (
          <Finder
            heading={window.name}
            close={() => changeView(window.id, "close")}
            minimize={() => changeView(window.id, "minimized")}
            position={window.position}
            window={window}
            setWindows={setWindows}
          />
        ))}

      <div className="folder-container">
        {windows
          .filter((window) => window.category === "folder")
          .map((window) => (
            <FolderClosed
              folderName={window.name}
              key={window.id}
              onClick={(e) => {
                changeView(window.id, "open");
                e.stopPropogation();
              }}
            />
          ))}
      </div>

      <Taskbar windows={windows} changeView={changeView} />
    </main>
  );
};

export default Desktop;
