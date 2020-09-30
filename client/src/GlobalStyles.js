import React from "react";
import { Global, css } from "@emotion/core";
import Roboto from "./assets/fonts/Roboto-Medium.ttf";
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
          --text-color-secondary: #ffffff;

          html {
            @font-face {
              font-family: "Roboto";
              src: url(${Roboto}) format("truetype");
            }
            font-size: 18px;
            font-family: "Roboto";
          }
          body {
            background-color: var(--bg-main-color);
            color: var(--text-color-main);
            margin: 0;
            padding: 0;
            height: 100vh;
            width: 100vw;
          }
        }
        a {
          text-decoration: none;
        }
      `}
    />
  );
};
export default GlobalCSS;
