import React from 'react'
import Content from '../components/Content'
import { Link } from 'gatsby'
import './InfoCard.css'

const InfoCard = ({
    title,
    featuredImage,
    description,
    excerpt,
    button
}) => {
    return (
    <div className="InfoCard" >
        { featuredImage && (
            <div className="InfoCard--Image">
                <img src={featuredImage} alt={title} className="InfoCard--Image--Image" />
            </div>
      )}
        <h2 className="InfoCard--Title">{title}</h2>
        { excerpt && (
            <div className="InfoCard--Content">
              {excerpt}
            </div>
          )
        }
        { description && (
          <Content className='InfoCard--Content' source={description} />
          )
        }
        { button && (button.map((item, index) => (
          <div key={item.text + index} className="InfoCard--Footer">
            <Link to={item.ref} className="Button">{item.text}</Link>
          </div>
          ))
          )
        }
    </div>
    )
}

export default InfoCard
