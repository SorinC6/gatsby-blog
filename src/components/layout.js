import React from "react"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"
import { useSiteMetadata } from "../lib/hooks"
import { GlobalStyle } from "./styles/global"

function Layout({ children }) {
  const data = useSiteMetadata()
  console.log(data)

  const { title } = data.siteData
  const { description } = data.siteData
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
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans:300i,400,600,700&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <GlobalStyle />
      {/* <Header siteTitle={title} /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
