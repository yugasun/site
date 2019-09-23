import React from 'react'
import imgLogo from 'src/assets/images/logo-sidebolt.png'
import './Pricing.css'
import { InternalLink, ExternalLink } from 'src/fragments'
import { gettingStarted, dashboard, enterprise } from 'src/constants/urls'

export default class Pricing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.state.features = [
      {
        category: 'CLI',
        features: [
          {
            feature: 'Easy CLI + YAML development & deployment',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'Local development & emulation',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'Deploy to AWS, Google, Azure & more',
            one: true,
            two: true,
            three: true,
          },
        ],
      },
      {
        category: 'Plugins',
        features: [
          {
            feature: 'Extend the Framework with 1,000+ plugins',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'Get support for certified plugins',
            one: false,
            two: false,
            three: true,
          },
        ],
      },
      {
        category: 'Components',
        features: [
          {
            feature:
              'Rapidly deploy common serverless use-cases via Serverless Components',
            one: true,
            two: true,
            three: true,
          },
        ],
      },
      {
        category: 'Registry',
        features: [
          {
            feature: 'Publish, Share & Discover Serverless Components',
            one: true,
            two: true,
            three: true,
          },
        ],
      },
      {
        category: 'Dashboard',
        features: [
          {
            feature: 'View your serverless applications & configuration',
            one: false,
            two: true,
            three: true,
          },
          {
            feature: 'Share application state & outputs',
            one: false,
            two: true,
            three: true,
          },
          {
            feature: 'Share stage-specific configuration and credentials',
            one: false,
            two: true,
            three: true,
          },
          {
            feature: 'View deployments, metrics, alerts & logs',
            one: false,
            two: true,
            three: true,
          },
          {
            feature: 'Share and manage secrets across stages',
            one: false,
            two: true,
            three: true,
          },
          {
            feature: 'Included team members',
            one: false,
            two: '3',
            three: 'Custom',
          },
        ],
      },
      {
        category: 'Monitoring',
        features: [
          {
            feature: 'Out-of-the-box metrics on usage, performance & errors',
            one: false,
            two: true,
            three: true,
          },
          {
            feature: 'Data retention',
            one: false,
            two: '7 days',
            three: 'Custom',
          },
          {
            feature: 'Included monthly invocations',
            one: false,
            two: '1,000,000',
            three: 'Custom',
          },
        ],
      },
      {
        category: 'Alerts',
        features: [
          {
            feature: 'Zero configuration set-up of alerts',
            one: false,
            two: true,
            three: true,
          },
          {
            feature: 'Errors, Performance, Warnings & more',
            one: false,
            two: true,
            three: true,
          },
        ],
      },
      {
        category: 'Debugging',
        features: [
          {
            feature: 'Invocation Explorer',
            one: false,
            two: true,
            three: true,
          },
        ],
      },
      {
        category: 'Integrations',
        features: [
          {
            feature: 'Email, Slack, AWS SNS, Webhooks & more',
            one: false,
            two: false,
            three: true,
          },
        ],
      },
      {
        category: 'Policies',
        features: [
          {
            feature: 'Use dozens of pre-made policies & best practices',
            one: false,
            two: false,
            three: true,
          },
          {
            feature: 'Write custom policies in javascript',
            one: false,
            two: false,
            three: true,
          },
        ],
      },
    ]
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
      <div className='container pricing-component'>
        <div className='container-inner'>
          <div className='pricing-title'>
            <div className='header'>Serverless Framework Pricing</div>

            <div className='description'>
              Deploy serverless apps in seconds with our open-source edition,
              get production-ready with our free developer edition and pay as
              you scale with the enterprise edition.
            </div>
          </div>
        </div>

        <div className='container-inner pricing-summary'>
          <div className='pricing-summary-tile'>
            <div className='pricing-summary-edition-logo'>
              <div className='pricing-summary-edition-logo-serverless'>
                serverless
              </div>
              <div className='pricing-summary-edition-logo-framework'>
                framework
              </div>
              <div className='pricing-summary-edition-logo-edition'>
                open-source
              </div>
            </div>

            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-edition'>
                Open-Source Edition
              </div>
              <div className='pricing-summary-detail-text'>
                Our vast open-source ecosystem simplifies serveless, and is
                available to everyone and every team for free.
              </div>
              <div className='pricing-summary-detail-price'>Price - Free</div>
            </div>
            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-title'>CLI</div>
              <div className='pricing-summary-detail-text'>
                Open-Source & Free
              </div>
            </div>
            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-title'>Plugins</div>
              <div className='pricing-summary-detail-text'>
                Open-Source & Free
              </div>
            </div>
            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-title'>Components</div>
              <div className='pricing-summary-detail-text'>
                Open-Source & Free
              </div>
            </div>
            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-title'>Registry</div>
              <div className='pricing-summary-detail-text'>
                Open-Source & Free
              </div>
            </div>
            <InternalLink to={gettingStarted}>
              <div className='pricing-summary-detail'>
                <div className='pricing-summary-detail-action'>Download</div>
              </div>
            </InternalLink>
          </div>

          <div className='pricing-summary-tile'>
            <div className='pricing-summary-edition-logo'>
              <div className='pricing-summary-edition-logo-serverless'>
                serverless
              </div>
              <div className='pricing-summary-edition-logo-framework'>
                framework
              </div>
              <div className='pricing-summary-edition-logo-edition'>
                developer
              </div>
            </div>

            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-edition'>
                Developer Edition
              </div>
              <div className='pricing-summary-detail-text'>
                Integrates and extends the open-source projects and adds free
                features for production-ready teams.
              </div>
              <div className='pricing-summary-detail-price'>Price - Free</div>
            </div>
            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-title'>Dashboard</div>
              <div className='pricing-summary-detail-text'>Up to 3 users.</div>
            </div>
            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-title'>Monitoring</div>
              <div className='pricing-summary-detail-text'>
                Up to 1 million invocations a month.
              </div>
            </div>
            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-title'>Alerts</div>
              <div className='pricing-summary-detail-text'>
                Up to 1 million invocations a month.
              </div>
            </div>
            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-title'>Debugging</div>
              <div className='pricing-summary-detail-text'>
                Up to 1 million invocations a month.
              </div>
            </div>
            <ExternalLink to={dashboard}>
              <div className='pricing-summary-detail'>
                <div className='pricing-summary-detail-action'>
                  Sign-Up For Free
                </div>
              </div>
            </ExternalLink>
          </div>

          <div className='pricing-summary-tile'>
            <div className='pricing-summary-edition-logo'>
              <div className='pricing-summary-edition-logo-serverless'>
                serverless
              </div>
              <div className='pricing-summary-edition-logo-framework'>
                framework
              </div>
              <div className='pricing-summary-edition-logo-edition'>
                enterprise
              </div>
            </div>

            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-edition'>
                Enterprise Edition
              </div>
              <div className='pricing-summary-detail-text'>
                Includes the developer edition, with increased limits, more
                features, training & support for scaling serverless teams.
              </div>
              <div className='pricing-summary-detail-price'>
                Price - Contact Sales
              </div>
            </div>
            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-title'>
                Increased Usage
              </div>
              <div className='pricing-summary-detail-text'>
                Increased invocations, team seats & more.
              </div>
            </div>
            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-title'>Integrations</div>
              <div className='pricing-summary-detail-text'>
                Unlimited integrations.
              </div>
            </div>
            <div className='pricing-summary-detail'>
              <div className='pricing-summary-detail-title'>Policies</div>
              <div className='pricing-summary-detail-text'>
                Unlimited policies.
              </div>
            </div>
            <InternalLink to={enterprise}>
              <div className='pricing-summary-detail'>
                <div className='pricing-summary-detail-action'>
                  Contact Sales
                </div>
              </div>
            </InternalLink>
          </div>
        </div>

        {/* Pricing Table — Title */}

        <div className='container-inner'>
          <div className='pricing-title'>
            <div className='header'>Serverless Framework Edition Details</div>

            <div className='description'>
              A breakdown of all features in every Serverless Framework Edition.
            </div>
          </div>
        </div>

        {/* Pricing Table — Desktop */}

        <div className='container-inner'>
          <div className='container pricing-table-desktop'>
            <div className='pricing-table-section'>
              <div className='pricing-table-row pricing-table-editions'>
                <div className='pricing-table-column pricing-table-column-feature' />
                <div className='pricing-table-column'>Open-Source</div>
                <div className='pricing-table-column'>Developer</div>
                <div className='pricing-table-column'>Enterprise</div>
              </div>
            </div>

            {this.state.features.map((category, index) => (
              <div className='pricing-table-section' key={index}>
                <div className='pricing-table-row pricing-table-row-category'>
                  <div className='pricing-table-column pricing-table-column-feature'>
                    {category.category}
                  </div>
                  <div className='pricing-table-column' />
                  <div className='pricing-table-column' />
                  <div className='pricing-table-column' />
                </div>

                {category.features.map((feature, index2) => (
                  <div className='pricing-table-row' key={index2}>
                    <div className='pricing-table-column pricing-table-column-feature'>
                      {feature.feature}.
                    </div>
                    <div className='pricing-table-column'>
                      {feature.one === true && (
                        <span className='pricing-check'>✔</span>
                      )}
                      {feature.one === false && (
                        <span className='pricing-cross'>x</span>
                      )}
                      {typeof feature.one === 'string' && (
                        <span className='pricing-limit'>{feature.one}</span>
                      )}
                    </div>
                    <div className='pricing-table-column'>
                      {feature.two === true && (
                        <span className='pricing-check'>✔</span>
                      )}
                      {feature.two === false && (
                        <span className='pricing-cross'>x</span>
                      )}
                      {typeof feature.two === 'string' && (
                        <span className='pricing-limit'>{feature.two}</span>
                      )}
                    </div>
                    <div className='pricing-table-column'>
                      {feature.three === true && (
                        <span className='pricing-check'>✔</span>
                      )}
                      {feature.three === false && (
                        <span className='pricing-cross'>x</span>
                      )}
                      {typeof feature.three === 'string' && (
                        <span className='pricing-limit'>{feature.three}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Table — Mobile */}

        <div className='container-inner'>
          <div className='container pricing-table-mobile'>
            <div className='pricing-table-section'>
              <div className='pricing-table-row'>
                <div className='pricing-table-column'>Open-Source</div>
                <div className='pricing-table-column'>Developer</div>
                <div className='pricing-table-column'>Enterprise</div>
              </div>
            </div>

            {this.state.features.map((category, index) => (
              <div className='pricing-table-section' key={index}>
                <div className='pricing-table-row'>
                  <div className='pricing-table-column pricing-table-column-category'>
                    {category.category}
                  </div>
                </div>

                {category.features.map((feature, index2) => (
                  <div className='pricing-table-section' key={index2}>
                    <div className='pricing-table-row'>
                      <div className='pricing-table-column pricing-table-column-feature'>
                        {feature.feature}.
                      </div>
                    </div>
                    <div className='pricing-table-row'>
                      <div className='pricing-table-column'>
                        {feature.one === true && (
                          <span className='pricing-check'>✔</span>
                        )}
                        {feature.one === false && (
                          <span className='pricing-cross'>x</span>
                        )}
                        {typeof feature.one === 'string' && (
                          <span className='pricing-limit'>{feature.one}</span>
                        )}
                      </div>
                      <div className='pricing-table-column'>
                        {feature.two === true && (
                          <span className='pricing-check'>✔</span>
                        )}
                        {feature.two === false && (
                          <span className='pricing-cross'>x</span>
                        )}
                        {typeof feature.two === 'string' && (
                          <span className='pricing-limit'>{feature.two}</span>
                        )}
                      </div>
                      <div className='pricing-table-column'>
                        {feature.three === true && (
                          <span className='pricing-check'>✔</span>
                        )}
                        {feature.three === false && (
                          <span className='pricing-cross'>x</span>
                        )}
                        {typeof feature.three === 'string' && (
                          <span className='pricing-limit'>{feature.three}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
