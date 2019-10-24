import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Seo from './seo';

const QUERY = graphql`
  query Head {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export function Head({ pageContext }) {
  return (
    <StaticQuery
      query={QUERY}
      render={(data) => (
        <Seo
          title={`${pageContext.frontmatter.title} - ${data.site.siteMetadata.title}`}
        />
      )}
    />
  );
}
