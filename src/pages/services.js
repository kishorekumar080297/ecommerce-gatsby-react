import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"
import InfoBlock from "../components/reusable/InfoBlock"
import DualInfoBlock from "../components/reusable/DualInfoBlock"
import AboutSection from "../components/services/ServicesSection"



const ServicesPage = ({data}) => (
  <Layout>
    <SEO title="Services" />
    <HeroSection 
      img = {data.img.childImageSharp.fluid}
      title = "What we do?"
      subtitle = ""
      heroClass = "about-background"
    />
    <DualInfoBlock heading="Our Services" img="https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    <InfoBlock heading="About Vision" />
    <AboutSection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default ServicesPage
