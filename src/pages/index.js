import React from "react"
import { Box, ChakraProvider } from "@chakra-ui/react"
import Header from "../components.v2/Header"
import theme from "../theme"
import Hero from "../components.v2/Hero"

const IndexPage = () => {
  return (
    <Box bg="obol.black" h="100vh">
      <Header />
      <Hero />
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
