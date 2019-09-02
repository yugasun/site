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
            <p>Software is eating the world...  Unfortunately, most businesses still can't deliver software successfully, much less do so at the rapid pace needed to stay competitive.  For those who wish to keep up, let alone lead, <b>software delivery & operation must be radically simplified.</b></p>
            <p>This is what the <b>Serverless Architecture</b> offers — It's built on next-generation public cloud services that auto-scale and charge only when used.  When scale, capacity planning & cost management are automated, the result is software that's easier to build, maintain, and often up to 99% cheaper.</p>
            <p>Serverless Architectures are 10x more efficient, but they are new and therefore require a shift in how we previously thought about architectures & workflows. Our goal at <b>Serverless Inc.</b> is to give developers, teams and orgs all of the tools they need to build and operate serverless applications immediately, in one simple, powerful & elegant experience... <b>The Serverless Framework</b>.</p>
            <p>The Serverless Paradigm is the natural evolution of software efficiency.  It yields a competitive advantage for today's practitioners and will be a deciding factor in tomorrow's software industry leaders.</p>
            <p>Join us!  Together, we will build more & manage less.</p>
          </div>


          <div className='paradigm-guide-title container'>
            <div className='header-label container'>
              Serverless Guide
            </div>

            <div className='header container'>
              How to go serverless.
            </div>
          </div>

          <div className='paradigm-guide container'>
            <div className='paradigm-guide-step'>
              <div className='paradigm-guide-step-title'>
                Learn
              </div>
              <div className='paradigm-guide-step-description'>
                Leverage these resources for learning how to build serverless architectures for a variety of use-cases...
              </div>
              <div className='paradigm-guide-step-action'>
                Watch the overview video
              </div>
              <div className='paradigm-guide-step-action'>
                Read the whitepaper
              </div>
              <div className='paradigm-guide-step-action'>
                Join A meetup
              </div>
              <div className='paradigm-guide-step-action'>
                Attend a workshop
              </div>
            </div>

            <div className='paradigm-guide-step'>
              <div className='paradigm-guide-step-title'>
                Try
              </div>
              <div className='paradigm-guide-step-description'>
                Deploy a serverless use-case in seconds and the Serverless Framework Developer Edition will automatically set up metrics, alerts & more...
              </div>
              <div className='paradigm-guide-step-action'>
                Read the Quick-start
              </div>
              <div className='paradigm-guide-step-action'>
                Deploy an example
              </div>
              <div className='paradigm-guide-step-action'>
                Sign up for the developer edition
              </div>
              <div className='paradigm-guide-step-action'>
                Check out the Github repo
              </div>
            </div>

            <div className='paradigm-guide-step'>
              <div className='paradigm-guide-step-title'>
                Accelerate
              </div>
              <div className='paradigm-guide-step-description'>
                Standardize your team's serverless workflow with the Serverless Framework's policy engine, integrations, workshops and support plans...
              </div>
              <div className='paradigm-guide-step-action'>
                Demo the Enterprise Edition
              </div>
              <div className='paradigm-guide-step-action'>
                Order a workshop
              </div>
              <div className='paradigm-guide-step-action'>
                Review support plans
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
