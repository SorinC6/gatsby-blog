import React from "react";
import Layout from "../components/Layout";
import {
  useHeroData,
  useIntroData,
  useLogoData,
  useBlogData
} from "../lib/hooks";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import LogoList from "../components/LogoList";
import BlogList from "../components/BlogList";

export function IndexPageTemplate() {
  const heroData = useHeroData();
  const introData = useIntroData();
  const logoData = useLogoData();
  const blogData = useBlogData();
  return (
    <>
      <Hero heroData={heroData} />
      <Intro introData={introData} />
      <LogoList logoData={logoData} />
      <BlogList blogData={blogData} />
    </>
  );
}

function IndexPage() {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
}

export default IndexPage;
