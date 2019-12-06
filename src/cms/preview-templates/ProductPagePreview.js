import React from "react";
import PropTypes from "prop-types";
import ProductPage from "../../templates/products-page";

const ProductPagePreview = ({ entry, widgetFor }) => (
  <ProductPage
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true
    }}
  />
);

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ProductPagePreview;
