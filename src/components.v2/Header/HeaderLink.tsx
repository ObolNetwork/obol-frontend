import React, { FC } from "react"
import { Box, Link } from "@chakra-ui/react"

export interface HeaderLinkProps {
  text: string
  href: string
}

const HeaderLink: FC<HeaderLinkProps> = ({ text, href }) => {
  return (
    <Box>
      <Link color="white" href={href} _hover={{ textDecoration: "none" }}>
        {text}
      </Link>
      <Box h="3px" w="100%" bg="obol.gradientLight" borderRadius="10px" />
    </Box>
  )
}

export default HeaderLink
