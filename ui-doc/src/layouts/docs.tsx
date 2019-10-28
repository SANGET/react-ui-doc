import React, { useState, useCallback, useMemo } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import DefaultLayout from './default';
import { SideNav } from '../components/side-nav';
import { Article } from '../components/archive';
import { MainContentWrapper, device } from '../components/common-style';
import { useColorMode } from '../components/theme';

const MenuContext = React.createContext();

const MenuProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const toggle = useCallback(() => setOpened((_opened) => !_opened), []);
  const value = useMemo(() => ({ opened, toggle }), [opened, toggle]);
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

const docMenuWidth = `200px`;

const SideNavWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${docMenuWidth};
  
  ${(c) => c.opened && css`
    color: red;
  `}
`;
const ArticleContent = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media ${device.mobileM} {
    width: 90%;
  }
`;

export default class DocLayout extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <MenuProvider>
        <DefaultLayout {...props}>
          <MainContentWrapper>
            <MenuContext.Consumer>
              {
                ({ opened, toggle }) => {
                  return (
                    <SideNavWrapper opened={opened}>
                      <SideNav />
                    </SideNavWrapper>
                  );
                }
              }
            </MenuContext.Consumer>
            <Article>
              <ArticleContent>
                {children}
              </ArticleContent>
            </Article>
          </MainContentWrapper>
        </DefaultLayout>
      </MenuProvider>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostQueryDoc($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
