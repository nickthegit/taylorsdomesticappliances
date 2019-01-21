import React from "react"
import Img from "gatsby-image"

import styles from "../styles/conponents/hero.module.scss"

export default ({ image }) => (
  <div className={styles.hero}>
    <Img fluid={image} />
  </div>
)