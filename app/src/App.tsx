import "./App.css";

import Editor from "@idealjs/game-editor";
import { ILayoutJSON, LayoutNode } from "@idealjs/layout-manager";

const layout = new LayoutNode({
  layoutJSON: {
    id: "layout-manager-root",
    direction: "ROOT",
    primaryOffset: 0,
    secondaryOffset: 0,
    layouts: [
      {
        id: "mainN",
        direction: "COL",
        primaryOffset: 0,
        secondaryOffset: 0,
        layouts: [
          {
            id: "N_A",
            direction: "TAB",
            primaryOffset: 0,
            secondaryOffset: 0,
            layouts: [],
            panels: [
              {
                id: "P_A_A",
                page: "test2",
              },
              {
                id: "P_A_B",
                page: "test",
              },
            ],
          },
          {
            id: "N_B",
            direction: "ROW",
            primaryOffset: 0,
            secondaryOffset: 0,
            layouts: [
              {
                id: "N_B_A",
                direction: "TAB",
                primaryOffset: 0,
                secondaryOffset: 0,
                layouts: [],
                panels: [
                  {
                    id: "P_B_A_A",
                    page: "test",
                  },
                  {
                    id: "P_B_A_B",
                    page: "test",
                    data: "abc",
                  },
                ],
              },
              {
                id: "N_B_B",
                direction: "TAB",
                primaryOffset: 0,
                secondaryOffset: 0,
                layouts: [],
                panels: [
                  {
                    id: "P_B_B_A",
                    page: "test",
                  },
                  {
                    id: "P_B_B_B",
                    page: "test",
                  },
                ],
              },
            ],
            panels: [],
          },
        ],
        panels: [],
      },
    ],
    panels: [],
  } as ILayoutJSON,
});

function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <Editor layout={layout} />
    </div>
  );
}

export default App;
