import React, { FC } from "react"
import { Box, Button, HStack, Icon, Image } from "@chakra-ui/react"
import ObolBrand from "../../images/obolnetwork.png"
import HeaderLink, { HeaderLinkProps } from "./HeaderLink"
import { FaDiscord, GiHamburgerMenu } from "react-icons/all"
import { Href } from "../../types"

const DesktopHeader: FC<{
  headerLinks: HeaderLinkProps[]
  onOpen: () => void
}> = ({ headerLinks, onOpen }) => {
  return (
    <Box
      bg="obol.black"
      p={4}
      height="60px"
      position="relative"
      display="flex"
      justifyContent="flex-end"
      borderBottom="2px solid"
      borderColor="obol.lightGreen"
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
      <HStack spacing={6}>
        {headerLinks.map(link => (
          <HeaderLink {...link} key={link.text} />
        ))}

        <Button
          leftIcon={<Icon fontSize="24px" as={FaDiscord} />}
          size="sm"
          as="a"
          href={Href.Discord}
          target="_blank"
        >
          Join us
        </Button>
        <Icon
          display={{ base: "inline", md: "none" }}
          onClick={onOpen}
          as={GiHamburgerMenu}
          color="white"
          boxSize="24px"
          cursor="pointer"
        />
      </HStack>
    </Box>
  )
}

export default DesktopHeader
