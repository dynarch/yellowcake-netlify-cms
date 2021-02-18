import React from 'react'
import { Link } from 'gatsby'
import Image from './Image'

import './ProjectCard.css'

const ProjectCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  className = '',
  ...props
}) => (
  <Link to={slug} className={`ProjectCard ${className}`}>
    {featuredImage && (
      <div className="ProjectCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="ProjectCard--Content">
      {title && <h3 className="ProjectCard--Title">{title}</h3>}
      {excerpt && <div className="ProjectCard--Excerpt">{excerpt}</div>}
    </div>
  </Link>
)

export default ProjectCard
