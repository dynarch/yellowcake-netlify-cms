import React from 'react'
import Content from '../components/Content'
import Image from '../components/Image'

import './PostCard.css'

const InfoCard = ({
    title,
    featuredImage,
    description
}) => {

    return (
    <div className="PostCard" >
        {featuredImage && (
            <div className="PostCard--Image--Small">
                <Image src={featuredImage} alt="..." />
            </div>   
        )}
        <h1 className="PostCard--Title">{title}</h1>
        <Content className='PostCard--Content' source = {description} />
    </div>
    )
}

export default InfoCard
