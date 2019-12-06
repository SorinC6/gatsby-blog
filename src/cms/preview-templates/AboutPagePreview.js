import React from "react";
import PropTypes from "prop-types";
import AboutPage from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPage
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true
    }}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
