import React from 'react'
import { Box, Row } from 'serverless-design-system'
import './FrameworkEditions.css'

export default class FrameworkEditions extends React.Component {

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
      <div className='container home-editions-component'>
        <div className='container-inner home-editions-inner'>

          <div className='header-label container'>
            Serverless Framework
          </div>

          <div className='header container'>
            Everything you need, at any scale.
          </div>

          <div className='home-editions-list container'>

            <div className='home-edition'>

              <div className='home-edition-title'>
                <div className='home-edition-title-serverless'>
                  serverless
                </div>
                <div className='home-edition-title-framework'>
                  framework
                </div>
                <div className='home-edition-title-edition'>
                  open-source
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-price'>
                  Open-Source Edition
                </div>
                <div className='home-edition-detail-text'>
                  Downloaded over 1 million times per month. Our vast open-source ecosystem simplifies serveless, and is available to everyone for free.
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-title'>
                  CLI
                </div>
                <div className='home-edition-detail-text'>
                  Easy YAML + CLI development and deployment to AWS, Azure, Google Cloud & more.
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-title'>
                  plugins
                </div>
                <div className='home-edition-detail-text'>
                  Access 1000+ plugins that extend the Framework CLI to customize your workflow.
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-title'>
                  components
                </div>
                <div className='home-edition-detail-text'>
                  Deploy common serverless use-cases more easily and quickly with these simpler abstractions.
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-title'>
                  registry
                </div>
                <div className='home-edition-detail-text'>
                  Easily discover, deploy & share Serverless Components.
                </div>
              </div>

              <div className='home-edition-action'>
                <div className='home-edition-action-button'>
                  Download
                </div>
              </div>
            </div>

            <div className='home-edition home-edition-main'>

              <div className='home-edition-title'>
                <div className='home-edition-title-serverless'>
                  serverless
                </div>
                <div className='home-edition-title-framework'>
                  framework
                </div>
                <div className='home-edition-title-edition'>
                  developer
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-price'>
                  Developer Edition
                </div>
                <div className='home-edition-detail-text'>
                  Perfect for teams going into production. Integrates and extends the open-source projects with several new features for free.
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-title'>
                  dashboard
                </div>
                <div className='home-edition-detail-text'>
                  A shared view for your team's apps, metrics, alerts, deployments, secrets, activity & more.
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-title'>
                  monitoring
                </div>
                <div className='home-edition-detail-text'>
                  Instant, powerful metrics for your serverless apps covering usage, performance, errors & more.
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-title'>
                  alerts
                </div>
                <div className='home-edition-detail-text'>
                  Zero-config, real-time alerts for deployments, new errors, unusual durations, timeouts & more.
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-title'>
                  debugging
                </div>
                <div className='home-edition-detail-text'>
                  Query across every invocation with our explorer to find issues, performance insights & more.
                </div>
              </div>

              <div className='home-edition-action'>
                <div className='home-edition-action-button'>
                  Sign Up For Free
                </div>
              </div>
            </div>

            <div className='home-edition home-edition'>

              <div className='home-edition-title'>
                <div className='home-edition-title-serverless'>
                  serverless
                </div>
                <div className='home-edition-title-framework'>
                  framework
                </div>
                <div className='home-edition-title-edition'>
                  enterprise
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-price'>
                  Enterprise Edition
                </div>
                <div className='home-edition-detail-text'>
                  Ideal for scaling teams.  Includes unlimited use and additional features to standardize workflows and integrate with Ops tooling.
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-title'>
                  integrations
                </div>
                <div className='home-edition-detail-text'>
                  Send alerts, metrics and more to Slack, Email, AWS SNS, Webhooks and other Ops tools.
                </div>
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-title'>
                  Policies
                </div>
                <div className='home-edition-detail-text'>
                  Set and automate policy enforcement of standards and best practices across teams.
                </div>
              </div>

              <div className='home-edition-action'>
                <div className='home-edition-action-button'>
                  Contact Sales
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
