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
      <div className='container framework-editions'>
        <div className='container-inner framework-editions-inner'>

          <div className='header-label container'>
            Serverless Framework
          </div>

          <div className='header container'>
            Everything you need, at any scale.
          </div>

          <div className='framework-editions-list container'>

            <div className='framework-edition'>

              <div className='framework-edition-title'>
                <div className='framework-edition-title-serverless'>
                  serverless
                </div>
                <div className='framework-edition-title-framework'>
                  framework
                </div>
                <div className='framework-edition-title-edition'>
                  open-source
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-price'>
                  Free
                </div>
                <div className='framework-edition-detail-text'>
                  Downloaded over 1 million times per month. Our vast open-source ecosystem simplifies serveless, and is available to everyone and every team for free.
                </div>
                <div className='framework-edition-detail-link'>
                  Download
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  CLI
                </div>
                <div className='framework-edition-detail-text'>
                  Easy YAML + CLI development and deployment of serverless applications across AWS, Azure, Google Cloud & more.
                </div>
                <div className='framework-edition-detail-link'>
                  View all CLI features
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  plugins
                </div>
                <div className='framework-edition-detail-text'>
                  Access 1000+ plugins that extend the Framework CLI to customize your workflow.
                </div>
                <div className='framework-edition-detail-link'>
                  View all plugins
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  components
                </div>
                <div className='framework-edition-detail-text'>
                  Deploy common serverless use-cases more easily and quickly with these simpler abstractions.
                </div>
                <div className='framework-edition-detail-link'>
                  View all components
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  registry
                </div>
                <div className='framework-edition-detail-text'>
                  Easily discover, deploy & share Serverless Components.
                </div>
                <div className='framework-edition-detail-link'>
                  View the registry
                </div>
              </div>

              <div className='framework-edition-action'>
                <div className='framework-edition-action-button'>
                  Download
                </div>
              </div>
            </div>

            <div className='framework-edition framework-edition-main'>

              <div className='framework-edition-title'>
                <div className='framework-edition-title-serverless'>
                  serverless
                </div>
                <div className='framework-edition-title-framework'>
                  framework
                </div>
                <div className='framework-edition-title-edition'>
                  developer
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-price'>
                  Free Tier + Pay-Per-Use
                </div>
                <div className='framework-edition-detail-text'>
                  Perfect for small teams who want to be production ready. Integrates and extends the open-source projects. Includes a large free tier and pricing that scales with you.
                </div>
                <div className='framework-edition-detail-link'>
                  <div>Start for Free</div>
                  <div>Contact Sales</div>
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  dashboard
                </div>
                <div className='framework-edition-detail-text'>
                  A shared view for your team's apps, metrics, alerts, deployments, secrets, activity & more.
                </div>
                <div className='framework-edition-detail-link'>
                  View all Dashboard features
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  monitoring
                </div>
                <div className='framework-edition-detail-text'>
                  Instant, powerful metrics, featuring usage, performance, errors & more across all of your serverless applications.
                </div>
                <div className='framework-edition-detail-link'>
                  View all Monitoring features
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  alerts
                </div>
                <div className='framework-edition-detail-text'>
                  Zero-config, real-time alerts for deployments, new errors, approaching out of memory, unusual durations, timeouts & more.
                </div>
                <div className='framework-edition-detail-link'>
                  View all Alerting features
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  debugging
                </div>
                <div className='framework-edition-detail-text'>
                  Query across every transaction with our invocation explorer to find past issues, performance insights & more.
                </div>
                <div className='framework-edition-detail-link'>
                  View all Debugging features
                </div>
              </div>

              <div className='framework-edition-action'>
                <div className='framework-edition-action-button'>
                  Start Free
                </div>
              </div>
            </div>

            <div className='framework-edition framework-edition'>

              <div className='framework-edition-title'>
                <div className='framework-edition-title-serverless'>
                  serverless
                </div>
                <div className='framework-edition-title-framework'>
                  framework
                </div>
                <div className='framework-edition-title-edition'>
                  enterprise
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-price'>
                  Contact Sales
                </div>
                <div className='framework-edition-detail-text'>
                  Additional features, training and support. Designed for large teams that need hands-on help, standardized workflows and integrations with Ops processes and tools.
                </div>
                <div className='framework-edition-detail-link'>
                  Contact Sales
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  integrations
                </div>
                <div className='framework-edition-detail-text'>
                  Send alerts, metrics and more to Slack, Email, AWS SNS, Webhooks & the standard tooling your operations team uses.
                </div>
                <div className='framework-edition-detail-link'>
                  View all Integrations
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  Policies
                </div>
                <div className='framework-edition-detail-text'>
                  Set and automate policy enforcement upon every deployment, to ensure developer teams follow organizational standards and best practices.
                </div>
                <div className='framework-edition-detail-link'>
                  View all Policy Features
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  Training
                </div>
                <div className='framework-edition-detail-text'>
                  Training and workshop packages for teams that are new to serverless, need to move quickly and want to start right, delivered by our industry-leading experts.
                </div>
                <div className='framework-edition-detail-link'>
                  View our Training Packages
                </div>
              </div>

              <div className='framework-edition-detail'>
                <div className='framework-edition-detail-title'>
                  Support
                </div>
                <div className='framework-edition-detail-text'>
                  24/7 access to our serverless team.  We'll help review your architecture, fix bugs, solve outages and prioritize your feature requests.
                </div>
                <div className='framework-edition-detail-link'>
                  View our Support Packages
                </div>
              </div>

              <div className='framework-edition-action'>
                <div className='framework-edition-action-button'>
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
