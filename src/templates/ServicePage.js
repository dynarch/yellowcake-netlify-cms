import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content'
// import InfoCard from '../components/InfoCard'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import InfoCardPopup from '../components/InfoCardPopup'

import '../components/InfoSection.css'

export const ServicePageTemplate = ({ title, subtitle, featuredImage, products, body }) => 
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
        <div className="InfoSection">
          <div className="InfoSection--Grid">
            {products.map((item, index) => (
                <InfoCardPopup key={item.title + index} {...item} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

// Export Default ServicePage for front-end
const ServicePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <ServicePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ServicePage

export const pageQuery = graphql`
  ## Query for ServicePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ServicePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        products {
          title
          featuredImage
          excerpt
          description
          button {
            ref
            text
          }
        }
      }
    }
  }
`
