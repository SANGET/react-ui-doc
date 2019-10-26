import React, { useState, useCallback, useMemo } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import DefaultLayout from './default';
import { SideNav } from '../components/side-nav';
import { Article } from '../components/archive';
import { MainContentWrapper } from '../components/common-style';

const MenuContext = React.createContext();

const MenuProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const toggle = useCallback(() => setOpened((_opened) => !_opened), []);
  const value = useMemo(() => ({ opened, toggle }), [opened, toggle]);
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

const SideNavWrapper = styled.div`
  flex-basis: 200px;
  
  ${c => c.opened && css`
    color: red;
  `}
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
            <Article>{children}</Article>
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
