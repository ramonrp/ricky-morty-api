import { createGlobalStyle } from 'styled-components';
import CarterOne from './assets/fonts/carter-one.woff2';
const GlobalStyles = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root {
  isolation: isolate;
}
@font-face {
        font-family: 'Carter One';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${CarterOne}') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
          U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
body{
  --background-color: hsl(0deg 0% 0%);
  --text-color: hsl(0deg 0% 95%);
  --border-linear-gradient: linear-gradient( 45deg, rgba(76, 54, 245, 1) 0%, rgba(76, 54, 245, 1) 4%, rgba(0, 255, 234, 1) 21%, rgba(0, 81, 74, 1) 36%, rgba(0, 0, 0, 1) 43%, rgba(0, 0, 0, 1) 51%, rgba(0, 0, 0, 1) 51%, rgba(0, 0, 0, 1) 53%, rgba(0, 177, 163, 1) 69%, rgba(0, 255, 234, 1) 76%, rgba(17, 0, 255, 1) 93%, rgba(17, 0, 255, 1) 100% );
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Carter One', sans-serif;
}
`;

export { GlobalStyles };
