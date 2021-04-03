import React from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './SinglePost.css'

export const SingleEmploymentTemplate = ({
  title,
  startDate,
  endDate,
  company,
  companyUrl,
  position,
  html,
  nextEmploymentURL,
  prevEmploymentURL
}) => (
  <main>
    <article
      className="SinglePost section light"
      itemScope
      itemType="http://schema.org/Employment"
    >
      <div className="container skinny">
        <Link className="SinglePost--BackButton" to="/employment/">
          <ChevronLeft /> BACK
        </Link>
        <div className="SinglePost--Content relative">
          {title && (
            <h1 className="SinglePost--Title" itemProp="title">
              {title}
            </h1>
          )}
          <div className="SinglePost--Pagination">
            {prevEmploymentURL && (
              <Link
                className="SinglePost--Pagination--Link prev"
                to={prevEmploymentURL}
              >
                Nächte Anstellung
              </Link>
            )}
            {nextEmploymentURL && (
              <Link
                className="SinglePost--Pagination--Link next"
                to={nextEmploymentURL}
              >
                Vorherige Anstellung
              </Link>
            )}
          </div>

          <table>
            <tr>
              <th>
                Unternehmen:
              </th>
              <td>
                {company && (
                  <Link className="SinglePost--SubTitle" to={companyUrl} target="_blank" >
                    {company}
                  </Link>
                )}
              </td>
            </tr>
            <tr>
              <th>
                Periode:
              </th>
              <td>
                {startDate && (
                <time
                  itemProp="startDate"
                  date={startDate}
                >
                  {startDate}
                </time>
                )} - 
                {endDate ? (
                  <time
                    itemProp="endDate"
                    date={endDate}
                  >
                    {endDate}
                  </time>
                ) : "bis jetzt"}
              </td>
            </tr>
            <tr>
              <th>
                Position:
              </th>
              <td>
                {position}
              </td>
            </tr>
          </table>

          <div className="SingleEmployment--InnerContent">
            <Content source={html} />
          </div>


          <div className="SinglePost--Pagination">
            {prevEmploymentURL && (
              <Link
                className="SinglePost--Pagination--Link prev"
                to={prevEmploymentURL}
              >
                Nächte Anstellung
              </Link>
            )}
            {nextEmploymentURL && (
              <Link
                className="SinglePost--Pagination--Link next"
                to={nextEmploymentURL}
              >
                 Vorherige Anstellung
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  </main>
)

// Export Default SingleEmployment for front-end
const SingleEmployment = ({ data: { employment, allEmployments } }) => {
  const thisEdge = allEmployments.edges.find(edge => edge.node.id === employment.id)
  return (
    <Layout
      meta={employment.frontmatter.meta || false}
      title={employment.frontmatter.title || false}
    >
      <SingleEmploymentTemplate
        {...employment}
        {...employment.frontmatter}
        {...employment.html}
        nextEmploymentURL={_get(thisEdge, 'next.fields.slug')}
        prevEmploymentURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SingleEmployment

export const pageQuery = graphql`
  ## Query for SingleEmployment data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleEmployment($id: String!) {
    employment: markdownRemark(id: { eq: $id }) {
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
        position
        excerpt
        button {
          text
          ref
        }
      }
    }

    allEmployments: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "employment" } } }
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
