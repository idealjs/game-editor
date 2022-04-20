import { useEvent } from "effector-react";
import { useState } from "react";

import Menu, { IMenu } from "./Menu";
import { $closeMenu, $toggleMenu } from "./store/open";

interface IProps {
  id: string;
  menus?: IMenu[];
}

const AppMenu = (props: IProps) => {
  const { id, menus } = props;
  const [subMenuHover, setSubMenuHover] = useState<string | null>(null);

  const toggleMenu = useEvent($toggleMenu);
  const closeMenu = useEvent($closeMenu);

  return (
    <div
      tabIndex={0}
      style={{ display: "flex", position: "relative" }}
      onBlur={() => closeMenu(id)}
    >
      {menus?.map((menu) => {
        return (
          <Menu
            AppMenuId={id}
            key={menu.label}
            menu={menu}
            onClick={() => toggleMenu(id)}
            setHover={setSubMenuHover}
            hover={subMenuHover === menu.label}
          />
        );
      })}
    </div>
  );
};

export default AppMenu;
