// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-contact-js": () => import("../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-templates-blog-post-js": () => import("../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-js": () => import("../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-blog-2019-11-25-test-1-md": () => import("../src/pages/blog/2019-11-25-test-1.md" /* webpackChunkName: "component---src-pages-blog-2019-11-25-test-1-md" */),
  "component---src-pages-blog-2019-11-25-test-md": () => import("../src/pages/blog/2019-11-25-test.md" /* webpackChunkName: "component---src-pages-blog-2019-11-25-test-md" */)
}

