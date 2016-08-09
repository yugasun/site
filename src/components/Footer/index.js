import React, { Component, PropTypes } from "react"
import Svg from "react-svg-inline"
import twitterSvg from "../../assets/icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../../assets/icons/iconmonstr-github-1.svg"
import styles from "./index.css"

export default class Footer extends Component {
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };
  render() {
    const {
      pkg,
    } = this.context.metadata
    return (
      <footer className={ styles.footer }>
        <a
          href={ "http://serverless.com" }
          className={ styles.link }
        >
          <span className={ styles.reference }>
            { "Serverless" }
          </span>
        </a>
        { pkg.twitter &&
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } />
              { "Twitter" }
          </a>
        }
        { pkg.repository &&
          <a
            href={ pkg.repository }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } />
            { "GitHub" }
          </a>
        }
      </footer>
    )
  }
}
