import React from "react"
import { Box, Image } from "@chakra-ui/react"
import obolHexes from "../../../images/obol-hexes.png"
import obolHexesMobile from "../../../images/obol-hexes-mobile.png"
import { useMediaQuery } from "@material-ui/core"

const BuildOnObol = () => {
  const isLargerThan900 = useMediaQuery("(min-width: 900px)")

  return (
    <Box p="36px" id="build">
      <Image
        src={isLargerThan900 ? obolHexes : obolHexesMobile}
        maxW={{ base: undefined, sm: "750px" }}
        margin="auto"
      />
    </Box>
  )
}

export default BuildOnObol
