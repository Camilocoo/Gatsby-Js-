import React from 'react'
import {FaMap } from "react-icons/fa";
import Image from 'gatsby-image';
import styles from '../../css/tour.module.css'
import {Link } from 'gatsby';
import PropTypes from 'prop-types';





const SingleTour = ({tour}) => {
    const {name , price, days, slug, images ,country} = tour;
    const mainImage = images[0].fluid;
    console.log(`country :`, country)
  
    
    return (
        <article className={styles.tour} >
           <div className={styles.imgContainer}>
               <Image fluid={mainImage} className={styles.img} alt={name}/>
               <Link className={styles.link} to={`/tours/${slug}`}/>

           </div>
           <div className={styles.footer}>
               <h3>{name}</h3>
               <div className={styles.info}>
                     <h4 className={styles.country}>
                     <FaMap className={styles.icon}/>
                         USA
                    </h4>
               </div>
               <div className={styles.details}>
                   <h6>{days} days</h6>
                   <h6>from ${price}</h6>
               </div>
             
           </div>
        </article>
    )
}


SingleTour.propTypes={
    tour:PropTypes.shape({
        name:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        days:PropTypes.number.isRequired,
        images:PropTypes.arrayOf(PropTypes.object)
    })
}

export default SingleTour
