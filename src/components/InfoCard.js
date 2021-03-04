import React from 'react'
import Content from '../components/Content'
// import Image from '../components/Image'

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from '../assets/jss/material-kit-react/imagesStyles';

import './PostCard.css'

const useStyles = makeStyles(styles);

const InfoCard = ({
    title,
    featuredImage,
    description
}) => {
    const classes = useStyles();
    const imageClasses = classNames(
    //   classes.imgRaised,
    //   classes.imgRoundedCircle,
        classes.imgFluid
        // classes.imgCardOverlay
    );

    return (
    <div className="PostCard">
        <img src={featuredImage} alt="..." className='PostCard--Image--Center' />
        <h1 className="PostCard--Title">{title}</h1>
        {/* {featuredImage && (
            <div>
            <div className="PostCard--Image relative">
            <Image 
                className="PostCard--Image--Centered"
                background 
                src={featuredImage} 
                alt={title} />
            </div>
            <div className="PostCard--Image relative">
                <img src={featuredImage} alt="..." className={imageClasses} />
            </div>   
            </div>
        )}          */}
        <Content className='PostCard--Content' source = {description} />
    </div>
    )
}

export default InfoCard
