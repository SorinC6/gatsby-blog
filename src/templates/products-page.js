import React from "react";
import { Root } from "../components/~common/basicPageStyles";
import { useProductData } from "../lib/hooks";
import Layout from "../components/Layout";

export function ProductsPageTemplate() {
  const data = useProductData();
  const { html } = data;
  return (
    <Root>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Root>
  );
}

ProductsPageTemplate.propTypes = {};

function ProductsPage() {
  return (
    <Layout>
      <ProductsPageTemplate />
    </Layout>
  );
}

ProductsPage.propTypes = {};

export default ProductsPage;
