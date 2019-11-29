module.exports = function config({
  name = '',
  github = '',
  description = '',
  siteUrl = '',
  author = '',
  slug = '',
  manifestOptions = {
    background_color: '#376bfb',
    theme_color: '#376bfb',
    display: 'minimal-ui',
  },
  favicon = 'src/images/logo.png',
  docPath = 'src/pages/docs',
  pagePath = 'src/pages',
  imagePath = 'src/images',
  menu = ['Usage'],
  nav = [{ title: 'Usage', url: '/docs/' }],
  codeFundProperty = 268,
  standalone = false,
  defaultShowAllMenu = false,
  algoliaDocSearch = { apiKey: '', indexName: '' },
  analytics = {}
} = {}) {
  return {
    siteMetadata: {
      title: name,
      github,
      menu,
      nav,
      codeFundProperty,
      description,
      siteUrl,
      author,
      standalone,
      defaultShowAllMenu,
      algoliaDocSearch: {
        enabled: Boolean(algoliaDocSearch.apiKey),
        ...algoliaDocSearch,
      },
    },
    plugins: [
      {
        resolve: `gatsby-plugin-typescript`,
        options: {
          isTSX: true,
          allExtensions: true,
        },
      },
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: ['react-ui-doc'],
        },
      },
      'gatsby-plugin-resolve-src',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          ...manifestOptions,
          name,
          short_name: slug,
          start_url: '/',
          icon: favicon,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: pagePath,
          ignore: [`**/docs/**`],
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'docs',
          path: docPath,
        },
      },
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./src/layouts/default.tsx'),
            docs: require.resolve('./src/layouts/docs.tsx'),
          },
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: imagePath,
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      'gatsby-plugin-meta-redirect',
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          sitemap: null,
          host: null,
          policy: [
            {
              userAgent: '*',
              disallow: '/',
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: analytics,
      },
    ],
  };
};
