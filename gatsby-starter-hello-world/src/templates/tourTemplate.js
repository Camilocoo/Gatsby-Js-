import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import styles from '../css/template.module.css'
import Image from 'gatsby-image'
import {FaMoneyBillWave, FaMap } from 'react-icons/fa'
import {Link} from 'gatsby'



const TourTemplate = ({data}) => {
    const {
        days,
        description:{description},
        images,
        journey,
        name,
        price,
        start
    }=data.tour
  
    return (
        <React.Fragment>
       <Layout>
            <section className={styles.template}>
                <div className={styles.center}>
                    <div className={styles.images}>
                        {images.map((item,index)=>{
                            return (
                            <Image
                            key={index}
                            fluid={item.fluid}
                            alt={name}
                            className={styles.image}
                            /> 
                            )
                        })}
                        <h2>{name}</h2>
                        <div className={styles.info}>
                            <p>
                                <FaMoneyBillWave className={styles.icon}/>
                                starting from ${price}
                            </p>
                            <p>
                                <FaMap className={styles.icon}/>
                               USA
                            </p>
                        </div>
                        <h4>starts on : {start}</h4>
                        <h4>duration: {days}</h4>
                        <p className={styles.desc}>{description}</p>
                        <h2>Daily schedule</h2>
                        <ul className={styles.journey}>
                            {journey.map((item,index)=>{
                                return <li key={index}>{item.day}</li>
                            })}
                        </ul>
                        <Link to='/tours'>back to tours</Link>
                    </div>
                </div>
            </section>
        </Layout> 
       </React.Fragment>   
    )
}

export const query = graphql`
    
query($slug:String!){
    tour:contentfulTour(slug:{eq:$slug}){
        name
      price
      days
      start(formatString:"ddd MMMM Do, YYYY")
      journey{
        day
        info
      }
      description{
        description
      }
      images{
        fluid{
          ...GatsbyContentfulFluid_withWebp
        }
      }
      
      
    }
  }
  
 `


export default TourTemplate
