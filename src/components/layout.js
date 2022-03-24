/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@material-ui/core"
import { SnackbarProvider } from "notistack"
import "typeface-montserrat"
import Footer from "./footer"

// Website theme
const theme = createTheme({
  palette: {
    primary: {
      light: `#61ac9f`,
      main: `#37606b`,
      dark: `#19314b`
    },
    secondary: {
      main: `#81bba3`,
    },
    info: {
      main: `#616161`,
    },
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteDescription={data.site.siteMetadata.description}
            // style={{ "margin-bottom": 0 }}
          />
          <div
            style={{
              // margin: `0 auto`,
              // maxWidth: 960,
              // padding: `0 1.0875rem 1.45rem`,
              width: "100%",
              // tried out a background image which looks alright, food for future thought
              // imported at top of page
              // backgroundImage: `url(${background_image})`,
              // backgroundRepeat: 'no-repeat',
              // backgroundSize: 'cover',
            }}
          >
            <main>{children}</main>
            <footer>
              <Footer></Footer>
            </footer>
          </div>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
