import React from "react"
import { Link } from "gatsby"

import Email from "../components/icons/email"
import Phone from "../components/icons/phone"

import styles from "../styles/conponents/header.module.scss"

export default () => (
  <header className={styles.mainHead}>

    <div className={styles.topBar} >
      <a className={styles.headIcon} href=" mailto:taylorsdomesticappliances@gmail.com?subject=&body="><Email />taylorsdomesticappliances@gmail.com sdfdf</a>
      <a className={styles.headIcon} href="tel:01963 220 366"><Phone />01963 220 366</a>
    </div>
    <div className={styles.mainBar}>
      <Link className={styles.brand} to="/"><img src="./taylor-s-logo.png" alt="logo" /></Link>
      <nav>
        <Link to="/services/" activeClassName={styles.linkActive}>Services</Link>
        <Link to="/about/" activeClassName={styles.linkActive}>About</Link>
        <Link to="/contact/" activeClassName={styles.linkActive}>Contact</Link>
      </nav>
    </div>
  </header >

)