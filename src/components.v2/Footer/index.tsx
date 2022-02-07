import React, { FC } from "react"
import { HStack, Image, VStack } from "@chakra-ui/react"
import obol from "../../images/obolnetwork.png"
import TwitterIcon from "../Icons/Twitter"
import DiscordIcon from "../Icons/Discord"
import { Body } from "../Typography"
import theme from "../../theme"
import { Href } from "../../types"

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
        <a href={Href.Twitter} target="_blank">
          <TwitterIcon boxSize="36px" />
        </a>
        <a href={Href.Discord} target="_blank">
          <DiscordIcon boxSize="36px" />
        </a>
      </HStack>
      <Body>©{new Date().getFullYear()} OBOL, All Rights Reserved.</Body>
    </VStack>
  )
}

export default Footer
