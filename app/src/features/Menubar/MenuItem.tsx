import {
  card,
  cardShadow,
  hoverReaction,
  popover,
  popoverContent,
} from "@idealjs/camphora-styled";
import clsx from "clsx";

import { closeMenu } from "../store";
import { menuCard, menuItem, menuItemLabel, subMenus } from "./style.css";

export interface IMenuItem {
  label: string;
  subMenus?: IMenuItem[];
  onClick?: (event: MouseEvent) => void;
}

interface IProps {
  item: IMenuItem;
}

const MenuItem = (props: IProps) => {
  const { item } = props;

  const _onClick =
    item.subMenus == null
      ? (e: MouseEvent) => {
          closeMenu();
          item.onClick?.(e);
        }
      : undefined;

  return (
    <div className={clsx(menuItem, popover, hoverReaction)}>
      <div className={menuItemLabel} onClick={_onClick}>
        {item.label}
      </div>
      {item.subMenus != null ? (
        <div
          className={clsx(menuCard, subMenus, popoverContent, card, cardShadow)}
        >
          {item.subMenus.map((menu) => {
            return <MenuItem item={menu} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default MenuItem;
