import React from 'react'
import Collapse, { Panel } from 'rc-collapse'
import { P, Row, Heading, Flex } from 'src/fragments/DesignSystem'
import faqData from './faqData'
require('rc-collapse/assets/index.css')
import styled from 'styled-components'

class FAQ extends React.Component {
  state = {
    accordion: false,
    activeKey: ['4'],
  }

  onChange = activeKey => {
    this.setState({
      activeKey,
    })
  }

  getItems() {
    const items = []
    faqData.map((faq, index) =>
      items.push(
        <Panel
          header={faq.question}
          headerClass='my-header-class'
          showArrow={false}
          key={index}
        >
          <Heading.h5>{faq.answer}</Heading.h5>
        </Panel>
      )
    )

    return items
  }

  setActivityKey = () => {
    this.setState({
      activeKey: ['2'],
    })
  }

  toggle = () => {
    this.setState({
      accordion: !this.state.accordion,
    })
  }

  render() {
    const accordion = this.state.accordion
    const activeKey = this.state.activeKey
    return (
      <Collapse accordion={true} onChange={this.onChange} activeKey={activeKey}>
        {this.getItems()}
      </Collapse>
    )
  }
}

export default FAQ
