import React from "react";
import styled, { createGlobalStyle, ServerStyleSheet } from "styled-components";
import { Normalize } from "styled-normalize";
import { colorBlack, fontDefault, siteHeaderHeight } from "./constants";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Main } from "./Main";

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
}

body,
button,
input,
select,
textarea {
  font-size: 14px;
  line-height: 1.6;
  font-family: ${fontDefault};
  color: ${colorBlack};
}

* + html body {
  font-family: メイリオ, Meiryo;
}

body {
  background: #fefefe;
  padding-top: ${siteHeaderHeight}px;
}

a {
  color: #444444;
  text-decoration: none;
}

button,
input,
select,
textarea,
a:active,
a:focus {
  outline: none;
}

textarea {
  resize: none;
}

@media screen and (max-width: 479px) {
  body {
    padding-top: ${siteHeaderHeight - 20}px;
  }
}
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  height: auto !important;
  height: 100%;
  min-height: 100%;
`;

export const App = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Container>
        <Header />
        <Hero />
        <Main />
        <Footer />
      </Container>
    </>
  );
};
