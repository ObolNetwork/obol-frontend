import React, { FC } from "react"
import { Container, Box, Image, SimpleGrid, VStack } from "@chakra-ui/react"
import advancedBlockchain from "../../../images/sponsors/advanced-blockchain.png"
import archetype from "../../../images/sponsors/archetype.png"
import attestant from "../../../images/sponsors/attestant.png"
import blockdaemon from "../../../images/sponsors/blockdaemon.png"
import chorus from "../../../images/sponsors/chorus.png"
import coinbaseVentures from "../../../images/sponsors/coinbase-ventures.png"
import divergence from "../../../images/sponsors/divergence.png"
import figment from "../../../images/sponsors/figment.png"
import iosg from "../../../images/sponsors/iosg.png"
import lao from "../../../images/sponsors/lao.png"
import stableNode from "../../../images/sponsors/stable-node.png"
import stakingFacilities from "../../../images/sponsors/staking-facilities.png"
import yeildVentures from "../../../images/sponsors/yeild-ventures.png"
import { Header2, Header4 } from "../../../components.v2/Typography"

const sponsorLogos = [
  { text: "Advanced Blockchain", logo: advancedBlockchain },
  { text: "Archetype", logo: archetype },
  { text: "Attestant", logo: attestant },
  { text: "Blockdaemon", logo: blockdaemon },
  { text: "Chorus", logo: chorus },
  { text: "Coinbase Ventures", logo: coinbaseVentures },
  { text: "Divergence", logo: divergence },
  { text: "Digment", logo: figment },
  { text: "IOSG", logo: iosg },
  { text: "The LAO", logo: lao },
  { text: "Stable Node", logo: stableNode },
  { text: "Staking Facilities", logo: stakingFacilities },
  { text: "Yeild Ventures", logo: yeildVentures },
]

const SupportedBy: FC = () => {
  return (
    <Box id="supporters">
      <Container maxW="6xl">
        <Header2 textAlign="center" my="64px">
          Supported By
        </Header2>
        <SimpleGrid minChildWidth="220px" spacing="20px" margin="auto">
          {sponsorLogos.map(({ text, logo }) => (
            <VStack
              justifyContent="flex-end"
              bg="obol.gradientDarkOpaque"
              _hover={{
                bg: "obol.gradientDark",
              }}
              transition="opacity 2.5s"
              borderRadius="md"
              pb="12px"
              cursor="pointer"
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
