import React from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './SingleProject.css'

export const SingleProjectTemplate = ({
  title,
  startDate,
  endDate,
  company,
  usedTools,
  usedLanguages,
  body,
  nextProjectURL,
  prevProjectURL
}) => (
  <main>
    <article
      className="SingleProject section light"
      itemScope
      itemType="http://schema.org/BlogProjecting"
    >
      <div className="container skinny">
        <Link className="SingleProject--BackButton" to="/project/">
          <ChevronLeft /> BACK
        </Link>
        <div className="SingleProject--Content relative">
          <div className="SingleProject--Meta">
            {startDate && (
              <time
                className="SingleProject--Meta--Date"
                itemProp="startDate"
                date={startDate}
              >
                {startDate}
              </time>
            )}
          </div>
          <div className="SingleProject--Meta">
            {endDate && (
              <time
                className="SingleProject--Meta--Date"
                itemProp="endDate"
                date={endDate}
              >
                {endDate}
              </time>
            )}
          </div>

          {title && (
            <h1 className="SingleProject--Title" itemProp="title">
              {title}
            </h1>
          )}

          {company && (
            <h1 className="SingleProject--Title" itemProp="company">
              {company}
            </h1>
          )}

          {usedTools && (
            <h1 className="SingleProject--Title" itemProp="usedTools">
              {usedTools}
            </h1>
          )}

          {usedLanguages && (
            <h1 className="SingleProject--Title" itemProp="usedLanguages">
              {usedLanguages}
            </h1>
          )}

          <div className="SingleProject--InnerContent">
            <Content source={body} />
          </div>

          <div className="SingleProject--Pagination">
            {prevProjectURL && (
              <Link
                className="SingleProject--Pagination--Link prev"
                to={prevProjectURL}
              >
                Previous Project
              </Link>
            )}
            {nextProjectURL && (
              <Link
                className="SingleProject--Pagination--Link next"
                to={nextProjectURL}
              >
                Next Project
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
        usedTools
        usedlanguages
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
