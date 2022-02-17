import React from "react"
import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import heroBg from "../../../images/hero-bg.png"
import obolStack from "../../../images/obol-stack.png"
import { Body, Header2 } from "../../../components.v2/Typography"
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
                target="_blank"
                color="white"
                fontWeight="700"
                rightIcon={<BsArrowRight />}
              >
                our blog
              </Button>
            </HStack>
          </VStack>
          <VStack maxW={{ base: "100%", md: "500px" }}>
            <Header2>
              The Obol Network is a community and protocol fostering trust
              minimized staking through multi-operator validation.
            </Header2>
            <Text color={"white"}>
              Obol will help Ethereum scale to a billion users by enabling
              low-trust access to Ethereum staking yield, a cornerstone value
              stream of Web3
            </Text>
          </VStack>
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero
