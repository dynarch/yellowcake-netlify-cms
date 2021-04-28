import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Rewy - Gatsby IT Startup Templates Collection</title>
                <meta name="description" content="Rewy - React Gatsby IT Startup Templates Collection" />
                <meta name="og:title" property="og:title" content="Rewy - React Gatsby IT Startup Templates Collection"></meta>
                <meta name="twitter:card" content="Rewy - React Gatsby IT Startup Templates Collection"></meta>
                <link rel="canonical" href="https://rewy-react.envytheme.com/"></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO
