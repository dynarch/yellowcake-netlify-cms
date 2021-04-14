import React from 'react'
import { Link } from 'gatsby'
// import Image from './Image'
import { Calendar, Home } from 'react-feather'

import './FlexCard.css'

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
  <Link to={slug} className={`FlexCard ${className}`}>
    {/* {featuredImage && (
      <div className="FlexCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )} */}
    <div className="FlexCard--Title">
      <h3 className="FlexCard--Title">{title}</h3>
    </div>
    <div className="FlexCard--Content">
      {excerpt && <div className="FlexCard--Hide">{excerpt}</div>}
      <div className="FlexCard--Content--Swipe">
        <div className='FlexCard--Content--Row'>
          <div className="FlexCard--Content--Item">
          <Calendar/>
          </div>
          <div className="FlexCard--Content--Item">
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
        <div className="FlexCard--Content--Row">
          <div className="FlexCard--Content--Item">
            <Home/>
          </div>
          <div className="FlexCard--Content--Item">
            {company}
          </div>
        </div>
      </div>
    </div>
  </Link>
)

export default ProjectCard
