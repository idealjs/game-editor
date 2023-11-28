import Menu from "./Menu";
import { IMenuItem } from "./MenuItem";
import { menuBar } from "./style.css";

const menuItems: IMenuItem[] = [
  {
    label: "File",
    subMenus: [
      {
        label: "Open Recent",
        subMenus: [{ label: "abc" }, { label: "123" }, { label: "xxx" }],
      },
    ],
  },
  {
    label: "Edit",
    subMenus: [{ label: "Undo" }, { label: "Redo" }],
  },
  {
    label: "Layout",
    subMenus: [
      {
        label: "Open Layout",
        subMenus: [
          {
            label: "Open View",
          },
        ],
      },
    ],
  },
];

const Menubar = () => {
  return (
    <div className={menuBar}>
      {menuItems.map((menuItem) => {
        return <Menu menuItem={menuItem} />;
      })}
    </div>
  );
};

export default Menubar;
