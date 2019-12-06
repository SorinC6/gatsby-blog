const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-post-details-js": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/src/components/PostDetails.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/src/pages/page-2.js")))
}

