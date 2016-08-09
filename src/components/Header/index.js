import React, { Component } from "react"
import { Link } from "react-router"
import styles from "./index.css"

export default class Header extends Component {

  render() {
    return (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <Link
              className={ styles.link }
              to="/"
            >
              { "Home" }
            </Link>
          </div>
          <div className={ styles.navPart2 }>
            <Link
              className={ styles.link }
              to="/learn"
            >
              { "Learn" }
            </Link>
            <Link
              className={ styles.link }
              to="/community"
            >
              { "Community" }
            </Link>

          </div>
        </nav>
      </header>
    )
  }
}
