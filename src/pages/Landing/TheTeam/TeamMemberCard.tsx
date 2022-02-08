import React, { FC } from "react"
import { Image, Icon, HStack, VStack } from "@chakra-ui/react"
import { TeamMember } from "./index"
import { Body, Header4 } from "../../../components.v2/Typography"
import { BsGithub, BsTwitter } from "react-icons/all"

const TeamMemberCard: FC<TeamMember> = ({
  name,
  title,
  github,
  twitter,
  avatar,
}) => {
  return (
    <VStack>
      <Image size="lg" src={avatar} borderRadius="50%" />
      <Header4>{name}</Header4>
      <Body align="center">{title}</Body>
      <HStack justifyContent="center" spacing={2}>
        <a href={twitter} target="_blank">
          <Icon cursor="pointer" color="white" as={BsTwitter} boxSize="32px" />
        </a>
        <a href={github} target="_blank">
          <Icon cursor="pointer" color="white" as={BsGithub} boxSize="32px" />
        </a>
      </HStack>
    </VStack>
  )
}

export default TeamMemberCard
