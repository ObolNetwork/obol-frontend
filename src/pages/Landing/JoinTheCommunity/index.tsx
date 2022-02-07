import React, { FC } from "react"
import { HStack, Button } from "@chakra-ui/react"
import { Href } from "../../../types"

const JoinTheCommunity: FC = () => {
  return (
    <HStack justifyContent="center" py="96px">
      <Button as="a" target="_blank" href={Href.ProtoForm}>
        Join the Proto Community
      </Button>
    </HStack>
  )
}

export default JoinTheCommunity
