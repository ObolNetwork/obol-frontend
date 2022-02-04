import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components.v2/Header"
import theme from "../theme"

export default function IndexPage() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Layout>
        <SEO title="Obol Network" />
      </Layout>
    </ChakraProvider>
  )
}
