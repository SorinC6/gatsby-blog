import React from "react";
import PropTypes from "prop-types";
import HomePage from "../../templates/index-page";

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePage
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true
    }}
  />
);

HomePage.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HomePagePreview;
