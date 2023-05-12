import NotepadIcon from "../Media/notepad.png";
import ImageIcon from "../Media/icon-image.png";
import { DiscountCodes } from "./NotepadWindow";

import image1 from "../Media/image-1.jpg";


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
    id: "pictures",
    name: "Pictures",
    category: "folder",
    icon: ImageIcon,
    view: "closed",
    position: { x: 20, y: 60 },
    draggablePosition: { x: 20, y: 60 },
    files: [
      {
        id: 1,
        name: "img-1",
        content: "content 1",
        view: "closed",
        src: image1,
        type: "image",
      },
      {
        id: 2,
        name: "random",
        content: "content 2",
        view: "closed",
        type: "image",
      },
      {
        id: 3,
        name: "discounts",
        content: "content 3",
        view: "closed",
        type: "image",
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
        type: "document",
      },
      {
        id: "random",
        name: "random",
        content: "content 2",
        view: "closed",
        type: "document",
      },
      {
        id: "discounts",
        name: "discounts",
        content: "content 3",
        view: "closed",
        type: "document",
      },
    ],
  },
];
