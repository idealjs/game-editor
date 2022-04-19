import { Menubar } from "@idealjs/app-menu";
import GrapeLayout from "@idealjs/grape-layout";
import { Layout, LayoutNode } from "@idealjs/layout-manager";
import { fork } from "effector";
import { Provider } from "effector-react/scope";
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
          <Menubar
            menus={[
              {
                label: "File",
                menus: [
                  { label: "New File" },
                  { label: "Open File" },
                  { label: "Open Folder", onClick: () => {} },
                  { label: "Open Recent", menus: [{ label: "abc" }] },
                ],
              },
              {
                label: "Edit",
                menus: [{ label: "Undo" }, { label: "Redo" }],
              },
              {
                label: "Layout",
                menus: [{ label: "Open Layout" }],
              },
            ]}
          />
          <Layout />
        </div>
      </GrapeLayout>
    </Provider>
  );
};

export default Editor;
