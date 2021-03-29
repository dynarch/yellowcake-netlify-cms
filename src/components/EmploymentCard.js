import React from 'react'
// import { Link } from 'gatsby'
import Image from './Image'
import { List } from 'react-feather'

import './PostCard.css'

const EmploymentCard = ({
  title,
  excerpt,
  slug,
  className = '',
  button
}) => (
  <div className='PostCard'>
      <div className="PostCard--Image relative">
        <List></List>
      </div>
    <div className="PostCard--Content">
      {title && <h3 className="PostCard--Title">{title}</h3>}
      {excerpt && <div className="PostCard--Excerpt">{excerpt}</div>}
    </div>
  </div>
)

export default EmploymentCard
