import { useStore } from "effector-react";
import { CSSProperties, useState } from "react";

import $open from "../store/open";
import styles from "./index.module.css";
export interface IMenu {
  label: string;
  shortKey?: string;
  onClick?: () => void;
  menus?: IMenu[];
}

interface IProps {
  style?: CSSProperties;
  menu: IMenu;
  onClick?: () => void;
}

const Menu = (props: IProps) => {
  const { style, menu, onClick } = props;
  const open = useStore($open);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick && onClick()}
      style={{
        position: "relative",
        backgroundColor: "#404040",
        zIndex: 1,
        ...style,
      }}
    >
      <div
        style={{
          marginLeft: "4px",
          position: "relative",
          userSelect: "none",
          whiteSpace: "nowrap",
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
          hover &&
          menu.menus?.map((menu) => {
            return (
              <Menu key={menu.label} menu={menu} style={{ width: "300px" }} />
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
