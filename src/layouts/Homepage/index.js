import React, { Component } from "react"
import Page from "../Page"

export default class Homepage extends Component {

  render() {
    return (
      <Page { ...this.props }>
        { "homepage markup here" }
      </Page>
    )
  }
}
