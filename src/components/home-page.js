import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Grid, Icon } from '@deer-ui/core';
import Showcase from './showcase';
import { Box, Container } from './common';

const Wrapper = styled.div`
  /* background-color: #fafafa; */
  padding: 0.1px;
  font-size: 1.125rem;
  padding-bottom: 40px;
`;

const UIName = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const UILogo = styled(Grid)`
  /* font-size: 40px; */
  background-color: #376BFB;
  border-radius: 50%;
  width: 120px !important;
  padding: 16px;
  transition: all 0.5s ease;

  img {
    width: 100%;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const Desc = styled.div`
  font-size: 18px;
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  line-height: 28px;
`;

const MainIntro = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const FeatherIntro = styled.div`
  margin-bottom: 80px;
`;

const FeatherIntroItem = styled(Box)`
  height: 160px;
  padding: 10px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Container>
        <MainIntro>
          <UIName>
          Building UI Doc by React, Gatsby and Mdx
          </UIName>
          <Desc>
          React-ui-doc is a tool of UI Doc generation, to help developer to build UI documentation in a quick way
          </Desc>
          <Link
            className="btn theme hola"
            to="/docs/">
            Getting Started
            <Icon n="angle-right" classNames={['ml10']} />
          </Link>
        </MainIntro>
        <FeatherIntro>
          <Grid container space={10}>
            <Grid
              lg={3}
              sm={6}
              xs={12}>
              <FeatherIntroItem>
                <h4>Typescript support</h4>
                <div>
                Base on typescript to construct
                , totally support code hint and type check, safe to use.
                </div>
              </FeatherIntroItem>
            </Grid>
            <Grid
              lg={3}
              sm={6}
              xs={12}>
              <FeatherIntroItem>
                <h4>Devices support</h4>
                <div>
                Support desktop and mobile devices.
                </div>
              </FeatherIntroItem>
            </Grid>
            <Grid
              lg={3}
              sm={6}
              xs={12}>
              <FeatherIntroItem>
                <h4>Gatsby build</h4>
                <div>
                Base on Gatsby and React.
                </div>
              </FeatherIntroItem>
            </Grid>
            <Grid
              lg={3}
              sm={6}
              xs={12}>
              <FeatherIntroItem>
                <h4>Mdx</h4>
                <div>
                Using Mdx to write pages and doc.
                </div>
              </FeatherIntroItem>
            </Grid>
          </Grid>
        </FeatherIntro>
        <Grid
          container
          direction="col"
          alignContent="center">
          <UILogo container justify="center" alignItems="center">
            <img src={require('../images/logo.png')} alt=""/>
          </UILogo>
        </Grid>
        <Showcase />
      </Container>
    </Wrapper>
  );
};

export default HomePage;
