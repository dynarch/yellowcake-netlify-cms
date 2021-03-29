import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import EmploymentCard from '../components/EmploymentCard'

import '../components/PostSection.css'

export const EmploymentIndexTemplate = ({ title, subtitle, featuredImage, employments, body }) => 
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
        <div className='EmploymentSection--Grid'>
          {employments.map((item, index) => (
              <EmploymentCard key={item.title + index} {...item} />
            ))
          }
        </div>
      </div>
    </section>
  </main>
  )
}

// Export Default EmploymentIndex for front-end
const EmploymentIndex = ({ data: { page, employments } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <EmploymentIndexTemplate 
      {...page} 
      {...page.frontmatter} 
      body={page.html}
      employments={employments.edges.map(employments => ({
        ...employments.node,
        ...employments.node.frontmatter,
        ...employments.node.html,
        ...employments.node.fields
      }))}
       />
  </Layout>
)

export default EmploymentIndex

export const pageQuery = graphql`
  ## Query for EmploymentIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query EmploymentIndex($id: String!) {
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
    
    employments: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "employments" } } }
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
          }
          html
        }
      }
    }
  }
`
