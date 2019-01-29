import React from "react"
import { graphql } from "gatsby"
// import Img from 'gatsby-image'


import LayoutMain from "../layouts/layoutMain"

import Hero from "../components/hero"


export default ({ data }) => {

  // console.log(data.file.childImageSharp.fluid)
  // console.log(data.allDatoCmsHome.edges[0].node.heroImages[0].fluid)
  return (
    <LayoutMain>
      <Hero image={data.allDatoCmsHome.edges[0].node.heroImages[0].fluid} />

      <h1>{data.allDatoCmsHome.edges[0].node.strapline}</h1>
      <section>
        <h1>What we fix</h1>
      </section>
      <section>
        <h1>Area we cover</h1>
      </section>
    </LayoutMain>

  )
}
// file(relativePath: { eq: "taylors-van.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 1920, maxHeight: 720, cropFocus: CENTER) {
//           ...GatsbyImageSharpFluid
//     }
//   }
// }

export const query = graphql`
query {

  allDatoCmsHome {
    edges {
      node {
        heroImages { 
          fluid(maxWidth: 1920, maxHeight: 720, imgixParams: { fm: "webp", auto: "format", fpX: 0.3, fpY: 0.4 }) {
            ...GatsbyDatoCmsFluid
          }
        }
        strapline
      }
    }
  }
}


`


