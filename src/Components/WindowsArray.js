import NotepadIcon from "../Media/notepad.png";
import { DiscountCodes } from "./NotepadWindow";

export const windowsArray = [
  {
    id: "new_releases",
    name: "New Releases",
    category: "folder",
    desktopIcon: "test",
    view: "closed",
    position: { x: 20, y: 20 },
    draggablePosition: { x: 20, y: 20 },
    files: [
      { id: "secret", name: "secret", content: "content 1", view: "closed" },
      { id: "random", name: "random", content: "content 2", view: "closed" },
      {
        id: "discounts",
        name: "discounts",
        content: "content 3",
        view: "closed",
      },
    ],
  },
  {
    id: "media",
    name: "Media",
    category: "folder",
    view: "closed",
    position: { x: 20, y: 60 },
    draggablePosition: { x: 20, y: 60 },
    files: [
      { id: "secret", name: "secret", content: "content 1", view: "closed" },
      { id: "random", name: "random", content: "content 2", view: "closed" },
      {
        id: "discounts",
        name: "discounts",
        content: "content 3",
        view: "closed",
      },
    ],
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
      {
        id: "secret",
        name: "secret",
        content: <DiscountCodes />,
        view: "closed",
      },
      { id: "random", name: "random", content: "content 2", view: "closed" },
      {
        id: "discounts",
        name: "discounts",
        content: "content 3",
        view: "closed",
      },
    ],
  },
];
