import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled, { css } from 'styled-components';

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
    padding: 0 0 0 10px;
  }
`;

const Nav = styled.nav`
  padding: 0 20;
`;

const NavGroup = styled(ListGroup)`
  margin-bottom: 20;
`;

const NavItemBasic = styled.div`
  padding: 12px 20px;
`;

const NavGroupTitle = styled(NavItemBasic)`
  font-size: 17;
  font-weight: 500;
`;

const NavGroupMenu = styled(ListGroup)`
`;

const NavGroupMenuItem = styled.li`
  padding: 8px 20px;
  list-style-type: none;

  a {
    color: nav-link;
    display: block;
    transition: base;
    transition-property: color;
    padding-left: 10;
    border-left: 3;
    border-color: transparent;

    &:hover {
      color: nav-link-hover;
    }

    &.active {
      font-weight: 600;
      border-left: 3;
      border-color: primary;
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

export function SideNav() {
  return (
    <StaticQuery
      query={QUERY}
      render={(data) => {
        const navGroups = pagesToNavGroups(
          data.allSitePage.edges
            .map((edge) => edge.node)
            .filter((node) => node.context && node.context.frontmatter),
        );

        navGroups.sort(sortGroupsWithConfig(data.site.siteMetadata.menu));

        return (
          <Nav>
            {
              navGroups.map((navGroup) => (
                <NavGroup key={navGroup.name}>
                  <NavGroupTitle>{navGroup.name}</NavGroupTitle>
                  <NavGroupMenu>
                    {
                      navGroup.pages.map((page) => (
                        <NavGroupMenuItem key={page.id}>
                          <Link activeClassName="active" to={page.path}>
                            {page.context.frontmatter.title}
                          </Link>
                        </NavGroupMenuItem>
                      ))
                    }
                  </NavGroupMenu>
                </NavGroup>
              ))
            }
          </Nav>
        );
      }}
    />
  );
}
