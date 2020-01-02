import React from 'react'
import Collapse, { Panel } from 'rc-collapse'
import { Box } from 'serverless-design-system'
import faqData from './faqData'
require('./faq.css')

class FAQ extends React.Component {
  state = {
    accordion: false,
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
          headerClass='accordion-header'
          showArrow={false}
          key={index}
        >
          <Box>{faq.answer}</Box>
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
    const activeKey = this.state.activeKey
    return (
      <Collapse
        accordion={true}
        onChange={this.onChange}
        activeKey={activeKey}
        showArrow={true}
      >
        {this.getItems()}
      </Collapse>
    )
  }
}

export default FAQ
