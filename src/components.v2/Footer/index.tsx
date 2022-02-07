import React, { FC } from "react"
import { HStack, Image, VStack } from "@chakra-ui/react"
import obol from "../../images/obolnetwork.png"
import TwitterIcon from "../Icons/Twitter"
import DiscordIcon from "../Icons/Discord"
import { Body } from "../Typography"
import theme from "../../theme"

const Footer: FC = () => {
  return (
    <VStack
      spacing="48px"
      paddingY="96px"
      bg={`linear-gradient(${theme.colors.obol.black}, ${theme.colors.obol.darkBlue})`}
    >
      <Image src={obol} w="200px" />
      <HStack spacing="12px">
        <Body>Follow us on</Body>
        <TwitterIcon boxSize="36px" />
        <DiscordIcon boxSize="36px" />
      </HStack>
      <Body>©{new Date().getFullYear()} OBOL, All Rights Reserved.</Body>
    </VStack>
  )
}

export default Footer
