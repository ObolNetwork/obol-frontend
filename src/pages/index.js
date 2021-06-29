import React from "react"
import Container from "@material-ui/core/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Grid } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { EmailSubmission } from "../components/EmailSubmission"

// Page styles
const useStyles = makeStyles((theme) =>
  createStyles({
    arrowIcon: {
      paddingTop: '0.4rem',
      margin: 'auto 0'
    },
    textContainer: {
      margin: "0 auto",
      padding: "1rem",
      //backgroundColor: 'white'
      // using the padding for now to put the text near the middle
      // backgroundColor: '#aaffff'
    },
    maxWidthOpenSeaContainer: {
      alignItems: "center",
      background: "#2E2E2E",
      "border-bottom": "none",
      margin: "0 auto",
      marginBottom: "0",
      paddingBottom: "0",
      padding: "2%",
      width: "100%",
      "max-width": "100%",
    },
    openSeaImage: {
      display: "block",
      margin: "1rem auto 0 auto",
      paddingBottom: "1rem",
      width: "50%",
      objectFit: "contain",
    },
    maxWidthScrollingContainer: {
      //backgroundColor: "white",
      paddingTop: "1rem",
      paddingBottom: "0rem",
      margin: 0,
      "max-width": "100%",
      width: "100%",
      "overflow-x": "scroll",
    },
    maxWidthSubmitEmailContainer: {
      alignItems: "center",
      background: "white",
      "border-bottom": "none",
      margin: "0 auto",
      marginBottom: "0",
      paddingBottom: "0",
      padding: "2%",
      width: "100%",
      "max-width": "100%",
    },
    gridContainer: {
      width: "max-content",
      margin: "0 auto",
    },
    nftLink: {
      textDecoration: "none",
    },
    blackTitleText: {
      color: "black",
      textAlign: "center",
      font: "normal normal normal 36px/44px Montserrat",
      letterSpacing: "0px",
    },
    blackSubHeadingText: {
      color: "black",
      textAlign: "left",
      font: "normal normal 300 18px/24px Montserrat",
      letterSpacing: "0px",
      [theme.breakpoints.up('md')]: {
        font: "normal normal 300 24px/28px Montserrat",
      },
    },
    blackLinkText: {
      color: "black",
      textAlign: "center",
      font: "normal normal medium 18px/24px Montserrat",
      letterSpacing: "0px",
      textDecorationColor: "black"
    },
  }))

export default function IndexPage({ data }) {
  const classes = useStyles()
  console.log(data)

  return (
    <Layout>
      <SEO title="Obol Network" />
    </Layout>
  )
}


