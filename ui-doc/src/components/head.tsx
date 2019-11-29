import React from 'react';
import { graphql, StaticQuery, useStaticQuery } from 'gatsby';
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
  const data = useStaticQuery(QUERY);
  return (
    <Seo
      title={`${pageContext.frontmatter ? pageContext.frontmatter.title : ''} - ${data.site.siteMetadata.title}`}
    />
  );
}
