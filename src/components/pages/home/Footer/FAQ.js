import React from 'react'
import Collapse, { Panel } from 'rc-collapse'
import { Text, Flex } from 'serverless-design-system'
import faqData from './faqData'
require('./faq.css')

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
          headerClass='accordion-header'
          showArrow={false}
          key={index}
        >
          <Text
            color='#8c8c8c'
            fontSize='16px'
            fontFamily='SoleilBk'
            lineHeight='26px'
            letterSpacing='0'
          >
            {faq.answer}
          </Text>
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
      <Collapse accordion={true} onChange={this.onChange} activeKey={activeKey}>
        {this.getItems()}
      </Collapse>
    )
  }
}

export default FAQ
