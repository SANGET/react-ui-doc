import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const QUERY = graphql`
  query WebsiteHeader {
    site {
      siteMetadata {
        standalone
      }
    }
  }
`;

export function WebsiteHeader() {
  return (
    <StaticQuery
      query={QUERY}
      render={(data) => (data.site.siteMetadata.standalone === false ? (
        <span></span>
        // <ThemeProvider theme={theme}>
        //   {/* <Header variant="shadow" /> */}
        //   {/* <div>Header</div> */}
        // </ThemeProvider>
      ) : null)
      }
    />
  );
}
