interface IMenu {
  label: string;
  shortKey?: string;
  items?: IMenu[];
}

interface IProps {
  menus?: IMenu[];
}

const Menubar = (props: IProps) => {
  const { menus } = props;

  return (
    <div style={{ display: "flex" }}>
      {menus?.map((menu) => {
        return <div style={{ marginLeft: "4px" }}>{menu.label}</div>;
      })}
    </div>
  );
};
export default Menubar;
