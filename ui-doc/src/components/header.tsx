import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Icon } from 'ukelli-ui/core/icon';
import { Label } from 'ukelli-ui/core/label';

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
  background-color: ${(props) => {
    console.log(props);
    return props.theme.colors.bg;
  }};
  border-bottom: 1px solid #f7f7f7;
  padding: 16 0;
`;

const Header = styled.div`
  display: flex;
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
  margin-left: 10;
  position: relative;
  display: flex;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  align-self: flex-end;
  display: flex;
  overflow-x: auto;
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
  line-height: 2.8rem;
  color: #666;
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
    <Label onClick={() => { setMode(getInverseMode); }}>
      <Icon n={modeIcons[mode]} />
    </Label>
  );
}

export function ProjectHeader() {
  const data = useStaticQuery(QUERY);
  return (
    <Container>
      <MainContentWrapper>
        <Header className="layout a-i-c flex">
          <LogoLink to="/" className="layout a-i-c">
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt={data.site.siteMetadata.title}
            />
            <LogoText>{data.site.siteMetadata.title}</LogoText>
          </LogoLink>
          <Nav>
            <NavList className="layout a-i-c">
              {data.site.siteMetadata.nav.map(({ title, url }) => (
                <NavListItem key={title}>
                  <Link to={url}>{title}</Link>
                </NavListItem>
              ))}
            </NavList>
          </Nav>
          <span className="flex"></span>
          <Box>
            {data.site.siteMetadata.algoliaDocSearch.enabled && (
              <DocSearch {...data.site.siteMetadata.algoliaDocSearch} />
            )}
          </Box>
          <Nav>
            <SideHelpers className="layout a-i-c">
              <HelperItem>
                <Label>
                  <a
                    href={data.site.siteMetadata.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon n="github" s="b" />
                  </a>
                </Label>
              </HelperItem>
              <HelperItem>
                <ColorModeSwitcher />
              </HelperItem>
            </SideHelpers>
          </Nav>
        </Header>
      </MainContentWrapper>
    </Container>
  );
}
