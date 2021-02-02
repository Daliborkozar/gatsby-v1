import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Isusivaci from "../components/Isusivaci"
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Isusivaci />
    <Testimonials />
    <Footer />
  </Layout>
)

export default IndexPage
