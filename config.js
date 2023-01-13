const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://notes.aboureada.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'images/logo.png',
    logoLink: '/',
    title: "Anas's Digital Garden",
    githubUrl: 'https://github.com/AnasAboureada/Anas-Digital-Garden',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/AnasAboureada" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <i class="fa-brands fa-twitter"></i>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://www.linkedin.com/in/anasaboureada/" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <i class="fa-brands fa-linkedin"></i>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/',
    ],
    collapsedNav: [
      'algorithms',
      'sorting', // add trailing slash if enabled above
      'searching', // add trailing slash if enabled above
    ],
    links: [{ text: 'Profile', link: 'https://aboureada.com' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "Notes",
  },
  siteMetadata: {
    title: 'Anas\'s Aboureada Digital Garden',
    description: 'Anas\'s Aboureada study notes, learnings, interests, blog posts, thoughts',
    ogImage: null,
    docsLocation: 'https://github.com/AnasAboureada/Anas-Digital-Garden/tree/main/content',
    favicon: 'images/logo.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Anas\'s Digital Garden',
      short_name: 'DigitalGardenByAnas',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'images/logo.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
  lowers: [
    'A',
    'An',
    'The',
    'And',
    'But',
    'Or',
    'For',
    'Nor',
    'As',
    'At',
    'By',
    'For',
    'From',
    'In',
    'Into',
    'Near',
    'Of',
    'On',
    'Onto',
    'To',
    'With',
    'Vs',
  ],
  uppers: ['Id', 'Dfs', 'Bfs', 'Gcd']
};

module.exports = config;
