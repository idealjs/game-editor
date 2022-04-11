import { Menubar } from "@idealjs/app-menu";
import GrapeLayout from "@idealjs/grape-layout";
import { LayoutNode } from "@idealjs/layout-manager";

const factory = () => {
  return () => null;
};

interface IProps {
  layout: LayoutNode;
}

const Editor = (props: IProps) => {
  const { layout } = props;
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Menubar
        menus={[{ label: "File" }, { label: "Edit" }, { label: "Layout" }]}
      />
      <GrapeLayout factory={factory} layout={layout} />
    </div>
  );
};

export default Editor;
