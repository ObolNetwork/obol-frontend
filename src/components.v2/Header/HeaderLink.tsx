import React, { FC } from "react"
import { Box, Link } from "@chakra-ui/react"

export interface HeaderLinkProps {
  text: string
  href: string
  isMobile?: boolean
  onClose?: () => void
}

const HeaderLink: FC<HeaderLinkProps> = ({ text, href, isMobile, onClose }) => {
  return (
    <Box
      className="link-container"
      display={
        isMobile
          ? { base: "inline", md: "none" }
          : { base: "none", md: "inline" }
      }
    >
      <Link
        color="white"
        href={href}
        target={href.includes("#") ? undefined : "_blank"}
        _hover={{ textDecoration: "none" }}
        fontSize={{ base: "lg", md: undefined }}
        onClick={onClose}
      >
        {text}
      </Link>
      <Box
        h="3px"
        w="100%"
        bg="obol.gradientLight"
        borderRadius="10px"
        opacity={0}
        transition="opacity 0.5s"
        sx={{
          ".link-container:hover &": {
            opacity: 1,
          },
        }}
      />
    </Box>
  )
}

export default HeaderLink
