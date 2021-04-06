import React from 'react'
import Content from './Content'

import './PriceCard.css'

const PriceCard = ({
  title,
  description,
  className = ''
}) => (
  <div className={`PriceCard ${className}`}>
    <div className="PriceCard--Title">{title}</div>
    <div className="PriceCard--Content">
      <Content source={description} />
    </div>
  </div>
)

export default PriceCard
