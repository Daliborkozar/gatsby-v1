import React from 'react'

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const isusivaci = () => {
    return (
        <Layout>
      <SEO title="O nama" />
      <h1>Hi from isusivaci page</h1>
      <p>Welcome to page onama</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default isusivaci
