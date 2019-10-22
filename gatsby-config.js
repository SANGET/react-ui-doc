module.exports = {
  plugins: [
    {
      resolve: "@ukelli-ui/doc",
      options: {
        name: 'Ukelli-UI Doc',
        slug: 'ukelli-ui-doc',
        github: 'https://github.com/ukelli/ukelli-ui',
        siteUrl: 'https://ui.thinkmore.xyz',
        author: 'Alex',
        menu: ['Introduction', 'Guides', 'API'],
        nav: [{ title: 'Docs', url: '/docs/' }],
        basePath: ".",
        docPath: `${__dirname}/website/pages/docs`,
        pagePath: `${__dirname}/website/pages`,
        imagePath: `${__dirname}/images`,
        analytics: {
          trackingId: `UA-125030746-1`,
          head: false,
        }
      },
    },
  ],
};
