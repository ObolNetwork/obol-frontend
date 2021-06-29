module.exports = "test-file-stub"
export const GetTokenMetadataSuccess = {
  description: "A unique NFT art piece",
  external_url: "https://nft.kyne.eu/0x1/",
  image: "https://nft.kyne.eu/0x1/image.jpg",
  name: "Cormie Coin",
  title: "Cormie Coin",
  address: "0x0000000000000000000000000000000000000001",
  tokenId: "1",
}

export const GetTokenMetadataNotFound = {
  statusCode: 404,
  message: "Token metadata not found",
  error: "Not Found",
}

export const GetTokenMetadataBadRequest = {
  statusCode: 400,
  message: "Not a valid Token ID",
  error: "Bad Request",
}

export const GetTokenMetadataBadContractAddress = {
  statusCode: 400,
  message: "Not a valid Contract Address",
  error: "Bad Request",
}

export const CreateTokenMetadataSuccess = {
  address: "0x0000000000000000000000000000000000000001",
  description: "A unique NFT art piece",
  external_url: "https://nft.kyne.eu/0x1/",
  image: "https://nft.kyne.eu/0x1/image.jpg",
  name: "Cormie Coin",
  title: "Cormie Coin",
  tokenId: "1",
}

export const CreateTokenMetadataDuplicate = {
  statusCode: 422,
  message: "Cannot create a duplicate metadata entry",
}
