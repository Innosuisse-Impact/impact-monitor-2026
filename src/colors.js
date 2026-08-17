// Single source of truth for colors. The CSS custom properties
// (--color-accent, --color-cat-1, …) are generated from this palette
// in observablehq.config.js head() — do not redefine them in styles.css.
export const palette = {
  accent: "#06F7DA",
  accentInk: "#009F8B", // dark teal for accent-colored text (accent itself fails contrast on white)
  background: "#e8e8e8",

  // Color links CD BUND
  primaryLink: "#D8232A",
  primaryHover: "#99191E",

  cat: ["#06F7DA", "#A495E8", "#E83E5A", "#FFED00", "#53565A", "#cdcdcd"],

  hue2: ["#06F7DA", "#009F8B"],
  hue3: ["#9DFAF2", "#06F7DA", "#009F8B"],
  hue6: ["#CDFEF8", "#9DFAF2", "#6CF6EB", "#3CF3E3", "#06F7DA", "#009F8B"],

  hueN2: ["#A495E8", "#6758A6"],
  hueN3: ["#E1D2FF", "#A495E8", "#6758A6"],

  div2: ["#06F7DA", "#A495E8"],
  div3: ["#06F7DA", "#e8e8e8", "#A495E8"],
  div6: ["#009F8B", "#06F7DA", "#7CF9EE", "#E1D2FF", "#A495E8", "#6758A6"],

  divPN2: ["#65CDDF", "#FEB040"],
  divPN3: ["#65CDDF", "#e8e8e8", "#FEB040"],
  divPN6: ["#65CDDF", "#A2E1EC", "#D0F0F5", "#FFE7C5", "#FECF8C", "#FEB040"],
};