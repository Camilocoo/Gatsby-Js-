import React from 'react'
import HeaderHook from "../examples/Header-Hooks.js";
import HeaderStatic from "../examples/Header-Static.js";
import Layout from "../components/layout";
import {graphql} from 'gatsby';



const examples = (props) => {
    console.log(props)
    const {name, age} = props.data.site.siteMetadata.data
    return (
        <div>
            <Layout>
          
                <p>NAME PAGE QUERY : {name}</p>
                <p> age page query :{age}</p>
                examples page
                <HeaderHook/>
                <HeaderStatic/>
            </Layout>
        </div>
    )
}

export const getData = graphql`
{
    site {
      siteMetadata {
        title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`

export default examples
