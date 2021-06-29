![Kyne Software Logo](./static/obolnetwork.png)

<h1 align="center">Obol Network</h1>

This repo intends to serve as an informational website about the Obol Network.

## Quickstart

This repo uses Gatsby.js as a build tool that makes server side rendering-capable static webpages, that can then instantiate themselves as React Webpages when loaded on the client side. Allowing for faster loading of web pages. To get started:

```bash
# Local development
npm run develop

# Tests
npm run test
npm run test -- --watch # Re runs tests when a file changes
npm run test -- -u # Updates snapshots for tests when an intentional change is made.
```

## Feature Wishlist

- [ ] Makes better use of static site generation features of Gatsby
  - [ ] Uses graphql build to query a configured ERC721 token, uses this result to statically generate most of the NFTs, only generating on the fly when it's a token minted post build.
  - [ ] Generate a custom OG metadata image for a given NFT.
- [ ] Enableable/Disableable links to Auction Sites to bid/offer on NFTs.
- [ ] Mobile responsive-ness
- [ ] Placeholder images for cards
- [x] A home page
- [ ] A customised 404

## CI/CD

- [ ] Unit tests of merit
- [ ] Integration/E2E tests of functionality
- [x] Github workflow to test and push to dev env on commit to master

## Lessons Learned

- Static Site Generators like Gatsby can benefit from a smart build pipeline to allow for a decently fresh website served statically and fast.
