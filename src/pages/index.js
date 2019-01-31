import React from "react"
import { graphql } from "gatsby"
// import Img from 'gatsby-image'

import LayoutMain from "../layouts/layoutMain"

import Hero from "../components/hero"
import Button from "../components/button"

import styles from "../styles/pages/index.module.scss" 


export default ({ data }) => {

  // console.log(data.file.childImageSharp.fluid)
  // console.log(data.allDatoCmsHome.edges[0].node.heroImages[0].fluid)
  // console.log(data.allDatoCmsHome.edges[0].node.introLink.slug)
  return (
    <LayoutMain>
      <Hero image={data.allDatoCmsHome.edges[0].node.heroImages[0].fluid}/>
      <main className={styles.main}> 
     
        <section id="intro" className={styles.intro}>
          <article>
            <h1>{data.allDatoCmsHome.edges[0].node.strapline}</h1>
            <p>{data.allDatoCmsHome.edges[0].node.introText}</p>
            <Button text={data.allDatoCmsHome.edges[0].node.introLinkText} link={data.allDatoCmsHome.edges[0].node.introLink.slug} type="main"/>
            {/* <Button text="this text" link="/contact/"/> */}
          </article>
        </section> 

        <section className={styles.whatwefix}>
          <article>
            <figure>
              <img src="https://via.placeholder.com/600x400"/>
            </figure>
            <div>
              <h1>What we fix</h1>
              <p>We are experienced to repair most brands of freestanding and built in washing machines, tumble dryers, dishwashers, cookers including Ranges, refrigeration, microwaves and vacuum cleaners. Either as in house service call or you can bring to the workshop</p>
              <Button text="See our services in full" link="services" type="alt" />
            </div>
          </article>
        </section>

        <section className={styles.area}>
          <article>
            <figure>
              <img src="https://via.placeholder.com/600x400" />
            </figure>
            <div>
              <h1>Area we cover</h1>
              <p>We are experienced to repair most brands of freestanding and built in washing machines, tumble dryers, dishwashers, cookers including Ranges, refrigeration, microwaves and vacuum cleaners. Either as in house service call or you can bring to the workshop</p>
              <Button text="See our services in full" link="services" type="alt" />
            </div>
          </article>
        </section>
      </main>
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
        },
        strapline,
        introText,
        introLinkText,
        introLink {
          slug,
          name
        }
      }
    }
  }
}


`


