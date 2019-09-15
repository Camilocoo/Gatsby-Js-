import React from 'react'
import {FaMap } from "react-icons/fa";
import Image from 'gatsby-image';
import styles from '../../css/tour.module.css'
import {Link } from 'gatsby';




const SingleTour = ({tour}) => {
    const {name , price, days, slug, images} = tour;
    const mainImage = images[0].fluid;
    
    return (
        <article className={styles.tour}>
            this is the single tour component
        </article>
    )
}

export default SingleTour
