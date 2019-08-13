import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    title="FoneBayOn"
    subtile="The Smartphone Ocean"
    heroClass="hero-background"
    />
  </Layout>
)

export default IndexPage
