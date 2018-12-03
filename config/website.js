const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/2019-portfolio', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Chance Eakin Software Engineer', // Navigation and Site Title
  siteTitleAlt: 'Chance', // Alternative Site title for SEO
  siteUrl: 'https://www.chanceeakin.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Personal Portfolio',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@chanceeakin', // Twitter Username
  ogSiteName: 'chance.eakin', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.grey,
  backgroundColor: tailwind.colors.blue,
};
