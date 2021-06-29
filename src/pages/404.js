import React from "react"
import { Container } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container component="main" maxWidth="md">
      <br />
      <h1>Not Found</h1>
      <p>
        You just hit a route that doesn&#39;t exist, please file a bug report if
        you think this is a mistake.
      </p>
    </Container>
  </Layout>
)

export default NotFoundPage
