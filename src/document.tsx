import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import { App } from "./app";

export const render = () => {
  const sheet = new ServerStyleSheet();
  const app = renderToStaticMarkup(sheet.collectStyles(<App />));
  const styles = sheet.getStyleTags();

  return `
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>lightnet328.com</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="icon" type="image/png" href="assets/images/icon.png" />
        ${styles}
      </head>
      <body>
        ${app}
      </body>
    </html>
  `;
};
