import React from 'react'
import { graphql } from 'gatsby'

// import Content from '../components/Content'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import CertificateCard from '../components/CertificateCard'
import CertificateCategoriesNav from '../components/CertificateCategoriesNav'

import '../components/CardsSection.css'

export const byCategory = (certificates, title, contentType) => {
  const isCategory = contentType === 'certificateCategories'
  const byCategory = certificates =>
    certificates.categories &&
    certificates.categories.filter(cat => cat.category === title).length
  return isCategory ? certificates.filter(byCategory) : certificates
}

export const CertificatesPageTemplate = ({ 
  title, 
  subtitle, 
  featuredImage, 
  certificates, 
  certificateCategories,
  body,
  contentType
}) => {
  let filteredCertificates =
  certificates && !!certificates.length
      ? byCategory(certificates, title, contentType)
      : []
  return (
    <main>
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      {!!certificateCategories.length && (
        <section className="section thin">
          <div className="container">
            <CertificateCategoriesNav categories={certificateCategories} />
          </div>
        </section>
      )}

      {/* <section className="section">
        <div className="container">
          <Content source={body} />
        </div>
      </section> */}
      <section className="section">
        <div className="container">
            {filteredCertificates.map((item, index) => (
                <CertificateCard key={item.title + index} {...item} />
              ))
            }
        </div>
      </section>
    </main>
  )
}

// Export Default CertificatePage for front-end
const CertificatesPage = ({ data: { page, certificates, certificateCategories } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <CertificatesPageTemplate 
      {...page} 
      {...page.fields}
      {...page.frontmatter} 
      body={page.html}
      certificates={certificates.edges.map(certificate => ({
        ...certificate.node,
        ...certificate.node.frontmatter,
        ...certificate.node.fields
      }))}
      certificateCategories={certificateCategories.edges.map(post => ({
          ...post.node,
          ...post.node.frontmatter,
          ...post.node.fields
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
      sort: { order: DESC, fields: [frontmatter___issueDate] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            issueDate(formatString: "MMMM Do, YYYY")
            role
            area
            categories {
              category
            }
          }
          html
        }
      }
    }
    certificateCategories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "certificateCategories" } } }
      sort: { order: ASC, fields: [frontmatter___sortIndex] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
          }
        }
      }
    }
  }
`
