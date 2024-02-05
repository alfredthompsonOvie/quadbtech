import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  box-sizing: border-box;
/* 
  --text: #fdf4e7;
	--background: #130b01;
	--cardbBackground: rgba(19, 11, 1, .9);
	--primary: #ea8410;
	--secondary: #098171;
	--accent: #0c56ac;  */


  --text: #031b0d;
	--background: #fafefc;
	--primary: #25e676;
	--secondary: #85a0f1;
	--accent: #6c50eb;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body {
  background-color: var(--background);
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 1440px;
  margin-inline: auto;
}
ul {
  list-style: none;
}
img {
  max-width: 100%;
  width: 100%;
  object-fit: cover;
}
`

export default GlobalStyles;