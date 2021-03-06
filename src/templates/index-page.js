import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {
  useHeroData,
  useIntroData,
  useLogoData,
  useBlogData,
} from "../lib/hooks"
import styled from "styled-components"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import BlogList from "../components/BlogList"
import MyChoiceComponent from "../components/MyChoiceComponent"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

export function IndexPageTemplate(props) {
  const heroData = useHeroData()
  const introData = useIntroData()
  const logoData = useLogoData()
  const blogData = useBlogData()
  return (
    <Root>
      <Parallax scrooling pages={3.9}>
        <ParallaxLayer offset={0.02} speed={0.4} factor={1}>
          <Header logoData={logoData} />
        </ParallaxLayer>
        <ParallaxLayer
          style={{ zIndex: -200 }}
          offset={0.08}
          speed={0.5}
          factor={1}
        >
          <Hero heroData={heroData} location={props.location} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={-0.25} factor={1}>
          <Intro introData={introData} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          speed={0.8}
          style={{ zIndex: 200 }}
          factor={7}
        >
          <BlogList blogData={blogData} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={-0.05} factor={7}>
          <MyChoiceComponent />
        </ParallaxLayer>
        <ParallaxLayer offset={3.76} speed={-0.2} factor={1}>
          <Footer logoData={logoData} location={props.location} />
        </ParallaxLayer>
      </Parallax>
    </Root>
  )
}

function IndexPage(props) {
  return (
    <Layout>
      <IndexPageTemplate {...props} />
    </Layout>
  )
}

export default IndexPage

const Root = styled.div`
  background-color: red;
`
