const fs = require("fs");
const path = require("path");

const { createFilePath } = require(`gatsby-source-filesystem`);
const layoutMapper = require('./utils/layout-mapper');

exports.createPages = ({ graphql, actions }, options) => {
  const { createPage } = actions;

  return graphql(
    `
      query {
        docMdx: allMdx {
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
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create docs pages.
    const posts = result.data.docMdx.edges;
    posts.forEach((post, index) => {
      // const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      // const next = index === 0 ? null : posts[index - 1].node;
      const { node } = post;
      const docPath = node.fields.slug;
      const { route } = node.frontmatter;
      const _route = route || docPath;
      if (!_route) return;
      // const layoutComponent = layoutMapper[post.node.frontmatter.layout];

      createPage({
        path: _route,
        // component: require.resolve(`./src/components/posts-page-layout.tsx`),
        component: require.resolve('./src/layouts/docs.tsx'),
        // component: layoutMapper.doc,
        context: {
          id: node.id,
          slug: _route,
          frontmatter: node.frontmatter,
          // previous,
          // next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }, options) => {
  const { createNodeField } = actions;
  // const timeRegExp = /((19[2-9]\d{1})|(20\d{2}))-((0?[1-9])|(1[0-2]))-((0?[1-9])|([1-2][0-9])|30|31)-/;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    // const basePath = options.basePath || "/";
    // const slugify = (str) => {
    //   const slugArr = str.split('/').filter((s) => !!s);
    //   let currSlug = slugArr[slugArr.length - 1];
    //   currSlug = currSlug.replace(timeRegExp, '');
    //   currSlug = currSlug.replace(/\s+/g, "");
    //   return `/${basePath}/${currSlug}`.replace(/\/\/+/g, "/");
    // };
    // value = slugify(value);
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};
