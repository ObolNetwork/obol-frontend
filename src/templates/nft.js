import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { RugbyNftCard } from "../components/RugbyNftCard"
import { logger } from "../config/pino"
import { getTokenMetadata } from "../services/backend"
import SEO from "../components/seo"

// Error messages for the snackbar pop up if something goes wrong.
const ERROR_QUERYING_API = "Failed to retrieve NFT metadata."

export default function NFT({ data, location }) {
  // Query gatsby config to pull the backend URL to use for this page.
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          backendURL
          defaultContract
        }
      }
    }
  `)
  const backend = !!site.siteMetadata
    ? site.siteMetadata.backendURL
    : "http://localhost:3000"
  // Parse contract address and token ID from path
  // First, remove trailing slash if it exists
  let path = !!site.siteMetadata
    ? site.siteMetadata.defaultContract + "/1"
    : "0x0000000000000000000000000000000000000000/1"
  logger.debug(` path: ${path}`)
  if (
    !!location.pathname &&
    location.pathname.charAt(location.pathname.length - 1) === "/"
  ) {
    logger.debug(`Trailing slash in this path, stripping it.`)
    path = location.pathname.slice(0, -1)
  } else {
    path = location.pathname
  }
  logger.debug(` path: ${path}`)
  const params = path.split("/")
  logger.debug(params)
  const contractAddress = params[2]
  const tokenId = params[3]
  logger.info(`Contract Address: ${contractAddress}, Token ID: ${tokenId}`)

  // Struct for storing the JSON response from the metadata server.
  const [tokenMetadata, setTokenMetadata] = useState({})

  // Used to manage loading state of NTFCard
  const [isLoading, setIsLoading] = useState(true)
  // Boolean that decides whether the NFT Card should render in error state or not
  const [isError, setIsError] = useState(true)

  // Set error message for the snackbar, each time the message is updated an extar snackbar will be sent to the screen
  const [errorMessage, setErrorMessage] = useState("")
  console.log(data)
  // Effect runs on page render, calls the metadata server for data on this NFT and saves it to state.
  useEffect(() => {
    logger.info(
      `Querying metadata API for contract: ${contractAddress} and token: ${tokenId}`
    )
    getTokenMetadata(contractAddress, tokenId, backend)
      .then(response => {
        // Confirm we received a response and that it is not an error response
        if (!!response && !("error" in response)) {
          logger.info(
            `API has returned token metadata: ${JSON.stringify(response)}`
          )
          setTokenMetadata(response)
          setIsLoading(false)
          setIsError(false)
        } else {
          logger.warn(
            `GetTokenMetadata Service returned a falsy value rather than an object:`
          )
          logger.warn(response)
          setIsLoading(false)
          setIsError(true)
          setErrorMessage(ERROR_QUERYING_API)
        }
      })
      .catch(err => {
        logger.warn(`Exception thrown retrieving token metadata from server:`)
        logger.warn(err)
        setErrorMessage(ERROR_QUERYING_API)
        setIsLoading(false)
        setIsError(true)
      })
  }, [contractAddress, tokenId, backend])

  return (
    <Layout>
      <SEO title="Kyne Software NFT" />
      <Container maxWidth="sm" style={{paddingTop: '2rem'}}>
        <RugbyNftCard
          isLoading={isLoading}
          isError={isError}
          nftAddress={contractAddress}
          nftTokenId={tokenId}
          nftOwner={""}
          nftOwnersENS={""}
          metadata={tokenMetadata}
          errorMsg={errorMessage}
        ></RugbyNftCard>
      </Container>
    </Layout>
  )
}
