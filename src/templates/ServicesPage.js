import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ServicesOne from '../components/Services/ServicesOne'
import StartProject from '../components/Common/StartProject'

export const ServicesPageTemplate = ({ data: { page, services } }) => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle={page.title} 
                homePageText={page.subtitle}
                homePageUrl="/" 
                activePageText="Services" 
            />
            <ServicesOne />
            <StartProject />
            <Footer />
        </Layout>
    );
}

// Export Default ServicesPage for front-end
const ServicesPage = ({ data: { page, services } }) => (
    <Layout
    children="Some children"
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
    >
      <ServicesPageTemplate 
        {...page} 
        {...page.frontmatter} 
        body={page.html}
        services={services.edges.map(services => ({
          ...services.node,
          ...services.node.frontmatter,
          ...services.node.fields
        }))}
         />
    </Layout>
  )

  export default ServicesPage
  
  export const pageQuery = graphql`
    ## Query for ServicesPage data
    ## Use GraphiQL interface (http://localhost:8000/___graphql)
    ## $id is processed via gatsby-node.js
    ## query name must be unique to this file
    query ServicesPage($id: String!) {
      page: markdownRemark(id: { eq: $id }) {
        ...Meta
        html
        fields {
          contentType
        }
        frontmatter {
          title
          excerpt
          template
          subtitle
          featuredImage
        }
      }
      
      services: allMarkdownRemark(
        filter: { fields: { contentType: { eq: "services" } } }
        sort: { order: ASC, fields: [frontmatter___sortIndex] }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              featuredImage
              excerpt
              button {
                text
                ref
              }
            }
            html
          }
        }
      }
    }
  `
  