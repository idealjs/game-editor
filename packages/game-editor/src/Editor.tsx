import GrapeLayout, { Layout, LayoutNode } from "@idealjs/grape-layout";

import Menubar from "./components/Menubar";

const factory = () => {
  return () => null;
};

interface IProps {
  layout: LayoutNode;
}

const Editor = (props: IProps) => {
  const { layout } = props;

  return (
    <GrapeLayout factory={factory} layout={layout}>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Menubar />
        <Layout />
      </div>
    </GrapeLayout>
  );
};

export default Editor;
