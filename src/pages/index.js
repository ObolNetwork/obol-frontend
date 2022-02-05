import React from "react"
import { Box, ChakraProvider } from "@chakra-ui/react"
import Header from "../components.v2/Header"
import theme from "../theme"
import Hero from "../components.v2/Hero"
import BuildOnObol from "../components.v2/BuildOnObol"
import DotsDivider from "../components.v2/DotsDivider"

const IndexPage = () => {
  return (
    <Box bg="obol.black" h="100vh">
      <Header />
      <Hero />
      <DotsDivider />
      <BuildOnObol />
      <DotsDivider />
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
