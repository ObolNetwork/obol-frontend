![Obol Logo](./static/obolnetwork.png)

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


## Lessons Learned

- Static Site Generators like Gatsby can benefit from a smart build pipeline to allow for a decently fresh website served statically and fast.
