import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Icon } from '@deer-ui/core/icon';

import { Grid } from '@deer-ui/core/grid';
import { DocSearch } from './doc-search';
import { useColorMode } from './theme';

import { MainContentWrapper } from './common-style';

const QUERY = graphql`
  query Header {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 34, height: 34) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    site {
      siteMetadata {
        title
        github
        algoliaDocSearch {
          enabled
          apiKey
          indexName
        }
        nav {
          title
          url
        }
      }
    }
  }
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.body};
  border-bottom: 1px solid #f7f7f7;
`;

const Header = styled(Grid)`
  flex-flow: row nowrap;
  position: relative;
  padding: 0 20px;
`;

const LogoText = styled.span`
  margin-left: 10px;
  color: #444;
  font-size: 18px;
`;

const LogoLink = styled(Link)`
  margin-right: 10px;
`;

const Box = styled.span`

`;

const Nav = styled.nav`
  /* height: 34; */
  margin-left: 10px;
  position: relative;
  display: flex;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  align-self: flex-end;
  display: flex;
  list-style: none;
  margin: 0rem;
`;

const SideHelpers = styled(NavList)`
`;

const HelperItem = styled.li`
  font-size: 18px;
  color: #666;

  a {
    color: inherit;
  }
`;

const NavListItem = styled.li`
  color: #000;
  display: inline-block;
  color: #666;
  padding: 0 10px;
  margin-bottom: -1px;

  a {
    line-height: 3.5rem;
    font-size: 1.2rem;
    display: inline-block;
    border-bottom: 1px solid transparent;

    &.active {
      border-bottom: 1px solid ${(p) => p.theme.color.primary}
    }
  }
`;

const modeIcons = {
  light: 'sun',
  dark: 'moon',
};

function getInverseMode(mode) {
  return mode === 'light' ? 'dark' : 'light';
}

function ColorModeSwitcher() {
  const [mode, setMode] = useColorMode();
  return (
    <Icon n={modeIcons[mode]} onClick={() => { setMode(getInverseMode); }} />
  );
}

export function ProjectHeader() {
  const data = useStaticQuery(QUERY);
  return (
    <Container>
      <MainContentWrapper>
        <Header container alignItems="center">
          <LogoLink to="/">
            <Grid className="LOGO" container alignItems="center">
              <Img
                fixed={data.logo.childImageSharp.fixed}
                alt={data.site.siteMetadata.title}
              />
              <LogoText>{data.site.siteMetadata.title}</LogoText>
            </Grid>
          </LogoLink>
          <Nav>
            <NavList>
              <Grid container alignItems="center">
                {data.site.siteMetadata.nav.map(({ title, url }) => (
                  <NavListItem key={title}>
                    <Link
                      to={url}
                      partiallyActive
                      activeClassName="active">
                      {title}
                    </Link>
                  </NavListItem>
                ))}
              </Grid>
            </NavList>
          </Nav>
          <span className="flex"></span>
          <Box>
            {data.site.siteMetadata.algoliaDocSearch.enabled && (
              <DocSearch {...data.site.siteMetadata.algoliaDocSearch} />
            )}
          </Box>
          <Nav>
            <SideHelpers>
              <Grid container alignItems="center">
                <HelperItem>
                  <a
                    href={data.site.siteMetadata.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon n="github" s="b" />
                  </a>
                </HelperItem>
                {/* <HelperItem>
                <ColorModeSwitcher />
              </HelperItem> */}
              </Grid>
            </SideHelpers>
          </Nav>
        </Header>
      </MainContentWrapper>
    </Container>
  );
}
