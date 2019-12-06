import React from "react";
import PropTypes from "prop-types";
import BlogPage from "../../templates/blog-post";

const BlogPreview = ({ entry, widgetFor }) => (
  <BlogPage
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true
    }}
  />
);

BlogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPreview;
