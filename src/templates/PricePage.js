import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const PricePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  priceList,
  body
}) => (
  <main className="Price">
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
        {priceList &&
          priceList.map((price, index) => (
            <div key={price.title + index}  className="PriceList">
              <h3>{price.title}</h3>
              <Content source={price.description} />
            </div>
          ))}
      </div>
    </section>
  </main>
)

// Export Default PricePage for front-end
const PricePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <PricePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default PricePage

export const pageQuery = graphql`
  ## Query for PricePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query PricePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        priceList {
          title
          description
        }
      }
    }
  }
`
