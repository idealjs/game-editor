import { createState } from "@idealjs/reactive";

export const showMenu = createState<HTMLDivElement | null>(null);

export const closeMenu = () => {
  showMenu.val?.blur();
  showMenu.val = null;
};
