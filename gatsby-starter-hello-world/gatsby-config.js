/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

siteMetadata:{
  title:'tutorial',
  description:"just some description about our site",
  author:'@jhonDoe',
  data:{name:"jhoneDoe",age:25}
},

  plugins:[
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`

],
  
}
