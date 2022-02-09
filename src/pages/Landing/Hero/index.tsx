import React from "react"
import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import heroBg from "../../../images/hero-bg.png"
import obolStack from "../../../images/obol-stack.png"
import { Body, Header2, Header5 } from "../../../components.v2/Typography"
import { Href } from "../../../types"
import { BsArrowRight } from "react-icons/bs"

const Hero = () => {
  return (
    <Box
      bgImage={{ base: undefined, sm: heroBg }}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
      h={{ base: "auto", sm: "100%" }}
    >
      <Box
        position={{ base: "static", sm: "absolute" }}
        margin="auto"
        top="50%"
        left={0}
        right={0}
        maxW="1200px"
        transform={{ base: undefined, sm: "translateY(-50%)" }}
        paddingX="48px"
        paddingTop={{ base: "48px", sm: 0 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          spacing={12}
        >
          <VStack>
            <Image src={obolStack} />
            <Button as="a" target="_blank" href={Href.ProtoForm}>
              Join the Proto Community
            </Button>
            <HStack>
              <Body m="auto">Check out</Body>
              <Button
                fontFamily="Avenir Next"
                variant="link"
                as="a"
                href={Href.Blog}
                color="white"
                fontWeight="700"
                rightIcon={<BsArrowRight />}
              >
                our blog
              </Button>
              <Body>.</Body>
            </HStack>
          </VStack>
          <VStack maxW={{ base: "100%", md: "500px" }}>
            <Header2>
              The Obol Network is a trust minimized staking network enabling
              Ethereum to scale to its next billion users.
            </Header2>
            <Header5>
              A protocol and ecosystem to foster the adoption of trust minimized
              staking through multi-operator validation.
            </Header5>
            <Text color={"white"}>
              Obol will enable low-trust permissionless access to Ethereum
              staking yield, which can be used as a core building block in a
              variety of Web3 products.
            </Text>
          </VStack>
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero
