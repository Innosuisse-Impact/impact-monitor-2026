// Single source of truth for colors. The CSS custom properties
// (--color-accent, --color-cat-1, …) are generated from this palette
// in observablehq.config.js head() — do not redefine them in styles.css.
export const palette = {
  accent: "#06F7DA",
  accentInk: "#037C6D", // dark teal for accent-colored text (accent itself fails contrast on white)
  background: "#e8e8e8",

  cat: ["#06F7DA", "#A2AFE9", "#FF8674", "#FCE300", "#777777", "#cdcdcd"],

  hue2: ["#3CF3E3", "#037C6D"],
  hue3: ["#9DFAF2", "#3CF3E3", "#037C6D"],
  hue6: ["#CDFEF8", "#9DFAF2", "#6CF6EB", "#3CF3E3", "#0BEEDB", "#037C6D"],

  hueN2: ["#FECF8C", "#FEB040"],
  hueN3: ["#FFE7C5", "#FECF8C", "#FEB040"],

  div2: ["#06F7DA", "#A2AFE9"],
  div3: ["#06F7DA", "#e8e8e8", "#A2AFE9"],
  div6: ["#06F7DA", "#7CF9EE", "#C8F9F5", "#C8C8E8", "#7878C8", "#A2AFE9"],

  divPN2: ["#65CDDF", "#FEB040"],
  divPN3: ["#65CDDF", "#e8e8e8", "#FEB040"],
  divPN6: ["#65CDDF", "#A2E1EC", "#D0F0F5", "#FFE7C5", "#FECF8C", "#FEB040"],
};