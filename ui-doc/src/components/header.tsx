import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Grid } from 'ukelli-ui';
import { DocSearch } from './doc-search';
import { useColorMode } from '../utils/use-theme';

import GithubBrands from './icons/GithubBrands';
import SunSolid from './icons/SunSolid';
import MoonSolid from './icons/MoonSolid';

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
  background-color: bg;
  border-bottom: 1;
  border-color: border;
  padding: 16 0;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
`;

const LogoText = styled.span`
  
`;

const LogoLink = styled(Link)`

`;

const Box = styled.span`

`;

const Nav = styled.nav`
  height: 34;
  margin-left: 10;
  position: relative;
  overflow-x: auto;
`;

const NavList = styled.ul`
`;

const NavListItem = styled.li`
  color: #000;
`;

const modeIcons = {
  light: MoonSolid,
  dark: SunSolid,
};

function getInverseMode(mode) {
  return mode === 'light' ? 'dark' : 'light';
}

function ColorModeSwitcher() {
  const [mode, setMode] = useColorMode();
  const Icon = modeIcons[mode];
  return (
    <button type="button" onClick={() => setMode(getInverseMode)}>
      <Icon width="24" height="24" />
    </button>
  );
}

export function ProjectHeader() {
  const data = useStaticQuery(QUERY);
  return (
    <Container>
      <Grid space={20}>
        <Header>
          <LogoLink to="/">
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt={data.site.siteMetadata.title}
            />
            <LogoText>{data.site.siteMetadata.title}</LogoText>
          </LogoLink>
          <Box>
            {data.site.siteMetadata.algoliaDocSearch.enabled && (
              <DocSearch {...data.site.siteMetadata.algoliaDocSearch} />
            )}
          </Box>
          <Nav>
            <NavList>
              {data.site.siteMetadata.nav.map(({ title, url }) => (
                <NavListItem key={title}>
                  <Link to={url}>{title}</Link>
                </NavListItem>
              ))}
              <NavListItem>
                <a
                  href={data.site.siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubBrands width="24" height="24" />
                </a>
              </NavListItem>
              <NavListItem>
                <ColorModeSwitcher />
              </NavListItem>
            </NavList>
          </Nav>
        </Header>
      </Grid>
    </Container>
  );
}
