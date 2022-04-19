import { useEvent } from "effector-react";
import { useState } from "react";

import Menu, { IMenu } from "./Menu";
import { $toggleMenu } from "./store/open";

interface IProps {
  menus?: IMenu[];
}

const Menubar = (props: IProps) => {
  const { menus } = props;
  const [subMenuHover, setSubMenuHover] = useState<string | null>(null);

  const toggleMenu = useEvent($toggleMenu);

  return (
    <div
      tabIndex={0}
      style={{ display: "flex", position: "relative" }}
      onBlur={toggleMenu}
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

export default Menubar;
