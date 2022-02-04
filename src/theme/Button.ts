export const Button = {
  defaultProps: {
    colorScheme: "obol",
    iconSpacing: "16px",
  },
  baseStyle: {
    borderRadius: "5px",
  },
  variants: {
    solid: (props: any) => {
      if (props.colorScheme === "obol") {
        return {
          color: "white",
          bg: "obol.gradientLight",
        }
      }
    },
  },
}
