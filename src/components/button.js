import React from "react"
import { Link } from "gatsby"

import styles from "../styles/conponents/button.module.scss"

class Btn extends React.Component {
  render() {
    const linkStr = `/${this.props.link}`;  
    const testy = () => {
      if (this.props.type === 'main') {
        return styles.btn  
      } else {
        return styles.alt
      }
    } 
    return (
      <Link to={linkStr} className={testy()}>{this.props.text}</Link>
    );
  }
}

export default Btn