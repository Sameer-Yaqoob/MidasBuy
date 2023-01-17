import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Modal: {
          baseStyle: (props) => ({
            dialog: {
              bg:"var(--bg-color-8,#1d2657)"
            }
          })
        }
      },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    header: '#141b3d',
    footer: 'var(--bg-color-2,#111733);',
    headerText:'#d1d1d1',
    text: {
      gray: 'var(--font-color-5,hsla(0,0%,100%,.4))'
    },
    base: {
        1:"#141b3d",
        2: "#16567d",
        3: "#1a71a7",
        4: "#0453c9"
    },
    gray: {
      50: "#f7fafc",
      // ...
      900: "#171923",
    },
    brand: {
      blue: "#141b3d",
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  breakpoints: {
    sm: "10em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
});

export default theme;