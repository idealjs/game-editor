import GrapeLayout from "@idealjs/grape-layout";
import { Layout, LayoutNode } from "@idealjs/layout-manager";
import { fork } from "effector";
import { Provider } from "effector-react/scope";

import Menubar from "./components/Menubar";

const factory = () => {
  return () => null;
};

interface IProps {
  layout: LayoutNode;
}

const scope = fork();

const Editor = (props: IProps) => {
  const { layout } = props;

  return (
    <Provider value={scope}>
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
    </Provider>
  );
};

export default Editor;
