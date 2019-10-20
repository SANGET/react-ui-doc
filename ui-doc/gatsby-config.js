module.exports = function config({
  name = '',
  github = '',
  description = '',
  siteUrl = '',
  author = '',
  docPath = './docs',
  pagePath = './pages',
  basePath = './src',
  imagePath = './images',
  menu = ['Usage'],
  nav = [{ title: 'Usage', url: '/docs/getting-started/' }],
  codeFundProperty = 268,
  standalone = false,
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
      // {
      //   resolve: 'gatsby-plugin-compile-es6-packages',
      //   options: {
      //     modules: ['smooth-doc'],
      //   },
      // },
      'gatsby-plugin-resolve-src',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-helmet',
      {
        resolve: require.resolve(
          './src/plugins/gatsby-remark-autolink-headers',
        ),
      },
      // {
      //   resolve: `gatsby-plugin-manifest`,
      //   options: {
      //     name,
      //     short_name: slug,
      //     start_url: '/',
      //     background_color: '#bd4932',
      //     theme_color: '#bd4932',
      //     display: 'minimal-ui',
      //     icon: 'src/images/logo.png',
      //   },
      // },
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
          gatsbyRemarkPlugins: [
            {
              resolve: require.resolve(
                './src/plugins/gatsby-remark-autolink-headers',
              ),
            },
          ],
        },
      },
      {
        resolve: require.resolve(
          './src/plugins/gatsby-remark-autolink-headers',
        ),
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: imagePath,
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp', // Fonts
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          custom: {
            families: ['Colfax'],
            url: 'https://www.smooth-code.com/assets/fonts.css',
          },
        },
      },
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
