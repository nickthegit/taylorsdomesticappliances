import React from "react"

import Header from "../components/header"

import styles from "../styles/layouts/layoutMain.module.scss"

export default ({ children }) => (
  <div>
    <Header />
    <main className={styles.main}>
      {children}
    </main>
    <footer>
      <h1>footer</h1>
    </footer>
  </div>
)