import React from 'react'
import Content from '../components/Content'
import { Link } from 'gatsby'
// import Image from './Image'
import { Book, Calendar, User } from 'react-feather'

import './EmploymentCard.css'

const EmploymentCard = ({
  title,
  slug,
  excerpt,
  html,
  startDate,
  endDate,
  company,
  companyUrl,
  position,
  button
}) => (
  <div className="EmploymentCard">
    <div className='EmploymentCard--Details--Row'>
      {title    && <h2 className="EmploymentCard--Title">{title}</h2>}
    </div>
    <div className='EmploymentCard--Details--Row'>
      <div className="EmploymentCard--Details--Left">
          {company && (
          <div className="EmploymentCard--Details--Row">
            <div className="EmploymentCard--Details--Item">
              <Book/>
            </div>
            <div className="EmploymentCard--Details--Item">
              <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company}
                </a>
            </div>
          </div>
        )}
        <div className="EmploymentCard--Details--Row">
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
            <User/> 
            </div>
          <div className="EmploymentCard--Details--Item">
            {position}
          </div>
        </div>
      </div>
      <div  className="EmploymentCard--Details--Right">
        <div className="EmploymentCard--Details--Row">
          <div className="EmploymentCard--Details--Item">
            <Content source={html} />
            <Link to={slug} className="EmploymentCard--Details--Item">Mehr erfahren...</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
)

export default EmploymentCard
