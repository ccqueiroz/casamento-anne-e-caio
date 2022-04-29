module.exports = {
  siteUrl: 'https://www.casamentoanneecaio.com',
  generateRobotsTxt: true, // opcional
  priority: null,
  changefreq: null,
  exclude: ['/server-sitemap.xml', '/post/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.casamentoanneecaio.com/server-sitemap.xml'],
  },
}