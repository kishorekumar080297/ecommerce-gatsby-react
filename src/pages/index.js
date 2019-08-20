import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"
import InfoBlock from "../components/reusable/InfoBlock"
import DualInfoBlock from "../components/reusable/DualInfoBlock"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img = {data.img.childImageSharp.fluid}
      title = "FoneBayOn"
      subtitle = "The Smartphone Ocean"
      heroClass = "hero-background"
    />
    <InfoBlock heading="About Us" />
    <DualInfoBlock heading="Our Team" img="https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default IndexPage
