import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

 // Note: You can change "images" to whatever you'd like.

 const BioImage = props => (
   // const maxWidth = props.maxWidth;
   <StaticQuery
     query={graphql`
       query {
         images: allFile {
           edges {
             node {
               relativePath
               name
               childImageSharp {
                 fluid(maxWidth: 200) {
                   ...GatsbyImageSharpFluid
                 }
               }
             }
           }
         }
       }
     `}
     render={data => {
       const image = data.images.edges.find(n => {
         return n.node.relativePath.includes(props.filename);
       });
       if (!image) {
         return null;
       }

       //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
       return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />;
     }}
   />
 );

 export default BioImage;
