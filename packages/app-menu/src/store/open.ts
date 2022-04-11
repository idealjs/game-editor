import { createEvent, createStore } from "effector";

export const $openMenu = createEvent();

export const $closeMenu = createEvent();

export const $toggleMenu = createEvent();

const $open = createStore<boolean>(false)
  .on($openMenu, () => true)
  .on($closeMenu, () => false)
  .on($toggleMenu, (o) => !o);

export default $open;
