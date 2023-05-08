import NotepadIcon from "../Media/notepad.png"

export const windowsArray = [
  {
    id: "new_releases",
    name: "New Releases",
    category: "folder",
    desktopIcon: "test",
    view: "closed",
    position: { x: 20, y: 20 },
    draggablePosition: { x: 20, y: 20 },
    files: "New",
  },
  {
    id: "media",
    name: "Media",
    category: "folder",
    view: "closed",
    position: { x: 20, y: 60 },
    draggablePosition: { x: 20, y: 60 },
    files: <h1>Media</h1>,
  },

  {
    id: "notes",
    name: "Notes",
    category: "folder",
    icon: NotepadIcon,
    view: "closed",
    position: { x: 10, y: 50 },
    draggablePosition: { x: 10, y: 50 },
    files: [
      { name: "secret", content: "content 1" },
      { name: "random", content: "content 2" },
      { name: "discounts", content: "content 3" },
    ],
  },
];
