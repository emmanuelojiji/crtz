import NotepadIcon from "../Media/notepad.png";
import ImageIcon from "../Media/icon-image.png";
import SettingsIcon from "../Media/icon-settings.png";
import { DiscountCodes } from "./NotepadWindow";
import RecyclyingBinIcon from "../Media/icon-recycling-bin.png";
import FolderClosedIcon from "../Media/folder-closed.png";
import AppIcon from "../Media/icon-app.png";

import image1 from "../Media/image-1.jpg";

export const windowsArray = [
  {
    id: "future_releases",
    name: "Future releases",
    category: "folder",
    icon: FolderClosedIcon,
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
    icon: FolderClosedIcon,
    view: "closed",
    position: { x: 200, y: 50 },
    files: [
      {
        id: 1,
        name: "img-1",
        content: "image 1",
        view: "closed",
        src: image1,
        type: "image",
        icon: ImageIcon,
      },
      {
        id: 2,
        name: "img-2",
        content: "image 2",
        view: "closed",
        type: "image",
        icon: ImageIcon,
      },
      {
        id: 3,
        name: "img-3",
        content: "image 3",
        view: "closed",
        type: "image",
        icon: ImageIcon,
      },
    ],
  },

  {
    id: "documents",
    name: "Documents",
    category: "folder",
    icon: FolderClosedIcon,
    view: "closed",
    position: { x: -200, y: 50 },
    draggablePosition: { x: 10, y: 50 },
    files: [
      {
        id: "secret",
        name: "secret",
        icon: NotepadIcon,
        content: <DiscountCodes />,
        view: "closed",
        type: "document",
      },
      {
        id: "random",
        name: "random",
        icon: NotepadIcon,
        content: "content 2",
        view: "closed",
        type: "document",
      },
      {
        id: "discounts",
        name: "discounts",
        icon: NotepadIcon,
        content: "content 3",
        view: "closed",
        type: "document",
      },
    ],
  },

  {
    id: "recycling_bin",
    name: "Recycling Bin",
    category: "folder",
    icon: RecyclyingBinIcon,
    view: "closed",
    position: { x: 20, y: 20 },
    draggablePosition: { x: 20, y: 20 },
    files: [
      { id: "secret", name: "tech pack", content: "content 1", view: "closed" },
      { id: "random", name: "file", content: "content 2", view: "closed" },
      {
        id: "discounts",
        name: "file",
        content: "content 3",
        view: "closed",
      },
    ],
  },
  {
    id: "calculator",
    name: "calculator",
    category: "app",
    icon: AppIcon,
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
    id: "settings",
    name: "settings",
    category: "app",
    icon: SettingsIcon,
    view: "closed",
    files: [],
  },
];
