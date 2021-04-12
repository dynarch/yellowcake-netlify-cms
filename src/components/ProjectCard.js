import React from 'react'
import { Link } from 'gatsby'
// import Image from './Image'
import { Calendar, Home, User } from 'react-feather'

import './PostCard.css'
import './EmploymentCard.css'

const ProjectCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  startDate,
  endDate,
  company,
  className = '',
  ...props
}) => (
  <Link to={slug} className={`PostCard ${className}`}>
    {/* {featuredImage && (
      <div className="PostCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )} */}
    <div className="PostCard--Title">
      <h3 className="PostCard--Title">{title}</h3>
    </div>
    <div className="PostCard--Content">
      {excerpt && <div className="PostCard--Excerpt">{excerpt}</div>}
      <div className='EmploymentCard--Details--Row'>
        <div className="EmploymentCard--Details--Item">
        <Calendar/>
        </div>
        <div className="EmploymentCard--Details--Item">
          <time
            itemProp="startDate endDate"
            date={startDate}
          >
            {startDate && (
              <time itemProp="startDate" date={startDate}>{startDate}</time>)} - 
            {endDate ? (
              <time itemProp="endDate" date={endDate}>{endDate}</time>) : " bis jetzt"}
          </time>
        </div>
      </div>
      <div className="EmploymentCard--Details--Row">
        <div className="EmploymentCard--Details--Item">
          <Home/>
        </div>
        <div className="EmploymentCard--Details--Item">
          {company}
        </div>
      </div>
    </div>
  </Link>
)

export default ProjectCard
