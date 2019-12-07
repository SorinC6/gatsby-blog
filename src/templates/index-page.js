import React from "react"
import Layout from "../components/Layout"
import {
  useHeroData,
  useIntroData,
  useLogoData,
  useBlogData,
} from "../lib/hooks"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import LogoList from "../components/LogoList"
import BlogList from "../components/BlogList"

export function IndexPageTemplate(props) {
  const heroData = useHeroData()
  const introData = useIntroData()
  const logoData = useLogoData()
  const blogData = useBlogData()
  return (
    <>
      <Hero heroData={heroData} location={props.location} />
      <Intro introData={introData} />
      <BlogList blogData={blogData} />
    </>
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
