import React from "react";
import { useContactData } from "../lib/hooks";
import { Root } from "../components/~common/basicPageStyles";
import Layout from "../components/Layout";

export function ContactPageTemplate() {
  const data = useContactData();
  const { html } = data;
  return (
    <Root>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Root>
  );
}

ContactPageTemplate.propTypes = {};

function ContactPage() {
  return (
    <Layout>
      <ContactPageTemplate />
    </Layout>
  );
}

ContactPage.propTypes = {};

export default ContactPage;
