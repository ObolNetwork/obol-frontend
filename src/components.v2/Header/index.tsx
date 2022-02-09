import React from "react"
import { HeaderLinkProps } from "./HeaderLink"
import { useDisclosure } from "@chakra-ui/react"
import { Href } from "../../types"
import MobileDrawer from "./MobileDrawer"
import DesktopHeader from "./DesktopHeader"

const headerLinks: HeaderLinkProps[] = [
  {
    text: "Build",
    href: "#build",
  },
  {
    text: "Supporters",
    href: "#supporters",
  },
  {
    text: "Team",
    href: "#team",
  },
  {
    text: "Jobs",
    href: Href.Talent,
  },
  {
    text: "Blog",
    href: Href.Blog,
  },
]

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <MobileDrawer {...{ isOpen, onClose, headerLinks }} />
      <DesktopHeader {...{ onOpen, headerLinks }} />
    </>
  )
}

export default Header
