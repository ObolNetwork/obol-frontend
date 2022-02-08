import React from "react"
import { Box, ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import Header from "../components.v2/Header"
import LandingPage from "./Landing"
import Footer from "../components.v2/Footer"

//
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
    <ChakraProvider theme={theme}>
      <IndexPage />
    </ChakraProvider>
  )
}
