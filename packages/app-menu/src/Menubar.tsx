import { useEvent } from "effector-react";

import Menu, { IMenu } from "./Menu";
import { $toggleMenu } from "./store/open";

interface IProps {
  menus?: IMenu[];
}

const Menubar = (props: IProps) => {
  const { menus } = props;

  const toggleMenu = useEvent($toggleMenu);

  return (
    <div style={{ display: "flex", position: "relative" }}>
      {menus?.map((menu) => {
        return <Menu key={menu.label} menu={menu} onClick={toggleMenu} />;
      })}
    </div>
  );
};

export default Menubar;
