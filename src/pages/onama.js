import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const onama = () => {
  return (
    <Layout>
      <SEO title="O nama" />
      <h1>Hi from onama page</h1>
      <p>Welcome to page onama</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default onama
