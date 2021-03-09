import React from 'react'
import Content from '../components/Content'

import './InfoCard.css'

const InfoCard = ({
    title,
    featuredImage,
    description
}) => {
    return (
    <div className="InfoCard" >
        {featuredImage && (
            <div className="InfoCard--Image">
                <img src={featuredImage} alt={title} className="InfoCard--Image--Image" />
            </div>
      )}
        <h2 className="InfoCard--Title">{title}</h2>
        <Content className='InfoCard--Content tracking-in-contract-bck' source = {description} />
    </div>
    )
}

export default InfoCard
