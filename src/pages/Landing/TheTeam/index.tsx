import React, { FC } from "react"
import { Box, VStack, SimpleGrid, Text } from "@chakra-ui/react"
import TeamMemberCard from "./TeamMemberCard"
import geoorge from "../../../images/geoorge.jpg"

export interface TeamMember {
  name: string
  title: string
  twitter: string
  github: string
  avatar: any
}

const teamMembers: TeamMember[] = [
  {
    name: "Colin Meyers",
    title: "Project Lead & Founder",
    twitter: "https://twitter.com/StakeETH",
    github: "https://github.com/collinjmyers",
    avatar: geoorge,
  },
  {
    name: "Oisin Kyne",
    title: "Head of Technology & Co-Founder",
    twitter: "https://twitter.com/OisinKyne",
    github: "https://github.com/OisinKyne",
    avatar: geoorge,
  },

  {
    name: "Aly Saleh",
    title: "Dev Ops Lead",
    twitter: "https://twitter.com/eth2devops",
    github: "https://github.com/eth2devops",
    avatar: geoorge,
  },

  {
    name: "Corver Roos",
    title: "Tech Lead",
    twitter: "https://github.com/corverroos",
    github: "https://twitter.com/corverdev",
    avatar: geoorge,
  },

  {
    name: "Jules De Smit",
    title: "Senior Software Engineer",
    twitter: "https://twitter.com/julesdesmit",
    github: "https://github.com/julesdesmit",
    avatar: geoorge,
  },

  {
    name: "Chris Battenfield",
    title: "Product Lead",
    twitter: "https://twitter.com/Battenfield",
    github: "https://github.com/Battenfield",
    avatar: geoorge,
  },

  {
    name: "Dhruv Bodani",
    title: "Software Engineer",
    twitter: "https://twitter.com/dhruvbodani",
    github: "https://github.com/dB2510",
    avatar: geoorge,
  },

  {
    name: "Abhishek Kumar",
    title: "Software Engineer",
    twitter: "https://twitter.com/xenowits",
    github: "https://github.com/xenowits",
    avatar: geoorge,
  },
  {
    name: "Richard Patel",
    title: "Protocol Engineer",
    twitter: "https://twitter.com/terorie_dev",
    github: "https://github.com/terorie",
    avatar: geoorge,
  },
]

const TheTeam: FC = () => {
  return (
    <VStack id="team" padding={8}>
      <Text>the team</Text>
      <Box
        mx={8}
        bg="obol.gradientDarkOpaque"
        p="24px"
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
