import { style } from "@vanilla-extract/css";

import { vars } from "./components/styles";

export const appStyle = style({
  backgroundColor: vars.colors.base[200],
});
