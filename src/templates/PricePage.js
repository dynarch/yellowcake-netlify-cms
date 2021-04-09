import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

import PriceCard from '../components/PriceCard'
import "../components/PostSection.css"

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
      svg={true}
    />

    <section className="section">
      <div className="container">
        <div className="PostSection">
          <div className="PostSection--Grid">
            {priceList &&
              priceList.map((price, index) => (
                <PriceCard key={price.title + index} {...price}  />
              ))}
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container" backgroundImage="url(/images/header_blog.png)">
        <Content source={body} />
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
