import React, { FC } from "react"
import { Container, Box, Image, SimpleGrid, VStack } from "@chakra-ui/react"
import etherealVentures from "../../../images/sponsors/ethereal-ventures.png"
import advancedBlockchain from "../../../images/sponsors/advanced-blockchain.png"
import archetype from "../../../images/sponsors/archetype.png"
import blockdaemon from "../../../images/sponsors/blockdaemon.png"
import chorus from "../../../images/sponsors/chorus.png"
import coinbaseVentures from "../../../images/sponsors/coinbase-ventures.png"
import divergence from "../../../images/sponsors/divergence.png"
import figment from "../../../images/sponsors/figment.png"
import iosg from "../../../images/sponsors/iosg.png"
import lao from "../../../images/sponsors/lao.png"
import stakingFacilities from "../../../images/sponsors/staking-facilities.png"
import yieldVentures from "../../../images/sponsors/yield-ventures.png"
import stakeFish from "../../../images/sponsors/stakefish.png"
import delphi from "../../../images/sponsors/delphi.png"
import everstake from "../../../images/sponsors/everstake.png"
import defiAlliance from "../../../images/sponsors/defi-alliance.png"

import { Header2, Header4 } from "../../../components.v2/Typography"

const sponsorLogos = [
  {
    text: "Ethereal Ventures",
    logo: etherealVentures,
    href: "http://www.etherealventures.com/",
  },
  {
    text: "Archetype Capital",
    logo: archetype,
    href: "https://archetypecp.com/",
  },
  {
    text: "Coinbase Ventures",
    logo: coinbaseVentures,
    href: "https://www.coinbase.com/ventures",
  },
  { text: "Blockdaemon", logo: blockdaemon, href: "https://blockdaemon.com/" },
  { text: "Figment", logo: figment, href: "https://www.figment.io" },
  {
    text: "Staking Facilities",
    logo: stakingFacilities,
    href: "https://stakingfacilities.com/",
  },
  { text: "Stakefish", logo: stakeFish, href: "https://stake.fish/" },
  { text: "Chorus One", logo: chorus, href: "https://chorus.one/" },
  { text: "The LAO", logo: lao, href: "https://www.thelao.io/" },
  {
    text: "Yield Ventures",
    logo: yieldVentures,
    href: "https://www.yieldventures.io/",
  },
  {
    text: "Divergence Ventures",
    logo: divergence,
    href: "https://www.div.vc/",
  },
  { text: "IOSG", logo: iosg, href: "https://iosg.vc/" },
  { text: "Delphi Digital", logo: delphi, href: "https://delphidigital.io/" },
  { text: "Everstake", logo: everstake, href: "https://everstake.one/" },
  {
    text: "Advanced Blockchain",
    logo: advancedBlockchain,
    href: "https://www.advancedblockchain.com/",
  },
  {
    text: "Defi Alliance",
    logo: defiAlliance,
    href: "https://www.defialliance.co/",
  },
]

const SupportedBy: FC = () => {
  return (
    <Box id="supporters">
      <Container maxW="6xl">
        <Header2 textAlign="center" my="64px">
          Supported By
        </Header2>
        <SimpleGrid minChildWidth="250px" spacing="20px" margin="auto">
          {sponsorLogos.map(({ text, logo, href }) => (
            <VStack
              key={text}
              justifyContent="flex-end"
              bg="obol.gradientDarkOpaque"
              _hover={{
                bg: "obol.gradientDark",
              }}
              transition="opacity 2.5s"
              borderRadius="md"
              pb="12px"
              cursor="pointer"
              as="a"
              href={href}
              target="_blank"
            >
              <Box
                w="250px"
                h="150px"
                textAlign="center"
                display="table-cell"
                verticalAlign="middle"
                position="relative"
              >
                <Image
                  src={logo}
                  maxHeight="80%"
                  maxWidth="80%"
                  width="auto"
                  position="absolute"
                  top={0}
                  bottom={0}
                  left={0}
                  right={0}
                  margin="auto"
                />
              </Box>
              <Header4>{text}</Header4>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default SupportedBy
