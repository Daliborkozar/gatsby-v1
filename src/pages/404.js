import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Stranica nije pronadjena" />
    <h1>404: Not Found</h1>
    <p>Nazalost stranica ne postoji... vratite se na prethodnu</p>
    
  </Layout>
)

export default NotFoundPage
