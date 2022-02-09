import React, { FC } from "react"
import { Box, VStack, SimpleGrid, Text } from "@chakra-ui/react"
import TeamMemberCard from "./TeamMemberCard"
import Collin from "../../../images/team/Collin.png"
import Corver from "../../../images/team/Corver.png"
import Dhruv from "../../../images/team/Dhruv.png"
import Jules from "../../../images/team/Jules.jpg"
import Oisin from "../../../images/team/Oisin.jpg"
import Richard from "../../../images/team/Richard.png"
import Abhishek from "../../../images/team/Abhishek.png"
import Saleh from "../../../images/team/Saleh.jpg"
import Chris from "../../../images/team/Chris.png"
import { Header2 } from "../../../components.v2/Typography"

export interface TeamMember {
  name: string
  title: string
  twitter: string
  github: string
  avatar: any
}

const teamMembers: TeamMember[] = [
  {
    name: "Collin Myers",
    title: "Project Lead & Founder",
    twitter: "https://twitter.com/StakeETH",
    github: "https://github.com/collinjmyers",
    avatar: Collin,
  },
  {
    name: "Oisin Kyne",
    title: "Head of Technology & Co-Founder",
    twitter: "https://twitter.com/OisinKyne",
    github: "https://github.com/OisinKyne",
    avatar: Oisin,
  },

  {
    name: "Aly Saleh",
    title: "Dev Ops Lead",
    twitter: "https://twitter.com/eth2devops",
    github: "https://github.com/eth2devops",
    avatar: Saleh,
  },

  {
    name: "Corver Roos",
    title: "Tech Lead",
    twitter: "https://github.com/corverroos",
    github: "https://twitter.com/corverdev",
    avatar: Corver,
  },

  {
    name: "Jules De Smit",
    title: "Senior Software Engineer",
    twitter: "https://twitter.com/julesdesmit",
    github: "https://github.com/julesdesmit",
    avatar: Jules,
  },

  {
    name: "Chris Battenfield",
    title: "Product Lead",
    twitter: "https://twitter.com/Battenfield",
    github: "https://github.com/Battenfield",
    avatar: Chris,
  },

  {
    name: "Dhruv Bodani",
    title: "Software Engineer",
    twitter: "https://twitter.com/dhruvbodani",
    github: "https://github.com/dB2510",
    avatar: Dhruv,
  },

  {
    name: "Abhishek Kumar",
    title: "Software Engineer",
    twitter: "https://twitter.com/xenowits",
    github: "https://github.com/xenowits",
    avatar: Abhishek,
  },
  {
    name: "Richard Patel",
    title: "Protocol Engineer",
    twitter: "https://twitter.com/terorie_dev",
    github: "https://github.com/terorie",
    avatar: Richard,
  },
]

const TheTeam: FC = () => {
  return (
    <VStack id="team" padding={8}>
      <Header2 textAlign="center" my="64px">
        The Team
      </Header2>
      <Box
        mx={8}
        bg="obol.gradientDarkOpaque"
        px="24px"
        py="48px"
        w="100%"
        maxWidth="998px"
        borderRadius="8px"
      >
        <SimpleGrid minChildWidth="220px" spacing="110px">
          {teamMembers.map(member => (
            <TeamMemberCard {...member} key={member.name} />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  )
}

export default TheTeam
