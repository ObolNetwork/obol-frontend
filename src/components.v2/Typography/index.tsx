import React, { FC } from "react"
import { Text, TextProps } from "@chakra-ui/react"

export const Header2: FC<TextProps> = props => (
  <Text
    {...props}
    color="white"
    fontSize="30px"
    lineHeight="36px"
    fontWeight="400"
    as="h2"
    fontFamily="Rockwell"
  />
)

export const Header5: FC<TextProps> = props => (
  <Text
    {...props}
    color="white"
    fontSize="16px"
    lineHeight="22px"
    fontWeight="700"
    as="h5"
    fontFamily="Avenir Next"
    letterSpacing="-2%"
  />
)

export const Body: FC<TextProps> = props => (
  <Text
    {...props}
    color="white"
    fontSize="15px"
    lineHeight="21px"
    fontWeight="400"
    as="p"
    fontFamily="Avenir Next"
    letterSpacing="-2%"
  />
)
