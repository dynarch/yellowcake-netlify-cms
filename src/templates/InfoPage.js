import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

// Export Template for use in CMS preview
export const InfoPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  button,
  body
}) => (
  <main className="InfoPage">
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
    { button && (button.map((item, index) => (
                  <div key={item.text + index} className="ServiceCard--Footer">
                    <Link to={item.ref} className="Button">{item.text}</Link>
                  </div>
                  ))
                  )
                }
  </main>
)

const InfoPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <InfoPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default InfoPage

export const pageQuery = graphql`
  query InfoPage($id: String!) {
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
