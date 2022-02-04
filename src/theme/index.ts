import { extendTheme } from "@chakra-ui/react"
import { Button } from "./Button"

const colors = {
  obol: {
    gradient:
      "linear-gradient(90deg, #19314B 0%, #37606B 39.06%, #61AC9F 67.19%, #81BBA3 100%)",
    gradientLight:
      "linear-gradient(90deg, #37606B 0%, #61AC9F 55.21%, #81BBA3 100%)",
    gradientDark:
      "linear-gradient(60.65deg, #19314B 1.41%, #37606B 53.54%, #61AC9F 98.59%)",
    lightGreen: "#61AC9F",
    darkBlue: "#19314B",
    black: "#101112",
  },
}

const index = extendTheme({
  colors,
  components: {
    Button,
  },
})

export default index
