import React from "react";
import styled from "styled-components";

import {
  fontOpenSans,
  siteHeaderHeight,
  siteMinWidth,
  siteWidth,
} from "../constants";

const Container = styled.div`
  width: 100%;
  min-width: ${siteMinWidth}px;
  height: ${siteHeaderHeight}px;
  line-height: 1;
  background: #fefefe;
  position: fixed;
  top: 0;
  z-index: 1000;

  @media screen and (max-width: 767px) {
    min-width: auto;
  }

  @media screen and (max-width: 479px) {
    height: ${siteHeaderHeight - 20}px;
    line-height: ${siteHeaderHeight - 20}px;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  max-width: ${siteWidth}px;
  box-sizing: border-box;
  height: 100%;
  position: relative;
`;

const Title = styled.h1`
  line-height: ${siteHeaderHeight}px;
  margin: 0;
  a {
    color: #444444;
    font-size: 28px;
    font-family: ${fontOpenSans};
    font-weight: 300;
    transition: color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
    &:hover {
      color: #1e90ff;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 22px;
  }

  @media screen and (max-width: 479px) {
    line-height: ${siteHeaderHeight - 20}px;
  }

  @media screen and (max-width: 409px) {
    a {
      display: none;
    }
  }
`;

const Navigation = styled.nav`
  flex: 1;
  margin-left: 20px;
  ul {
    margin: 0;
    display: flex;
    justify-content: flex-end;
    line-height: 80px;
    list-style-type: none;
    padding: 0px;
    li {
      a {
        display: flex;
        align-items: center;
        color: #333333;
        padding: 0 20px;
        font-weight: 500;
        text-decoration: none;
        i {
          vertical-align: middle;
          margin-right: 0.5em;
        }
        &:hover {
          color: #1e90ff;
        }
      }
    }
  }

  @media screen and (max-width: 579px) {
    ul {
      li {
        a {
          font-size: 0;
          i {
            margin-right: 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    ul {
      line-height: ${siteHeaderHeight - 20}px;
    }
  }

  @media screen and (max-width: 409px) {
    margin-left: 0px;
    ul {
      justify-content: space-around;
    }
  }
`;

export const Header = () => {
  return (
    <Container>
      <StyledHeader id="header">
        <Title>
          <a href="/">lightnet328.com</a>
        </Title>
        <Navigation>
          <ul>
            <li>
              <a href="#header">
                <i className="material-icons">person</i>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="#works">
                <i className="material-icons">work</i>Works
              </a>
            </li>
            <li>
              <a href="#links">
                <i className="material-icons">link</i>Links
              </a>
            </li>
          </ul>
        </Navigation>
      </StyledHeader>
    </Container>
  );
};
