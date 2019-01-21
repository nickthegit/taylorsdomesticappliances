import React from "react"
import { graphql } from "gatsby"


import LayoutMain from "../layouts/layoutMain"

import Hero from "../components/hero"


export default ({ data }) => {

  // console.log(data.file.childImageSharp.fluid)
  return (
    <LayoutMain>
      <Hero image={data.file.childImageSharp.fluid} />

      <h1>Intro</h1>
      <section>
        <h1>What we fix</h1>
      </section>
      <section>
        <h1>Area we cover</h1>
      </section>
    </LayoutMain>

  )
}

export const query = graphql`
query {
  file(relativePath: { eq: "taylors-van.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 1920, maxHeight: 720, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
      }
    }
  }
}
`


