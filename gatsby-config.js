module.exports = {
  plugins: [
    {
      resolve: "@fox-tech/doc",
      options: {
        name: 'Ukelli-UI Doc',
        slug: 'ukelli-ui-doc',
        github: 'https://github.com/ukelli/ukelli-ui',
        siteUrl: 'https://ui.thinkmore.xyz',
        author: 'Alex',
        menu: ['Introduction', 'Guides', 'API'],
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
