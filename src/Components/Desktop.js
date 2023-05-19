import AlertWindow from "./AlertWindow";
import "./Desktop.scss";
import FolderClosed from "./DesktopIcon";
import "./global.scss";
import Taskbar from "./Taskbar";
import { useEffect, useState } from "react";
import Finder from "./Finder";
import NotepadWindow from "./NotepadWindow";
import { windowsArray } from "./WindowsArray";
import PictureWindow from "./PictureWindow";
import CodeCracker from "./CodeCrackerWindow";
import folderClosed from "../Media/folder-closed.png";
import DesktopIcon from "./DesktopIcon";

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

  const changeFileView = (windowId, fileId, view) => {
    setWindows((prevWindows) =>
      prevWindows.map((window) => {
        if (window.id !== windowId) return window;
        return {
          ...window,
          files: window.files.map((file) => {
            if (file.id !== fileId) return file;
            return { ...file, view };
          }),
        };
      })
    );
  };

  const [alertWindowVisible, setAlertWindowVisible] = useState(true);

  return (
    <main>
      {windows
        .filter(
          (window) => window.id === "code_cracker" && window.view === "open"
        )
        .map((window) => (
          <CodeCracker window={window} changeView={changeView} />
        ))}

      {alertWindowVisible && (
        <AlertWindow onClick={() => setAlertWindowVisible(false)} />
      )}

      <div className="folder-container">
        {windows.map((window) => (
          <DesktopIcon
            folderName={window.name}
            key={window.id}
            image={window.icon}
            onClick={(e) => {
              changeView(window.id, "open");
              e.stopPropogation();
            }}
          />
        ))}
      </div>

      {windows.map((window) => {
        return window.files
          .filter((file) => file.type === "document" && file.view === "open")
          .map((file) => (
            <NotepadWindow
              content={file.content}
              file={file}
              changeFileView={changeFileView}
              window={window}
            />
          ));
      })}

      {windows.map((window) => {
        return window.files
          .filter((file) => file.type === "image" && file.view === "open")
          .map((file) => (
            <PictureWindow
              image={file.src}
              file={file}
              changeFileView={changeFileView}
              window={window}
            />
          ));
      })}

      {windows
        .filter(
          (window) => window.view === "open" && window.category === "folder"
        )
        .map((window) => (
          <Finder
            heading={window.name}
            position={window.position}
            window={window}
            setWindows={setWindows}
            changeView={changeView}
            changeFileView={changeFileView}
          />
        ))}

      <Taskbar windows={windows} changeView={changeView} />
    </main>
  );
};

export default Desktop;
