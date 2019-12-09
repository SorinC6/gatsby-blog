import React from "react"
import { useLogoData, useHeroData } from "../lib/hooks"
import styled from "styled-components"
import Contact from "../components/Contact"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const ContactPageTemplate = ({ location }) => {
  const logoData = useLogoData()
  const heroData = useHeroData()

  return (
    <Layout>
      <Header logoData={logoData} contact={true} />
      <Root>
        <Contact />
      </Root>
      <Hero location={location} heroData={heroData} />
      <Footer logoData={logoData} />
    </Layout>
  )
}

ContactPageTemplate.propTypes = {}

export default ContactPageTemplate

const Root = styled.div`
  height: 62.3vh;
  min-height: calc(100vh - 290px);
  padding: 0 calc((100vw - 600px) / 2);

  @media (max-width: 400px) {
    padding: 0 20px;
  }

  h1,
  h2 {
    padding: 20px;
    margin-top: 10px;
  }

  h6 {
    text-align: center;
  }

  p {
    padding: 20px 5px;
    line-height: 1.4;
    text-align: justify;
    text-justify: inter-word;
  }

  img {
    border-radius: 5px;
  }
`
