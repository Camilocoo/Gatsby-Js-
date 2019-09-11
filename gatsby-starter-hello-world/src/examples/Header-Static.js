import React from 'react';
import {  StaticQuery, graphql} from 'gatsby';

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

const HeaderStatic = () => {
     
    return (
        <div>
           <StaticQuery 
            query={getData} 
            render={(data)=>{
                let {site:{siteMetadata:info}} = data
                return (
                    <div>
                        <h1> static:  author:{info.author}</h1>
                        <h1> Static title: {info.title}</h1>
                    </div>
            
                )    
            }}>
            </StaticQuery>
        </div>
    )
}

export default HeaderStatic
