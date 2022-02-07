import React, { FC } from "react"
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  VStack,
} from "@chakra-ui/react"
import HeaderLink, { HeaderLinkProps } from "./HeaderLink"

const MobileDrawer: FC<{
  isOpen: boolean
  onClose: () => void
  headerLinks: HeaderLinkProps[]
}> = ({ isOpen, onClose, headerLinks }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent bg="obol.darkBlue" pt="48px">
        <DrawerCloseButton color="white" />
        <VStack spacing={4}>
          {headerLinks.map(link => (
            <HeaderLink isMobile onClose={onClose} {...link} key={link.text} />
          ))}
        </VStack>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileDrawer
