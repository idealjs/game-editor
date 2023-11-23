import { LAYOUT_DIRECTION } from "@idealjs/layout-manager";

import Splitter from "../components/Splitter";
import Tab from "../components/Tab";
import TitleBar from "../components/TitleBar";
import { layouts, panels, splitters } from "./store";

const Layout = () => {
  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <div>
        {() => {
          return panels.val.map((panel) => {
            return <div>hello</div>;
          });
        }}
      </div>
      <div>
        {() =>
          layouts.val.map((layout) => {
            if (layout.direction === LAYOUT_DIRECTION.TAB) {
              return (
                <TitleBar layoutId={layout.id}>
                  {layout.children.map((panelId) => {
                    return <Tab panelId={panelId} />;
                  })}
                </TitleBar>
              );
            }
            return null;
          })
        }
      </div>
      <div>
        {() =>
          splitters.val.map((splitter) => {
            return <Splitter splitterId={splitter.id} />;
          })
        }
      </div>
    </div>
  );
};

export default Layout;
