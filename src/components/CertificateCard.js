import React from 'react'
import Content from '../components/Content'
import { Link } from 'gatsby'
// import Image from './Image'
import { Calendar } from 'react-feather'

import './EmploymentCard.css'

const CertificateCard = ({
  title,
  slug,
  html,
  issueDate
}) => (
  <div className="EmploymentCard">
    <div className='EmploymentCard--Details--Row'>
      {title    && <h2 className="EmploymentCard--Title">{title}</h2>}
    </div>
    <div className='EmploymentCard--Details--Row'>
      <div className="EmploymentCard--Details--Left">
        <div className="EmploymentCard--Details--Row">
          <div className="EmploymentCard--Details--Item">
            <Calendar/>
          </div>
          <div className="EmploymentCard--Details--Item">
            <time
              itemProp="issueDate"
              date={issueDate}
            >
              <time itemProp="issueDate" date={issueDate}>{issueDate}</time>
            </time>
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

export default CertificateCard