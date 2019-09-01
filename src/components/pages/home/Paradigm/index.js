import React from 'react'
import { Box, Row } from 'serverless-design-system'
import './Paradigm.css'

export default class Paradigm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  /**
   * Component Did Mount
   */

  componentDidMount() {

  }

  /**
   * Render
   */

  render() {
    return (
      <div className='container paradigm-container'>
        <div className='container-inner paradigm-inner'>

          <div className='header-label container'>
            Serverless Movement
          </div>

          <div className='header container'>
            The future of software is serverless.
          </div>

          <div className='paradigm-manifesto container'>
            <p>Nothing matters more today than your ability to innovate, especially in software.</p>
            <p>However, most businesses can't deliver software successfully.  In order for them to keep up, let alone lead, <b>software delivery & operation must be radically simplified.</b></p>
            <p>This is what the <b>Serverless Architecture</b> offers. It's comprised of next-generation cloud services that auto-scale and charge only when used.  The result is software that is 10x easier to build & operate.</p>
            <p>Serverless Architectures require a shift in how we previously thought about software architectures, as well as the culture around it. Our goal at <b>Serverless Inc.</b> is to give developers, teams and orgs all of the tools they need to build & operate serverless applications in one simple, elegant & powerful experience: <b>The Serverless Framework</b>.</p>
            <p>The Serverless Architecture is the natural evolution of the cloud.  Today's practitioners will lead the industry tomorrow.  Join us and let's drive the total cost of software complexity & ownership to zero.</p>
          </div>
        </div>
      </div>
    )
  }
}
