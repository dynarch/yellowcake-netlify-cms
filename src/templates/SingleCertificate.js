import React from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './SinglePost.css'

export const SingleCertificateTemplate = ({
  title,
  issueDate,
  html,
  nextCertificateURL,
  prevCertificateURL
}) => (
  <main>
    <article
      className="SinglePost section light"
      itemScope
      itemType="http://schema.org/Certificate"
    >
      <div className="container skinny">
        <Link className="SinglePost--BackButton" to="/certificates/">
          <ChevronLeft /> BACK
        </Link>
        <div className="SinglePost--Content relative">
          {title && (
            <h1 className="SinglePost--Title" itemProp="title">
              {title}
            </h1>
          )}
          <div className="SinglePost--Pagination">
            {prevCertificateURL && (
              <Link
                className="SinglePost--Pagination--Link prev"
                to={prevCertificateURL}
              >
                &lt;&lt;
              </Link>
            )}
            {nextCertificateURL && (
              <Link
                className="SinglePost--Pagination--Link next"
                to={nextCertificateURL}
              >
                 &gt;&gt;
              </Link>
            )}
          </div>

          <table>
            <tr>
              <th>
                Austellungsdatum:
              </th>
              <td>
                {issueDate && (
                <time
                  itemProp="issueDate"
                  date={issueDate}
                >
                  {issueDate}
                </time>
                )}
              </td>
            </tr>
          </table>

          <div className="SingleCertificate--InnerContent">
            <Content source={html} />
          </div>


          <div className="SinglePost--Pagination">
            {prevCertificateURL && (
              <Link
                className="SinglePost--Pagination--Link prev"
                to={prevCertificateURL}
              >
                &lt;&lt;
              </Link>
            )}
            {nextCertificateURL && (
              <Link
                className="SinglePost--Pagination--Link next"
                to={nextCertificateURL}
              >
                 &gt;&gt;
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  </main>
)

// Export Default SingleCertificate for front-end
const SingleCertificate = ({ data: { certificate, allCertificates } }) => {
  const thisEdge = allCertificates.edges.find(edge => edge.node.id === certificate.id)
  return (
    <Layout
      meta={certificate.frontmatter.meta || false}
      title={certificate.frontmatter.title || false}
    >
      <SingleCertificateTemplate
        {...certificate}
        {...certificate.frontmatter}
        {...certificate.html}
        nextCertificateURL={_get(thisEdge, 'next.fields.slug')}
        prevCertificateURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SingleCertificate

export const pageQuery = graphql`
  ## Query for SingleCertificate data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleCertificate($id: String!) {
    certificate: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        title
        template
        issueDate(formatString: "MMMM Do, YYYY")
      }
    }

    allCertificates: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "certificates" } } }
      sort: { order: DESC, fields: [frontmatter___issueDate] }
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
