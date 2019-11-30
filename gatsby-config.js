module.exports = {
  plugins: [
    {
      resolve: "react-ui-doc",
      options: {
        name: 'react-ui-doc',
        slug: 'react-ui-doc',
        github: 'https://github.com/SANGET/react-ui-doc',
        siteUrl: 'https://react-ui-doc.thinkmore.xyz',
        author: 'Alex',
        nav: [
          { title: 'Docs', url: '/docs/' },
          { title: 'Showcase', url: '/showcase/' },
        ],
        nav: [{ title: 'Docs', url: '/docs/' }],
        basePath: ".",
        docPath: `${__dirname}/src/pages/docs`,
        pagePath: `${__dirname}/src/pages`,
        imagePath: `${__dirname}/src/images`,
        analytics: {
          trackingId: `UA-125030746-1`,
          head: false,
        },
        theme: {
          defaultMode: 'light',
          colors: {
            light: {
              body: '#FFF'
            },
            dark: {
              body: '#000'
            }
          }
        }
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/components/layout`),
      }
    }
  ],
};
