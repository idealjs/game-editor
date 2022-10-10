import { CSSProperties } from "react";

import styles from "./index.module.css";
export interface IMenu {
  label: string;
  shortKey?: string;
  onClick?: () => void;
  menus?: IMenu[];
}

interface IProps {
  AppMenuId: string;
  style?: CSSProperties;
  menu: IMenu;
  onClick?: () => void;
}

const Menu = (props: IProps) => {
  const { AppMenuId, style, menu, onClick } = props;

  return (
    <div
      onClick={() => {
        onClick ? onClick() : menu.onClick && menu.onClick();
      }}
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
        {menu.menus?.map((menu) => {
          return (
            <Menu
              AppMenuId={AppMenuId}
              key={menu.label}
              menu={menu}
              style={{ width: "300px" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
