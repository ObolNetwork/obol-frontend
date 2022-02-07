import React from "react"
import { Button } from "@chakra-ui/react"
import Hero from "./Hero"
import DotsDivider from "../../components.v2/DotsDivider"
import BuildOnObol from "./BuildOnObol"
import SupportedBy from "./SupportedBy"
import TheTeam from "./TheTeam"
import JoinTheCommunity from "./JoinTheCommunity"

const LandingPage = () => {
  return (
    <>
      <Hero />
      <DotsDivider />
      <BuildOnObol />
      <DotsDivider />
      <SupportedBy />
      <DotsDivider />
      <TheTeam />
      <DotsDivider />
      <JoinTheCommunity />
      <DotsDivider />
    </>
  )
}

export default LandingPage
