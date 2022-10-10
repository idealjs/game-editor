import Menu, { IMenu } from "./Menu";

interface IProps {
  id: string;
  menus?: IMenu[];
}

const AppMenu = (props: IProps) => {
  const { id, menus } = props;

  return (
    <div tabIndex={0} style={{ display: "flex", position: "relative" }}>
      {menus?.map((menu) => {
        return <Menu AppMenuId={id} key={menu.label} menu={menu} />;
      })}
    </div>
  );
};

export default AppMenu;
