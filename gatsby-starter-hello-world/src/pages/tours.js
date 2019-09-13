import React from 'react'
import Tours from "../Tours/Tours"
import {graphql} from "gatsby";
import Layout from '../components/layout'



const Tourss = () => {
 
    return (
        <React.Fragment>
          <Layout>
            <h1> Hello from tours page </h1>
            <Tours />
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
            src
          }
        }
      }
    }
  }
}

`

export default Tourss
