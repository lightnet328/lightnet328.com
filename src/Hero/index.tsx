import React from "react";
import styled from "styled-components";

import {
  colorWhite,
  mdGrey_100,
  mdIndigo_800,
  siteMinWidth,
  siteWidth,
} from "../constants";

const Container = styled.div`
  width: 100%;
  min-width: ${siteMinWidth}px;
  background: ${mdIndigo_800};
`;

const StyledHero = styled.header`
  display: flex;
  margin: 0 auto 20px;
  padding: 40px;
  max-width: ${siteWidth}px;
  box-sizing: border-box;
  color: ${colorWhite};

  h2 {
    font-size: 2em;
  }

  h2 small {
    color: #f8f8f8;
    font-size: 65%;
    margin-left: 0.4em;
  }

  a {
    color: ${mdGrey_100};
  }

  @media screen and (max-width: 767px) {
    padding: 30px;
  }

  @media screen and (max-width: 479px) {
    h2 {
      font-size: 1.5em;
      margin: 0;
      line-height: 80px;
    }
  }
`;

const Icon = styled.img`
  width: 180px;
  height: 180px;
  border: 6px solid ${mdGrey_100};
  border-radius: 94px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    width: 130px;
    height: 130px;
    border-width: 4px;
  }

  @media screen and (max-width: 479px) {
    width: 80px;
    height: 80px;
    border-width: 2px;
  }
`;

const Profile = styled.div`
  margin-left: 40px;
  dl {
    &:after {
      content: "";
      clear: both;
      display: block;
    }
    dt {
      font-size: 16px;
      line-height: 1.6;
      margin: 0.5em 1em;
      clear: left;
      float: left;
    }
    dd {
      float: left;
      margin: 0.5em 0;
    }
    dd + dd:before {
      content: ",";
      margin-right: 0.5em;
    }
  }

  @media screen and (max-width: 767px) {
    margin-left: 30px;
  }

  @media screen and (max-width: 479px) {
    margin-left: 20px;
  }

  @media screen and (max-width: 409px) {
    dl {
      margin-left: -80px;
    }
  }
`;

export const Hero = () => {
  return (
    <Container>
      <StyledHero>
        <Icon id="icon" src="assets/images/icon.png" />
        <Profile>
          <h2>
            らぃと<small>@lightnet328</small>
          </h2>
          <dl>
            <dt>
              <i className="material-icons">location_on</i>
            </dt>
            <dd>東京都</dd>
            <dt>
              <i className="material-icons">favorite</i>
            </dt>
            <dd>TypeScript</dd>
            <dd>React</dd>
            <dd>GraphQL</dd>
            <dd>お布団</dd>
            <dt>
              <i className="material-icons">description</i>
            </dt>
            <dd>
              <a
                href="http://lightnet328.hatenablog.com/"
                title="lightnet328's blog"
              >
                lightnet328's blog
              </a>
            </dd>
            <dt>
              <i className="material-icons">email</i>
            </dt>
            <dd>
              <a href="mailto:lightnet328@gmail.com">lightnet328@gmail.com</a>
            </dd>
          </dl>
        </Profile>
      </StyledHero>
    </Container>
  );
};
