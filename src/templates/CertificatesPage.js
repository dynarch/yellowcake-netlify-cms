import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import CertificateCard from '../components/CertificateCard'

import '../components/PostSection.css'

export const CertificatesPageTemplate = ({ title, subtitle, featuredImage, certificates, body }) => 
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
          {certificates.map((item, index) => (
              <CertificateCard key={item.title + index} {...item} />
            ))
          }
      </div>
    </section>
  </main>
  )
}

// Export Default CertificatePage for front-end
const CertificatesPage = ({ data: { page, certificates } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <CertificatesPageTemplate 
      {...page} 
      {...page.frontmatter} 
      body={page.html}
      certificates={certificates.edges.map(certificates => ({
        ...certificates.node,
        ...certificates.node.frontmatter,
        ...certificates.node.html,
        ...certificates.node.fields
      }))}
       />
  </Layout>
)

export default CertificatesPage

export const pageQuery = graphql`
  ## Query for CertificatesPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query CertificatesPage($id: String!) {
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
    
    certificates: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "certificates" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            issueDate(formatString: "MMMM Do, YYYY")
          }
          html
        }
      }
    }
  }
`
