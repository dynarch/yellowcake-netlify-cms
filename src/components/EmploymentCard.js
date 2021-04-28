import React from 'react'
import Content from '../components/Content'
import { Link } from 'gatsby'
// import Image from './Image'
import { Book, Calendar, User } from 'react-feather'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';

import './FlexCard.css'
import 'react-vertical-timeline-component/style.min.css';

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
  <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={startDate}
      icon={<Book />
    }
    >
    <div className="FlexCard">
      <div className='FlexCard--Content--Row'>
        {title    && <h2 className="FlexCard--Title">{title}</h2>}
      </div>
      <div className='FlexCard--Content--Row'>
        <div className="FlexCard--Content--Left">
            {company && (
            <div className="FlexCard--Content--Row">
              <div className="FlexCard--Content--Item">
                <Book/>
              </div>
              <div className="FlexCard--Content--Item">
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
          <div className="FlexCard--Content--Row">
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
              <User/> 
              </div>
            <div className="FlexCard--Content--Item">
              {position}
            </div>
          </div>
        </div>
        <div  className="FlexCard--Content--Right">
          <div className="FlexCard--Content--Row">
            <div className="FlexCard--Content--Item">
              <Content source={html} />
              <Link to={slug} className="FlexCard--Content--Item">Mehr erfahren...</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  </VerticalTimelineElement>
)

export default EmploymentCard