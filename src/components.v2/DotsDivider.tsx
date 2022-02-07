import React from "react"
import { Circle, HStack } from "@chakra-ui/react"

const dotColors = [
  "#3B93BE",
  "#51AAC6",
  "#6FD1D7",
  "#81BCB9",
  "#6FD1D7",
  "#51AAC6",
  "#3B93BE",
]

const DotsDivider = () => {
  return (
    <HStack spacing={4} my={12} justifyContent="center">
      {dotColors.map((color, i) => (
        <Circle size="10px" bg={color} key={`${color}-${i}`} />
      ))}
    </HStack>
  )
}

export default DotsDivider
