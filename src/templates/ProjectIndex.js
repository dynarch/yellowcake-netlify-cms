import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'

import PageHeader from '../components/PageHeader'
import ProjectSection from '../components/ProjectSection'
import Layout from '../components/Layout'

import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";

// import { makeStyles } from "@material-ui/core/styles";
// import styles from "assets/jss/material-kit-react/views/landingPage.js";
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
  return projects.filter(projects => Date.parse(projects.date) <= now)
}

/**
 * @param {projects} object
 * @param {title} string
 * @param {contentType} string
 */

// Export Template for use in CMS preview
export const ProjectIndexTemplate = ({
  title,
  subtitle,
  featuredImage,
  projects = [],
  enableSearch = true,
  contentType
}) => (
  <Location>
    {({ location }) => {
      let filteredProjects = projects

      let queryObj = location.search.replace('?', '')
      queryObj = qs.parse(queryObj)

      if (enableSearch && queryObj.s) {
        const searchTerm = queryObj.s.toLowerCase()
        filteredProjects = filteredProjects.filter(projects =>
          projects.frontmatter.title.toLowerCase().includes(searchTerm)
        )
      }

      // const classes = useStyles();
      // const { ...rest } = props;

      return (
        <main className="Project">
            <Header
              color="transparent"
              brand="Material Kit React"
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 400,
                color: "white"
              }}
              // {...rest}
            />
          <PageHeader
            title={title}
            subtitle={subtitle}
            backgroundImage={featuredImage}
          />

          {!!projects.length && (
            <section className="section">
              <div className="container">
                <ProjectSection projects={filteredProjects} />
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
            usedTools
            excerpt
          }
        }
      }
    }
  }
`
