import React from 'react';
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';
import { Sidebar } from './Sidebar';
import { BaseLayout } from './BaseLayout';
import { Article } from './Article';
import { MenuProvider, MenuConsumer } from './MenuContext';
import ChevronUpSolid from './icons/ChevronUpSolid';

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    allMdx {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            menu
            name
            route
            title
          }
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 0;
`;

const ArticleContainer = styled.div`
  flex-grow: 1;
  padding: 0 20 50;
  overflow: hidden;
  word-wrap: break-word;
`;

const SidebarContainer = styled.div`
  background-color: secondary-bg;
  border-left: 1;
  border-color: border;
  transition: base;
  transition-property: transform, opacity;
  position: fixed;
  opacity: 0;
  height: 100vh;
  width: 100vw;
  transform: translateY(50px);
  pointer-events: none;
  overflow-y: auto;

  ${(p) => p.opened
    && css`
      pointer-events: auto;
      transform: translateY(0);
      opacity: 1;
    `}
`;

const SidebarWrapper = styled.div`
`;

const MenuButton = styled.button`
  border: 0;
  border-radius: 50%;
  width: 60;
  height: 60;
  position: fixed;
  right: ${8};
  bottom: ${8};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: bg;
  background-color: text;
  transition: base;
  transition-property: color;
  box-shadow: rgba(0,0,0,0.2) 0 0 ${20};
  appearance: none;

  &:focus {
    outline: none;
    color: bg;
  }

  > svg:first-child {
    transition: transform 200ms ease-in-out;
    transform: translateX(-1px);
  }

  > svg:last-child {
    transition: transform 200ms ease-in-out;
    transform: translate(-1px) rotate(180deg);
  }

  ${(p) => p.active
    && css`
      > svg:first-child {
        transform: translate(-1px, 10px);
      }

      > svg:last-child {
        transform: translate(-1px, -10px) rotate(180deg);
      }
    `}
`;

export function DocLayout(data) {
  const { children, ...props } = data;
  console.log(data);
  return (
    <MenuProvider>
      <BaseLayout variant="light" {...props}>
        <Wrapper>
          <MenuConsumer>
            {({ opened, toggle }) => (
              <>
                <SidebarContainer opened={opened}>
                  <SidebarWrapper>
                    <Sidebar />
                  </SidebarWrapper>
                </SidebarContainer>
                <MenuButton active={opened} onClick={toggle}>
                  <ChevronUpSolid width={15} height={15} />
                  <ChevronUpSolid width={15} height={15} />
                </MenuButton>
              </>
            )}
          </MenuConsumer>
          <ArticleContainer>
            <Article>
              {children}
            </Article>
          </ArticleContainer>
        </Wrapper>
      </BaseLayout>
    </MenuProvider>
  );
}
