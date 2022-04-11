import { useState } from "react";
import styles from "./index.module.css";

export interface IMenu {
  label: string;
  shortKey?: string;
  menus?: IMenu[];
}

interface IProps {
  menu: IMenu;
}

const Menu = (props: IProps) => {
  const { menu } = props;
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ position: "relative", backgroundColor: "#404040", zIndex: 1 }}
    >
      <div
        style={{
          marginLeft: "4px",
          position: "relative",
          userSelect: "none",
        }}
        onClick={() => {
          setOpen((o) => !o);
        }}
      >
        {menu.label}
      </div>
      <div
        className={styles.menu}
        style={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        {open &&
          menu.menus?.map((menu) => {
            return <Menu key={menu.label} menu={menu} />;
          })}
      </div>
    </div>
  );
};

export default Menu;
