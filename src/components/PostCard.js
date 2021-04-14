import React from 'react'
import { Link } from 'gatsby'

import Image from './Image'
import './Card.css'

const PostCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  ...props
}) => (
  <Link to={slug} className={`Card ${className}`}>
    {featuredImage && (
      <div className="Card--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="Card--Content">
      {title && <h3 className="Card--Title">{title}</h3>}
      <div className="Card--Category">
        {categories && categories.map(cat => cat.category).join(', ')}
      </div>
      {excerpt && <div className="Card--Excerpt">{excerpt}</div>}
    </div>
  </Link>
)

export default PostCard
