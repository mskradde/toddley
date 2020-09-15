import React from "react";
import { Global, css } from "@emotion/core";
const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        :root {
          --bg-main-color: #fbf2e0;
          --text-color-main: #000, 0.9;
          --text-color-secondary: #fff;
          height: 100vh;
          width: 100vw;
          font-size: 18px;
        }
        html {
        }
        body {
          background-color: var(--bg-main-color);
          color: var(--text-color-main);
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
};
export default GlobalCSS;
