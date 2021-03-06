import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';

const getData = graphql`
query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }`

const Header = () => {

    const {site:{siteMetadata:info}} = useStaticQuery(getData)
     
    
    return (
        <div>
            {/* <h1>{data.site.siteMetadata.author}</h1>*/}
            <h1>author: {info.author}</h1>
            <h1>title: {info.title}</h1>
        </div>
    )
}

export default Header

