import {
  card,
  cardShadow,
  focusReaction,
  popover,
  popoverBottom,
  popoverContent,
} from "@idealjs/camphora-styled";
import { createState } from "@idealjs/reactive";
import clsx from "clsx";

import { showMenu } from "../store";
import MenuItem, { IMenuItem } from "./MenuItem";
import { menu, menuCard, menuLabel } from "./style.css";

interface IProps {
  menuItem: IMenuItem;
}

const Menu = (props: IProps) => {
  const { menuItem } = props;
  const ref = createState<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      tabIndex={0}
      className={() => clsx(menu, popover, focusReaction)}
      onBlur={() => {
        showMenu.val = null;
      }}
    >
      <div
        className={menuLabel}
        onClick={() => {
          if (showMenu.val == ref.val) {
            ref.val?.blur();
            showMenu.val = null;
            return;
          }
          showMenu.val = ref.val;
        }}
        onMouseEnter={() => {
          if (showMenu.val != null) {
            ref.val?.focus();
            showMenu.val = ref.val;
          }
        }}
      >
        {menuItem.label}
      </div>
      <div
        className={clsx(
          menuCard,
          card,
          cardShadow,
          popoverContent,
          popoverBottom
        )}
      >
        {menuItem.subMenus != null
          ? menuItem.subMenus.map((menu) => {
              return <MenuItem item={menu} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Menu;
