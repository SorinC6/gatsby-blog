import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { useSiteMetadata } from "../lib/hooks";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      font-family: 'Montserrat', sans-serif;

    }
    html,
    body {
      margin: 0;
      color: #555;
      font-size: 18px;
      line-height: 1.4;
        /* remove margin for the main div that Gatsby mounts into */
      > div {
          margin-top: 0;
        }
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight:bold;
      color: #222;
      line-height: 1.1;
      + * {
      margin-top: 0.5rem;
      }
    }
`;

function Layout(props) {
  const {
    title: defaultTitle,
    description: defaultDescription
  } = useSiteMetadata();
  const title = props.title || defaultTitle;
  const description = props.description || defaultDescription;

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <GlobalStyle />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
