import React from "react"
import HeaderLink, { HeaderLinkProps } from "./HeaderLink"
import { Box, Button, HStack, Image, Icon } from "@chakra-ui/react"
import { FaDiscord } from "react-icons/all"
import ObolBrand from "../../images/obolnetwork.png"

const headerLinks: HeaderLinkProps[] = [
  {
    text: "Build",
    href: "",
  },
  {
    text: "Supporters",
    href: "",
  },
  {
    text: "Team",
    href: "",
  },
  {
    text: "Talent",
    href: "",
  },
  {
    text: "Blog",
    href: "",
  },
]

const Header = () => {
  return (
    <Box
      bg="obol.black"
      p={4}
      height="60px"
      position="relative"
      display="flex"
      justifyContent="flex-end"
    >
      <Image
        height="30px"
        src={ObolBrand}
        maxHeight="100%"
        maxWidth="100%"
        width="auto"
        position="absolute"
        top={0}
        bottom={0}
        left="24px"
        margin="auto"
      />
      <HStack spacing={4}>
        {headerLinks.map(link => (
          <HeaderLink {...link} />
        ))}
        <Button leftIcon={<Icon fontSize="24px" as={FaDiscord} />} size="sm">
          Join us
        </Button>
      </HStack>
    </Box>
  )
}

export default Header
