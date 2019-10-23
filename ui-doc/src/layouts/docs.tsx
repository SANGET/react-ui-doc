import React from 'react';
import { graphql } from 'gatsby';
import DefaultLayout from './default';

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

export default class DocLayout extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <DefaultLayout {...props}>
        <div>{children}</div>
      </DefaultLayout>
    );
  }
}
