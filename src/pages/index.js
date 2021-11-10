import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// @ts-ignore
export default function IndexPage({ data }) {
  const logoStyle=`
  text-white 
  font-rammetto
  sm:text-base
  text-sm
  `
  return (
    <Layout>
      <SEO title="Obol Network" />
      <h1 className={logoStyle}>hello world</h1>
    </Layout>
  )
}


