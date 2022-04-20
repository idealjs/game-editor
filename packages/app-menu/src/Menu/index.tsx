import { useStoreMap } from "effector-react";
import { CSSProperties, useEffect, useState } from "react";

import $open from "../store/open";
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
  hover?: boolean;
  setHover?: (label: string) => void;
}

const Menu = (props: IProps) => {
  const { AppMenuId, style, menu, onClick, hover, setHover } = props;
  const [subMenuHover, setSubMenuHover] = useState<string | null>(null);
  const open = useStoreMap($open, (state) => state[AppMenuId]);
  
  useEffect(() => {
    if (!open || !hover) {
      setSubMenuHover(null);
    }
  }, [hover, open]);

  return (
    <div
      onMouseEnter={() => setHover && setHover(menu.label)}
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
        {open &&
          hover &&
          menu.menus?.map((menu) => {
            return (
              <Menu
                AppMenuId={AppMenuId}
                key={menu.label}
                menu={menu}
                style={{ width: "300px" }}
                setHover={setSubMenuHover}
                hover={subMenuHover === menu.label}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
