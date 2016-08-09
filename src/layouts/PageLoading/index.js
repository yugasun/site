import React, { Component } from "react"
import Helmet from "react-helmet"
import styles from "./index.css"

export default class PageLoading extends Component {

  render() {
    return (
      <div>
        <Helmet
          title={ "Loading..." }
        />
        <div className={ styles.loader }>
          <div className={ styles.spinner }></div>
        </div>
      </div>
    )
  }
}
