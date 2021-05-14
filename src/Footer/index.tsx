import React from "react";
import styled from "styled-components";

import { siteFooterHeight, siteMinWidth } from "../constants";

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  height: ${siteFooterHeight}px;
  line-height: ${siteFooterHeight}px;
  text-align: center;
  clear: both;
  color: #fcfcfc;
  background: #222222;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    min-width: auto;
  }

  @media screen and (max-width: 479px) {
    height: ${siteFooterHeight - 20}px;
    line-height: ${siteFooterHeight - 20}px;
    min-width: ${siteMinWidth}px;
  }
`;

export const Footer = () => {
  return <Container>&copy; 2012 - 2018 lightnet328.com.</Container>;
};
