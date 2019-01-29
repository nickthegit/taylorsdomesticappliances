import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Email from "../components/icons/email"
import Phone from "../components/icons/phone"

import styles from "../styles/conponents/header.module.scss"

const hrefFunc = (key, value) => {
  return `${key}${value}`;
};



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      { showMenu: false };
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {

    return (

      <StaticQuery

        query={graphql`
          query {
            datoCmsSiteGlobal {
              logo {
                url
              }
              email
              telephoneNumber
            }
          }
        `}

        render={data => (

          <header className={`${styles.mainHead} ${this.state.showMenu ? 'menuActive' : ''}`}>

            <div className={styles.topBar}>
              <a className={styles.headIcon} href={hrefFunc('mailto:', data.datoCmsSiteGlobal.email)} > <Email />{data.datoCmsSiteGlobal.email}</a>
              <a className={styles.headIcon} href={hrefFunc('tel:', data.datoCmsSiteGlobal.telephoneNumber)}><Phone />{data.datoCmsSiteGlobal.telephoneNumber}</a>
            </div>
            <div className={styles.mainBar}>

              <button className={`${styles.burger} hamburger hamburger--collapse ${this.state.showMenu ? 'is-active' : ''}`} type="button" onClick={this.toggleMenu}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <Link className={styles.brand} to="/"><img src={data.datoCmsSiteGlobal.logo.url} alt="logo" /></Link>
              <nav className={this.state.showMenu ? styles.navOpen : ''}>
                <Link to="/services/" activeClassName={styles.linkActive}>Services</Link>
                <Link to="/about/" activeClassName={styles.linkActive}>About</Link>
                <Link to="/contact/" activeClassName={styles.linkActive}>Contact</Link>
                <div className={styles.navBtn}>
                  <a href={hrefFunc('mailto:', data.datoCmsSiteGlobal.email)} > <Email />Email</a>
                  <a href={hrefFunc('tel:', data.datoCmsSiteGlobal.telephoneNumber)}><Phone />Call</a>
                </div>
              </nav>
            </div>
          </ header >
        )}
      />
    )
  }
}

export default Header



// export default () => (
//   <StaticQuery

//     query={graphql`
//       query {
//         datoCmsSiteGlobal {
//           logo {
//             url
//           }
//           email
//           telephoneNumber
//         }
//       }
//     `}

//     render={data => (

//       <header className={styles.mainHead}>

//         <div className={styles.topBar} >
//           <a className={styles.headIcon} href={hrefFunc('mailto:', data.datoCmsSiteGlobal.email)} > <Email />{data.datoCmsSiteGlobal.email}</a>
//           <a className={styles.headIcon} href={hrefFunc('tel:', data.datoCmsSiteGlobal.telephoneNumber)}><Phone />{data.datoCmsSiteGlobal.telephoneNumber}</a>
//         </div>
//         <div className={styles.mainBar}>
//           <button className={styles.burger}></button>
//           <Link className={styles.brand} to="/"><img src={data.datoCmsSiteGlobal.logo.url} alt="logo" /></Link>
//           <nav>
//             <Link to="/services/" activeClassName={styles.linkActive}>Services</Link>
//             <Link to="/about/" activeClassName={styles.linkActive}>About</Link>
//             <Link to="/contact/" activeClassName={styles.linkActive}>Contact</Link>
//           </nav>
//         </div>
//       </ header >
//     )}
//   />

// )
