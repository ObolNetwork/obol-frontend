import React from "react"
import renderer from "react-test-renderer"

import { NftCard } from "../components/NftCard"

describe("NftCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <NftCard
          nameOwner=""
          nftOwner=""
          nftAddress=""
          nftTokenId=""
          nftOwnersENS=""
          nameOwnersENS=""
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
