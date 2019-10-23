import { graphql } from "gatsby";
import React from "react";

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

export default class IndexPage extends React.Component {
  render() {
    const {  } = this.props
    console.log(this.props);
    return (
      <div className="index-page">
        Index
      </div>
    );
  }
}
