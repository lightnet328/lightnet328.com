import React from "react";
import styled from "styled-components";

import {
  colorBlack,
  colorWhite,
  fontSizes,
  mdGrey_100,
  siteMinWidth,
  siteWidth,
  spacing,
} from "../constants";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: ${siteMinWidth}px;
  padding: ${spacing[32]};
  box-sizing: border-box;
  background: #00695c;
  color: ${colorWhite};
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  a {
    color: ${mdGrey_100};
  }
`;

const Icon = styled.img`
  width: 124px;
  height: 124px;
  border: 4px solid ${mdGrey_100};
  border-radius: 64px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const Name = styled.div`
  margin-top: ${spacing[16]}px;

  h2 {
    margin: 0;
    font-size: ${fontSizes[28]}px;
  }

  h2 small {
    color: #f8f8f8;
    font-size: ${fontSizes[18]}px;
    margin-left: 0.4em;
  }
`;

const Job = styled.div`
  margin-top: ${spacing[16]}px;
  font-size: ${fontSizes[16]}px;
`;

const Profile = styled.div`
  margin-top: ${spacing[16]}px;
  dl {
    margin: 0;
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
`;

export const Hero = () => {
  return (
    <Container>
      <Icon id="icon" src="assets/images/icon.png" />
      <Name>
        <h2>
          らぃと<small>@lightnet328</small>
        </h2>
      </Name>
      <Job>Software Engineer</Job>
      <Profile>
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
    </Container>
  );
};
