import { useEvent } from "effector-react";
import { useState } from "react";

import Menu, { IMenu } from "./Menu";
import { $closeMenu, $toggleMenu } from "./store/open";

interface IProps {
  menus?: IMenu[];
}

const AppMenu = (props: IProps) => {
  const { menus } = props;
  const [subMenuHover, setSubMenuHover] = useState<string | null>(null);

  const toggleMenu = useEvent($toggleMenu);
  const closeMenu = useEvent($closeMenu);

  return (
    <div
      tabIndex={0}
      style={{ display: "flex", position: "relative" }}
      onBlur={closeMenu}
    >
      {menus?.map((menu) => {
        return (
          <Menu
            key={menu.label}
            menu={menu}
            onClick={toggleMenu}
            setHover={setSubMenuHover}
            hover={subMenuHover === menu.label}
          />
        );
      })}
    </div>
  );
};

export default AppMenu;
