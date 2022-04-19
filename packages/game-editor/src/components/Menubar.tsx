import AppMenu from "@idealjs/app-menu";
import {
  LayoutNodeActionType,
  MASK_PART,
  PanelNode,
  ROOTID,
  useLayoutNode,
} from "@idealjs/layout-manager";
import { nanoid } from "nanoid";

const rules = [
  { part: MASK_PART.BOTTOM, max: 2 },
  { part: MASK_PART.RIGHT, max: 2 },
  { part: MASK_PART.TOP, max: 3, limitLevel: 1 },
  { part: MASK_PART.CENTER, max: 3 },
];

const Menubar = () => {
  const layoutNode = useLayoutNode();

  return (
    <AppMenu
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
          menus: [
            {
              label: "Open Layout",
              menus: [
                {
                  label: "Open View",
                  onClick: () => {
                    const target = layoutNode.findNodeByRules(rules);
                    const panelNode = new PanelNode({
                      panelJSON: {
                        id: nanoid(),
                        page: "test",
                      },
                    });
                    if (!target) {
                      layoutNode.doAction(LayoutNodeActionType.ADD_PANEL, {
                        panelNode,
                        mask: MASK_PART.CENTER,
                        target: ROOTID,
                      });
                    } else {
                      layoutNode.doAction(LayoutNodeActionType.ADD_PANEL, {
                        panelNode,
                        mask: target.rule.part,
                        target: target.layoutNode,
                      });
                    }
                  },
                },
              ],
            },
          ],
        },
      ]}
    />
  );
};

export default Menubar;
