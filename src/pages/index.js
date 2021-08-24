import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Blog to share my music</p>
      <StaticImage
        alt="Angelo DelSenno in Michael Cozzy's recording studio, Seattle WA"
        src="../images/angelo.jpeg"
      />
    </Layout>
  )
}

export default IndexPage