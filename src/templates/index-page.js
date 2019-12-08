import React from "react"
import Layout from "../components/Layout"
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
import Header from "../components/Header"
import Footer from "../components/Footer"
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`

export function IndexPageTemplate(props) {
  const heroData = useHeroData()
  const introData = useIntroData()
  const logoData = useLogoData()
  const blogData = useBlogData()
  return (
    <Root>
      <Parallax scrooling pages={3.76}>
        <ParallaxLayer offset={0.02} speed={0.4}>
          <Header logoData={logoData} />
        </ParallaxLayer>
        <ParallaxLayer style={{ zIndex: -200 }} offset={0.08} speed={0.5}>
          <Hero heroData={heroData} location={props.location} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.1}>
          <Intro introData={introData} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0.8} style={{ zIndex: 200 }}>
          <BlogList blogData={blogData} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={0}>
          <MyChoiceComponent />
        </ParallaxLayer>
        <ParallaxLayer offset={3.53}>
          <Footer logoData={logoData} />
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
