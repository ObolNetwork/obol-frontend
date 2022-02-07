import React from "react"
import { Box, Image } from "@chakra-ui/react"
import obolHexes from "../../../images/obol-hexes.png"
import obolHexesMobile from "../../../images/obol-hexes-mobile.png"
import obolSwivel from "../../../images/obol-swivel.png"
import { useMediaQuery } from "@material-ui/core"

const BuildOnObol = () => {
  const isLargerThan900 = useMediaQuery("(min-width: 900px)")

  return (
    <Box
      bg="transparent"
      p="36px"
      bgImage={obolSwivel}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="1100px 600px"
    >
      <Image
        src={isLargerThan900 ? obolHexes : obolHexesMobile}
        maxW="750px"
        margin="auto"
      />
    </Box>
  )
}

export default BuildOnObol
