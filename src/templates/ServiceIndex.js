import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'

import '../components/CardsSection.css'

export const ServiceIndexTemplate = ({ title, subtitle, featuredImage, services, body }) => 
{
  return (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="CardsSection">
          <div className="CardsSection--Grid">
            {services.map((item, index) => (
                <ServiceCard key={item.title + index} {...item} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

// Export Default ServiceIndex for front-end
const ServiceIndex = ({ data: { page, services } }) => (
  <Layout
  children="Some children"
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ServiceIndexTemplate 
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

export default ServiceIndex

export const pageQuery = graphql`
  ## Query for ServiceIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ServiceIndex($id: String!) {
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
