// Service file to communicate with the Kyne Software Backend
import { logger } from '../config/pino';

// Set backend URL or default
const BACKEND_URL = !!process.env.BACKEND_URL ? process.env.BACKEND_URL : "http://localhost:3000"


export async function getTokenMetadata(contractAddress: string, tokenId: string, base_uri: string = BACKEND_URL): Promise<Object> {
    logger.info(`Getting Token Metadata from: ${base_uri} for contract ${contractAddress} and token ID: ${tokenId}`)
    return fetch(`${base_uri}/s/${contractAddress}/${tokenId}`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        logger.info(`Received the following from the Token Metadata API Endpoint: ${JSON.stringify(resultData)}`)
        return resultData
      }) 
}
