import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "1300px",
  xl: "1850px",
  "2xl": "2600px",
});

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

export const theme = extendTheme({
  breakpoints,
  config,
});
