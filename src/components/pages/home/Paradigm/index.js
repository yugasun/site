import React from 'react'
import { InternalLink, ExternalLink } from 'src/fragments'
import {
  meetups,
  training,
  gettingStarted,
  contactSales,
  support,
  dashboard,
  github,
  examples,
} from 'src/constants/urls'

import './Paradigm.css'

export default class Paradigm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  /**
   * Component Did Mount
   */

  componentDidMount() {}

  /**
   * Render
   */

  render() {
    return (
      <div className='container paradigm-component'>
        {/* Paradigm Guide */}

        <div className='paradigm-guide container'>
          <div className='header-label container'>Serverless Guide</div>

          <div className='header container'>The guide to going serverless.</div>

          <div className='paradigm-guide-steps container-inner'>
            <div className='paradigm-guide-step'>
              <div className='paradigm-guide-step-title'>Learn</div>
              <div className='paradigm-guide-step-description'>
                Leverage these resources for learning how to build serverless
                architectures for a variety of use-cases...
              </div>
              <ExternalLink to={'https://www.youtube.com/watch?v=-Nf0ui3qP2E'}>
                <div className='paradigm-guide-step-action'>
                  Watch the overview video
                </div>
              </ExternalLink>
              <ExternalLink to={'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/whitepapers/serverless-architecture-use-cases.pdf'}>
              <div className='paradigm-guide-step-action'>
                Read the whitepaper
              </div>
              </ExternalLink>
              <InternalLink to={meetups}>
                <div className='paradigm-guide-step-action'>Join A meetup</div>
              </InternalLink>
              <InternalLink to={training}>
                <div className='paradigm-guide-step-action'>
                  Attend a workshop
                </div>
              </InternalLink>
            </div>

            <div className='paradigm-guide-step'>
              <div className='paradigm-guide-step-title'>Try</div>
              <div className='paradigm-guide-step-description'>
                Deploy a serverless use-case in seconds and Serverless Framework Pro will set up metrics,
                alerts & more automatically...
              </div>
              <InternalLink to={gettingStarted}>
                <div className='paradigm-guide-step-action'>
                  Read the Quick-start
                </div>
              </InternalLink>
              <InternalLink to={examples}>
                <div className='paradigm-guide-step-action'>
                  Deploy an example
                </div>
              </InternalLink>
              <ExternalLink to={dashboard}>
                <div className='paradigm-guide-step-action'>
                  Try Serverless Framework Pro for Free
                </div>
              </ExternalLink>
              <ExternalLink to={github}>
                <div className='paradigm-guide-step-action'>
                  Check out the Github repo
                </div>
              </ExternalLink>
            </div>

            <div className='paradigm-guide-step'>
              <div className='paradigm-guide-step-title'>Accelerate</div>
              <div className='paradigm-guide-step-description'>
                Standardize your team's serverless workflow with the Serverless
                Framework's policy engine, integrations, workshops and support
                plans...
              </div>
              <InternalLink to={contactSales}>
                <div className='paradigm-guide-step-action'>
                  Demo Serverless Framework Pro
                </div>
              </InternalLink>
              <InternalLink to={training}>
                <div className='paradigm-guide-step-action'>
                  Order a workshop
                </div>
              </InternalLink>
              <InternalLink to={support}>
                <div className='paradigm-guide-step-action'>
                  Review support plans
                </div>
              </InternalLink>
            </div>
          </div>
        </div>

        {/* Paradigm Mission */}

        <div className='container paradigm-mission'>
          <div className='container-inner paradigm-mission-inner'>
            <div className='paradigm-mission-icon container'>ß</div>

            <div className='header-label container'>Serverless Movement</div>

            <div className='header container'>
              The future of software is serverless.
            </div>

            <div className='paradigm-mission-statement container-inner'>
              <p>
                Software is eating the world... Unfortunately, most businesses
                still can't deliver software successfully, much less do so at
                the pace needed to stay competitive. For those who wish to keep
                up, let alone lead,{' '}
                <b>
                  software delivery & operation must be radically simplified.
                </b>
              </p>
              <p>
                This is what the <b>Serverless Architecture</b> offers — It's
                built on next-generation public cloud services that auto-scale
                and charge only when used. When scale, capacity planning & cost
                management are automated, the result is software that's easier
                to build, maintain, and often up to 99% cheaper.
              </p>
              <p>
                Serverless Architectures are new and therefore require a shift
                in how we previously thought about architectures & workflows.
                Our goal at <b>Serverless Inc.</b> is to give developers, teams
                and orgs all of the tools they need to build and operate
                serverless applications, in one simple, powerful & elegant
                experience... <b>The Serverless Framework</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
