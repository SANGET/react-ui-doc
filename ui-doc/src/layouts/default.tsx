import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx";

export default class DefaultLayout extends React.Component {
  render() {
    const { children, data = {} } = this.props;
    return (
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    );
  }
}
