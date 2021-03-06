//Created by Kishore Kumar Govindaradjou on 8th Aug 2019

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer  from './reusable/Footer'
import Navbar  from './reusable/Navbar'


import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({children}) => (
  <>
  <Navbar />
  {children}
  <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
