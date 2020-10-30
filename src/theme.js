import { deepFreeze } from "grommet/utils";

const customTheme = deepFreeze({
  layer: {
    extend: {
      overflow: "auto",
      pointerEvents: "auto",
    },
  },
  button: {
    extend: {
      outline: "none !important",
    },
  },
  global: {
    colors: {
      "neutral-1": "#15588D",
      primary: "#058464",
      gray: "#888888",
    },
  },
});

export default customTheme;
