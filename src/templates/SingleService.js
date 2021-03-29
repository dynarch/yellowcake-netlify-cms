import React from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './SinglePost.css'

export const SingleServiceTemplate = ({
  title,
  body,
  nextServiceURL,
  prevServiceURL
}) => (
  <main>
    <article
      className="SinglePost section light"
      itemScope
      itemType="http://schema.org/BlogServicing"
    >
      <div className="container skinny">
        <Link className="SinglePost--BackButton" to="/service/">
          <ChevronLeft /> BACK
        </Link>
        <div className="SinglePost--Content relative">
          {title && (
            <h1 className="SinglePost--Title" itemProp="title">
              {title}
            </h1>
          )}
          <div className="SinglePost--Pagination">
            {prevServiceURL && (
              <Link
                className="SinglePost--Pagination--Link prev"
                to={prevServiceURL}
              >
                Vorherige Leistung
              </Link>
            )}
            {nextServiceURL && (
              <Link
                className="SinglePost--Pagination--Link next"
                to={nextServiceURL}
              >
                Nächte Leistung
              </Link>
            )}
          </div>

          <div className="SingleService--InnerContent">
            <Content source={body} />
          </div>

          <div className="SinglePost--Pagination">
            {prevServiceURL && (
              <Link
                className="SinglePost--Pagination--Link prev"
                to={prevServiceURL}
              >
                Vorherige Leistung
              </Link>
            )}
            {nextServiceURL && (
              <Link
                className="SinglePost--Pagination--Link next"
                to={nextServiceURL}
              >
                Nächte Leistung
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  </main>
)

// Export Default SingleService for front-end
const SingleService = ({ data: { service, allServices } }) => {
  const thisEdge = allServices.edges.find(edge => edge.node.id === service.id)
  return (
    <Layout
      meta={service.frontmatter.meta || false}
      title={service.frontmatter.title || false}
    >
      <SingleServiceTemplate
        {...service}
        {...service.frontmatter}
        body={service.html}
        nextServiceURL={_get(thisEdge, 'next.fields.slug')}
        prevServiceURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SingleService

export const pageQuery = graphql`
  ## Query for SingleService data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleService($id: String!) {
    service: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        title
        template
        status
        startDate(formatString: "MMMM Do, YYYY")
        endDate(formatString: "MMMM Do, YYYY")
        featuredImage
        company
        companyUrl
        tools {
          name
          description
        }
        excerpt
      }
    }

    allServices: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "services" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
