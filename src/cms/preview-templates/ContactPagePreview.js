import React from "react";
import PropTypes from "prop-types";
import ContactPagePreview from "../../templates/contact-page";

const ContactPage = ({ entry, widgetFor }) => (
  <ContactPagePreview
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true
    }}
  />
);

ContactPage.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ContactPage;
