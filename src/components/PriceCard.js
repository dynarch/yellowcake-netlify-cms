import React from 'react'
import Content from './Content'

import './PriceCard.css'

const PriceCard = ({
  title,
  description,
  className = ''
}) => (
  <div className={`PriceCard ${className}`}>
    <div className="PriceCard--Content">
      {title && <h3 className="PriceCard--Title">{title}</h3>}
      <Content source={description} />
    </div>
  </div>
)

export default PriceCard
