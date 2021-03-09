import React from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './SinglePost.css'

export const SingleProjectTemplate = ({
  title,
  startDate,
  endDate,
  company,
  companyUrl,
  usedTools,
  usedLanguages,
  usedLibraries,
  tools,
  body,
  nextProjectURL,
  prevProjectURL
}) => (
  <main>
    <article
      className="SinglePost section light"
      itemScope
      itemType="http://schema.org/BlogProjecting"
    >
      <div className="container skinny">
        <Link className="SinglePost--BackButton" to="/project/">
          <ChevronLeft /> BACK
        </Link>
        <div className="SinglePost--Content relative">
          {title && (
            <h1 className="SinglePost--Title" itemProp="title">
              {title}
            </h1>
          )}
          <div className="SinglePost--Pagination">
            {prevProjectURL && (
              <Link
                className="SinglePost--Pagination--Link prev"
                to={prevProjectURL}
              >
                Vorheriges Projekt
              </Link>
            )}
            {nextProjectURL && (
              <Link
                className="SinglePost--Pagination--Link next"
                to={nextProjectURL}
              >
                Nächtes Projekt
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
            {tools && (tools.map((tool, index) => (
              <tr key={tool.name+index}>
              <th>
                {tool.name}
              </th>
              <td>
                {tool.description}
              </td>
            </tr>))
            )}
          </table>

          <div className="SingleProject--InnerContent">
            <Content source={body} />
          </div>

          <div className="SinglePost--Pagination">
            {prevProjectURL && (
              <Link
                className="SinglePost--Pagination--Link prev"
                to={prevProjectURL}
              >
                Vorheriges Projekt
              </Link>
            )}
            {nextProjectURL && (
              <Link
                className="SinglePost--Pagination--Link next"
                to={nextProjectURL}
              >
                Nächtes Projekt
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  </main>
)

// Export Default SingleProject for front-end
const SingleProject = ({ data: { project, allProjects } }) => {
  const thisEdge = allProjects.edges.find(edge => edge.node.id === project.id)
  return (
    <Layout
      meta={project.frontmatter.meta || false}
      title={project.frontmatter.title || false}
    >
      <SingleProjectTemplate
        {...project}
        {...project.frontmatter}
        body={project.html}
        nextProjectURL={_get(thisEdge, 'next.fields.slug')}
        prevProjectURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SingleProject

export const pageQuery = graphql`
  ## Query for SingleProject data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleProject($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
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
        usedTools
        usedLanguages
        usedLibraries
        tools {
          name
          description
        }
        excerpt
      }
    }

    allProjects: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "projects" } } }
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
