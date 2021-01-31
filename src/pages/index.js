import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Isusivaci from "../components/Isusivaci"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Isusivaci />
  </Layout>
)

export default IndexPage
