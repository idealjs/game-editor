import { createEvent, createStore } from "effector";

export const $openMenu = createEvent<string>();

export const $closeMenu = createEvent<string>();

export const $toggleMenu = createEvent<string>();

interface IOpenState {
  [key: string]: boolean;
}

const $open = createStore<IOpenState>({})
  .on($openMenu, (state, key) => ({
    ...state,
    [key]: true,
  }))
  .on($closeMenu, (state, key) => ({
    ...state,
    [key]: false,
  }))
  .on($toggleMenu, (state, key) => ({
    ...state,
    [key]: !state[key],
  }));

export default $open;
