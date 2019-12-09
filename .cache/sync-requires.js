const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/src/pages/index.js"))),
  "component---src-pages-blog-2019-11-25-test-1-md": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/src/pages/blog/2019-11-25-test-1.md"))),
  "component---src-pages-blog-2019-11-25-test-md": hot(preferDefault(require("/Users/user/Documents/gatsby/gatsby-blog/src/pages/blog/2019-11-25-test.md")))
}

