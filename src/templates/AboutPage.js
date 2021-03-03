import React, {Fragment} from 'react'
import { graphql } from 'gatsby'

// import classNames from "classnames";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "../components/CustomButtons/Button.js";
import Content from '../components/Content'
import Layout from '../components/Layout'
// import Footer from "../components/Footer/Footer.js";
// import Header from '../components/Header/Header'
// import HeaderLinks from '../components/Header/HeaderLinks'
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
// import GridContainer from "../components/Grid/GridContainer.js";
// import GridItem from "../components/Grid/GridItem.js";
import InfoArea from "../components/InfoArea/InfoArea.js";
// import Parallax from "../components/Parallax/Parallax.js";
import PageHeader from '../components/PageHeader'
// import Image from '../components/Image'
// import styles from '../assets/jss/material-kit-react/views/landingPage';
import '../components/Gallery.css'
// const useStyles = makeStyles(styles);

// Export Template for use in CMS preview
export const AboutPageTemplate = ({ title, subtitle, featuredImage, body }) => 
{
  // const classes = useStyles();

  return (
  <main>
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

  <section className="section">
  <div className="container">
    <Fragment>
    <div className="Gallery">
      <div className="Gallery--Item">
        <InfoArea
          title="Free Chat"
          description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
          icon={Chat}
          iconColor="info"
          vertical
          />
      </div>
      <div className="Gallery--Item">
        <InfoArea
          title="Verified Users"
          description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
          icon={VerifiedUser}
          iconColor="success"
          vertical
        />
      </div>
      <div className="Gallery--Item">
          <InfoArea
            title="Fingerprint"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            icon={Fingerprint}
            iconColor="danger"
            vertical
          />
        </div>
      </div>
      </Fragment>
    </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
  )
}

// Export Default AboutPage for front-end
const AboutPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  ## Query for AboutPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
