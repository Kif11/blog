module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '22472f09f0294115ba5cf80937140ba9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Technology, life, freedom',
  domain: 'kif.codercat.tk',
  author: 'Kirill Kovalevskiy',

  // open graph metadata (optional)
  description: 'Blog about technology, life and freedom',
  socialImageTitle: 'Some social title',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'kovalewskiy',
  github: 'kif11',
  linkedin: 'kkvisuals',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'Kif11/blog',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
