import React from "react"
import Helmet from "react-helmet"
import { Box, ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import Header from "../components.v2/Header"
import LandingPage from "./Landing"
import Footer from "../components.v2/Footer"

const IndexPage = () => {
  return (
    <Box bg="obol.black" h="100vh">
      <Header />
      <LandingPage />
      <Footer />
    </Box>
  )
}

export default function App() {
  return (
    <>
      <Helmet>
        <meta name="Obol" content="Obol is a cool project" />
        <meta property="og:title" content="Obol" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Obol is a cool project" />
        <meta
          property="og:image"
          content="%PUBLIC_URL%/ObolHorizonalBlack.png"
        />
        <meta property="og:url" content="https://obol.tech/" />
        <meta name="twitter:site:id" content="obolnetwork" />
      </Helmet>
      <ChakraProvider theme={theme}>
        <IndexPage />
      </ChakraProvider>
    </>
  )
}
