import {
  CreateTokenMetadataSuccess,
  CreateTokenMetadataDuplicate,
  GetTokenMetadataNotFound,
  GetTokenMetadataSuccess,
  GetTokenMetadataBadRequest,
  GetTokenMetadataBadContractAddress,
} from "../mocks/TokenMetadataMocks"
import { getTokenMetadata } from "../services/backend"
const jest = require("jest")

const existingAddress = "0x0000000000000000000000000000000000000001"
const existingTokenId = "1"
const invalidAddress = "0xg"
const invalidTokenId = "g"

// Mock the fetch API and pass in statics instead
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(CreateTokenMetadataSuccess),
  })
)

beforeEach(() => {
  fetch.mockClear()
})

describe("Backend Service", () => {
  it("getTokenMetadata returns successfully with a valid request", async () => {
    const response = await getTokenMetadata(existingAddress, existingTokenId)

    expect(response).toEqual(GetTokenMetadataSuccess)
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it("getTokenMetadata returns 400 with an invalid token ID", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(GetTokenMetadataBadRequest),
      })
    )
    const response = await getTokenMetadata(existingAddress, invalidTokenId)

    expect(response).toEqual(GetTokenMetadataBadRequest)
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it("getTokenMetadata returns 400 with an invalid contract address", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(GetTokenMetadataBadContractAddress),
      })
    )
    const response = await getTokenMetadata(invalidAddress, existingTokenId)
    console.log(response)
    console.log(GetTokenMetadataBadContractAddress)
    expect(response).toEqual(GetTokenMetadataBadContractAddress)
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})
