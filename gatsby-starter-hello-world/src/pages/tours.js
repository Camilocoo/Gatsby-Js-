import React from 'react'
import Tours from "../components/Tours/Tours"
import {graphql} from "gatsby";
import Layout from '../components/layout'



const Tourss = ({data}) => {
   console.log(`data:`, data)
    return (
        <React.Fragment>
          <Layout>
            <h1> Hello from tours page </h1>
            <Tours tours={data.tours.edges} />
    
          </Layout>
        </React.Fragment>
    )
}
export const getTours = graphql`

query{
  tours:allContentfulTour{
    edges{
      node{
        name
        price
        slug
        id:contentful_id
        days
        images{
          fluid{
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
}

`

export default Tourss
