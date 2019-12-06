import React from "react";
import { Root } from "../components/~common/basicPageStyles";
import Layout from "../components/Layout";

function NotFoundPage() {
  return (
    <Layout title="Upss… Not Found">
      <Root>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Root>
    </Layout>
  );
}

export default NotFoundPage;
