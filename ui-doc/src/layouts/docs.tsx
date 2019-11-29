import React, { useState, useCallback, useMemo } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { Icon } from '@deer-ui/core/icon';
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

const SideNavWrapper = styled.div`
  position: relative;
`;

const SideNavFloater = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: none;
  /* height: 60px;
  width: 60px; */
  text-align: center;
  /* background-color: ${(p) => p.theme.color.primary}; */
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  z-index: 111;
  .icon {
    color: ${(p) => p.theme.color.primary};
  }
  
  @media(max-width: 576px) {
    display: flex;
  }
`;

const ArticleContent = styled.div`
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
                    <SideNavWrapper>
                      <SideNav opened={opened} />
                      <SideNavFloater onClick={(e) => {
                        toggle(!opened);
                      }}>
                        <Icon n="compass" style={{ fontSize: 60 }} />
                      </SideNavFloater>
                    </SideNavWrapper>
                  );
                }
              }
            </MenuContext.Consumer>
            <Article>
              {children}
              <ArticleContent>
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
