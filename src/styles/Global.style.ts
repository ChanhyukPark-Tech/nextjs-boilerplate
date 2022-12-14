// global-style.ts
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import media from "~/constants/Media";
import { vw, vwMobile } from "~/constants/Size";
import { ROOT_FONT_SIZE } from "~/constants/Variables";

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 그밖에 글로벌 스타일 작성하기  */
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
  
  input {
    outline: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0; // ios default css
    border: none;
  }

  svg,img {
    vertical-align: top;
  }
  
  body {
    will-change: overflow-y, position;
  }

  html {
    will-change: font-size;
  }

  body.scroll-lock,html.scroll-lock {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  html {
    font-size: ${vw(ROOT_FONT_SIZE)};
    will-change: font-size;
    height: 100%;

    ${media.tablet} {
      font-size: ${vwMobile(ROOT_FONT_SIZE)};
    }
  }
`;

export default GlobalStyle;
