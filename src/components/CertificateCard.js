import React from 'react'
import Content from '../components/Content'
import { Link } from 'gatsby'
// import Image from './Image'
import { Calendar, Package, User } from 'react-feather'

import './FlexCard.css'

const CertificateCard = ({
  title,
  slug,
  html,
  role,
  area,
  issueDate
}) => (
  <div className="FlexCard">
    <div className='FlexCard--Content--Row'>
      {title    && <h2 className="FlexCard--Title">{title}</h2>}
    </div>
    <div className='FlexCard--Content--Row'>
      <div className="FlexCard--Content--Left">
        <div className="FlexCard--Content--Row">
          <div className="FlexCard--Content--Item">
            <Calendar/>
          </div>
          <div className="FlexCard--Content--Item">
            <time
              itemProp="issueDate"
              date={issueDate}
            >
              <time itemProp="issueDate" date={issueDate}>{issueDate}</time>
            </time>
          </div>
        </div>
        <div className="FlexCard--Content--Row">
          <div className="FlexCard--Content--Item">
            <User/>
          </div>
          <div className="FlexCard--Content--Item">
            {role}
          </div>
        </div>
        <div className="FlexCard--Content--Row">
          <div className="FlexCard--Content--Item">
            <Package/>
          </div>
          <div className="FlexCard--Content--Item">
            {area}
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
)

export default CertificateCard