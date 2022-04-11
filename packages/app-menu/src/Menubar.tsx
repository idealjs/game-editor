import Menu, { IMenu } from "./Menu";

interface IProps {
  menus?: IMenu[];
}

const Menubar = (props: IProps) => {
  const { menus } = props;

  return (
    <div style={{ display: "flex", position: "relative" }}>
      {menus?.map((menu) => {
        return <Menu key={menu.label} menu={menu} />;
      })}
    </div>
  );
};
export default Menubar;
