import React, { useEffect, useState } from 'react';
import {
  StaticQuery, graphql, Link, useStaticQuery
} from 'gatsby';
import styled, { css } from 'styled-components';
import { Icon, Grid } from '@deer-ui/core';

const QUERY = graphql`
  query Sidebar {
    allSitePage {
      edges {
        node {
          id
          path
          context {
            frontmatter {
              title
              menu
              order
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        menu
        defaultShowAllMenu
      }
    }
  }
`;

const createOrFindGroup = (name, groups) => {
  let group = groups.find((group) => group.name === name);
  if (!group) {
    group = { name, pages: [] };
    groups.push(group);
  }
  return group;
};

const sortByOrder = (a, b) => {
  const diff = (a.context.frontmatter.order || 0) - (b.context.frontmatter.order || 0);
  return diff === 0 ? 0 : diff > 0 ? 1 : -1;
};

const pagesToNavGroups = (pages) => pages.reduce((groups, page) => {
  if (!page.context.frontmatter.menu) {
    return groups;
  }
  const group = createOrFindGroup(page.context.frontmatter.menu, groups);
  group.pages.push(page);
  group.pages.sort(sortByOrder);
  return groups;
}, []);

const ListGroup = styled.ul`
  margin: 0;
  padding: 0;

  ul {
    /* padding: 0 0 0 10px; */
  }
`;

const docMenuWidth = `200px`;

const Nav = styled.nav`
  /* padding: 0 20px; */
  background-color: #FFF;
  position: fixed;
  left: 0;
  top: 52px;
  bottom: 0;
  width: ${docMenuWidth};
  border-right: 1px solid #eee;
  overflow-y: auto;
  z-index: 20;
  transition: transform 0.3s ease;

  ${(c) => c.opened && css`
    /* color: red; */
    transform: translateX(0) !important;
  `}

  @media(max-width: 576px) {
    transform: translateX(-100%);
    box-shadow: 0 0 12px rgba(0,0,0,0.1);
    width: 70%;
  }
`;

const NavGroup = styled(ListGroup)`
  /* margin-bottom: 20px; */
`;

const NavItemBasic = styled.div`
  padding: 12px 20px;
`;

const NavGroupTitle = styled(NavItemBasic)`
  cursor: pointer;

  .title {
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.color['nav-link']};
  }
  
  .icon {
    color: #AAA;
  }
`;

const NavGroupMenu = styled(ListGroup)`
  height: auto;
  transition: padding 0.2s ease;
  padding: 5px 0;
  &._hide {
    height: 0;
    opacity: 0;
    padding: 0;
    visibility: hidden;
  }
`;

const NavGroupMenuItem = styled.li`
  list-style-type: none;

  a {
    padding: 8px 10px 8px 30px;
    color: ${({ theme }) => theme.color['nav-link']};
    display: block;
    transition: base;
    transition-property: color;
    border-left: 3px;
    border-color: transparent;

    &:hover {
      color: ${({ theme }) => theme.color['nav-link-hover']};
      background-color: ${({ theme }) => theme.color['nav-link-hover-bg']};
    }

    &.active {
      font-weight: 600;
      border-left: 3px solid ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color['nav-link-hover-bg']};
    }
  }
`;

const sortGroupsWithConfig = (sideMenuFromConfig: string[]) => (a, b) => {
  const indexA = sideMenuFromConfig.indexOf(a.name);
  const indexB = sideMenuFromConfig.indexOf(b.name);
  const diff = indexA - indexB;
  // eslint-disable-next-line no-nested-ternary
  return diff === 0 ? 0 : (diff < 0 ? -1 : 1);
};

const NavGroupWrapper = ({ navGroup, defaultShowAllMenu = true }) => {
  const [isShow, setIsShow] = useState(defaultShowAllMenu);
  return (
    <NavGroup key={navGroup.name}>
      <NavGroupTitle
        onClick={(e) => {
          setIsShow(!isShow);
        }}>
        <Grid container alignItems="center" justifyContent="between">
          <span className="title">
            {navGroup.name}
          </span>
          <Icon n={isShow ? 'chevron-up' : 'chevron-right'} />
        </Grid>
      </NavGroupTitle>
      <NavGroupMenu className={isShow ? 'show' : '_hide'}>
        {
          navGroup.pages.map((page) => (
            <NavGroupMenuItem key={page.id}>
              <Link activeClassName="active" to={page.path} ref={(e) => {
                if (!isShow && e) {
                  const isActive = e.classList.contains('active');
                  if (isActive) {
                    setIsShow(true);
                  }
                }
              }}>
                {page.context.frontmatter.title}
              </Link>
            </NavGroupMenuItem>
          ))
        }
      </NavGroupMenu>
    </NavGroup>
  );
};

export function SideNav({ opened }) {
  useEffect(() => {
    const sideNav = document.querySelector('#sideNav');
    if (!sideNav) return;
    const activeSideNavItem = sideNav.querySelector('.active');
    if (activeSideNavItem) {
      sideNav.scrollTop = activeSideNavItem.offsetTop;
    }
  }, []);
  const data = useStaticQuery(QUERY);

  const navGroups = pagesToNavGroups(
    data.allSitePage.edges
      .map((edge) => edge.node)
      .filter((node) => node.context && node.context.frontmatter),
  );

  navGroups.sort(sortGroupsWithConfig(data.site.siteMetadata.menu));

  return (
    <Nav id="sideNav" opened={opened}>
      {
        navGroups.map((navGroup) => (
          <NavGroupWrapper
            key={navGroup.name}
            defaultShowAllMenu={data.site.siteMetadata.defaultShowAllMenu}
            navGroup={navGroup} />
        ))
      }
    </Nav>
  );
}
