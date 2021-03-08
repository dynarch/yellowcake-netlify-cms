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
                <img src={featuredImage} alt={title} style={{zIndex:"100", overflow:"visible", position:"relative"}} />
            </div>
      )}
        <h1 className="InfoCard--Title">{title}</h1>
        <Content className='InfoCard--Content' source = {description} />
    </div>
    )
}

export default InfoCard
