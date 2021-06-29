// @ts-nocheck
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const fetch = require(`node-fetch`)

// Helper function to timeout the fetch api if the backend is down such that the request hangs
function timeoutPromise(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject({
        json: async () => {
          return Promise.resolve([])
        },
      })
    }, ms)
    promise.then(
      res => {
        clearTimeout(timeoutId)
        resolve(res)
      },
      err => {
        clearTimeout(timeoutId)
        reject(err)
      }
    )
  })
}
// GraphQL auto infers schemas, but fails to realise NFT Metadata Attributes can have string and int values, this function fixes that
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type NFTNftsAttributes implements Node {
      trait_type: String,
      display_type: String,
      value: String
    }
  `
  createTypes(typeDefs)
}

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest,
// }) => {
//   // First enter a dummy node in case the below fails
//   createNode({
//     id: `nft-array`,
//     parent: null,
//     children: [],
//     internal: {
//       type: `NFT`,
//       contentDigest: createContentDigest("bad-data"),
//     },
//   })
// }


