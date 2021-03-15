import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'

import BlogSearch from '../components/BlogSearch'
import PageHeader from '../components/PageHeader'
import ProjectSection from '../components/ProjectSection'
import Layout from '../components/Layout'

// import { makeStyles } from "@material-ui/core/styles";
// import styles from '../assets/jss/material-kit-react/views/components.js';

// const useStyles = makeStyles(styles);

/**
 * Filter projects by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {projects} object
 */
export const byDate = projects => {
  const now = Date.now()
  return projects.filter(projects => Date.parse(projects.edges.node.frontMatter.startDate) <= now)
}

/**
 * @param {projects} object
 * @param {title} string
 * @param {contentType} string
 */

// const filterBy = ({filterObject, filterColumn, filterValue}) => {
//   filterObject.foreach()
// }

// Export Template for use in CMS preview
export const ProjectIndexTemplate = ({
  title,
  subtitle,
  featuredImage,
  projects = [],
  filteredProjects = [],
  enableSearch = true,
  contentType
}) => (
  <Location>
    {({ location }) => {
      let filteredByExcerptProjects = projects
      let filteredByTitleProjects = projects
      let filteredByFieldsProjects = projects

      let queryObj = location.search.replace('?', '')
      queryObj = qs.parse(queryObj)

      if (enableSearch && queryObj.s) {
        const searchTerm = queryObj.s.toLowerCase()
        filteredByExcerptProjects = filteredByExcerptProjects.filter(project =>
          project.frontmatter.excerpt.toLowerCase().includes(searchTerm)
        )
        filteredByTitleProjects = filteredByTitleProjects.filter(project =>
          project.frontmatter.title.toLowerCase().includes(searchTerm)
        )
          
        filteredByFieldsProjects = [...new Set([...filteredByExcerptProjects, ...filteredByTitleProjects])];
      }

      return (
        <main className="Project">
           <PageHeader
             title={title}
             subtitle={subtitle}
             backgroundImage={featuredImage}
           />

          <section className="section thin">
            <div className="container">
              <div className="PostCategoriesNav">
                <BlogSearch />
              </div>
            </div>
          </section>

          {!!projects.length && (
            <section className="section">
              <div className="container">
                <ProjectSection projects={filteredByFieldsProjects} />
              </div>
            </section>
          )}
        </main>
      )
    }}
  </Location>
)

// Export Default ProjectIndex for front-end
const ProjectIndex = ({ data: { page, projects } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ProjectIndexTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      projects={projects.edges.map(projects => ({
        ...projects.node,
        ...projects.node.frontmatter,
        ...projects.node.fields
      }))}
    />
  </Layout>
)

export default ProjectIndex

export const pageQuery = graphql`
  ## Query for ProjectIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ProjectIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
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

    projects: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "projects" } } }
      sort: { order: DESC, fields: [frontmatter___startDate] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            status
            startDate
            endDate
            featuredImage
            company
            excerpt
            tools {
              description
            }
          }
        }
      }
    }
  }
`