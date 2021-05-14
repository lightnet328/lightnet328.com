import React from "react";
import styled from "styled-components";

import {
  colorWhite,
  fontOpenSans,
  siteFooterHeight,
  siteMinWidth,
  siteWidth,
} from "../constants";

const Container = styled.div`
  width: 100%;
  min-width: ${siteMinWidth}px;
  padding-bottom: ${siteFooterHeight}px;

  @media screen and (max-width: 479px) {
    padding-bottom: ${siteFooterHeight - 20}px;
  }
`;

const StyledMain = styled.main`
  h1,
  h2,
  h3 {
    display: block;
    font-weight: normal;
    font-family: ${fontOpenSans};
  }

  h1 {
    height: 48px;
    line-height: 48px;
    font-size: 24px;
    border-bottom: 1px solid #dddddd;
    padding-left: 20px;
  }

  h2 {
    display: block;
    font-size: 24px;
    line-height: 32px;
  }

  h3 {
    font-size: 16px;
    line-height: 28px;
  }
`;

const Section = styled.div`
  max-width: 880px;
  margin: 20px auto;
`;

const Works = styled(Section)`
  .work-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px;
    list-style-type: none;
    li {
      width: 400px;
      border: 1px solid #f8f8f8;
      position: relative;
      box-sizing: border-box;
      &:nth-child(2n + 1) {
        margin-right: 20px;
      }
      &:nth-child(n + 3) {
        margin-top: 20px;
      }
      a {
        display: block;
      }
    }

    .work-info {
      width: 100%;
      padding: 15px;
      background: rgba(16, 21, 58, 0.9);
      color: ${colorWhite};
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      transition: all 0.35s ease-in-out;
    }

    li a:hover .work-info {
      background: rgba(16, 21, 58, 0.8);
    }

    .work-title {
      font-size: 20px;
    }

    .work-image {
      display: block;
      width: 100%;
    }
  }

  @media screen and (max-width: 880px) {
    .work-list {
      display: block;
      li {
        margin: 0 auto;
        &:nth-child(2n + 1) {
          margin-right: auto;
        }
        &:nth-child(n + 2) {
          margin-top: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    .work-list {
      li {
        width: auto;
      }
    }
  }
`;

const Links = styled(Section)`
  a {
    font-size: 16px;
    line-height: 2;
  }
`;

const Content = styled.div`
  margin: 30px;
`;

export const Main = () => {
  return (
    <Container>
      <StyledMain>
        <Works id="works" className="container">
          <h1>Works</h1>
          <Content>
            <ul className="work-list">
              <li>
                <a href="http://kumo.lightnet328.com">
                  <div className="work-info">
                    <div className="work-title">クロクモ</div>
                    <div className="work-description">
                      ツイートからワードクラウドを作るサービス
                    </div>
                  </div>
                  <img
                    className="work-image"
                    src="assets/images/クロクモ.png"
                  />
                </a>
              </li>
            </ul>
          </Content>
        </Works>
        <Links id="links" className="container">
          <h1>Links</h1>
          <Content>
            <ul>
              <li>
                <a href="http://twitter.com/lightnet328/" title="lightnet328">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/lightnet328" title="lightnet328">
                  GitHub
                </a>
              </li>
            </ul>
          </Content>
        </Links>
      </StyledMain>
    </Container>
  );
};
