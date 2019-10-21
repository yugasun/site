import React from 'react'
import Button from '../../Button'
import imgLogo from 'src/assets/images/logo-sidebolt.png'
import styles from './Pricing.module.css'
import { InternalLink, ExternalLink } from 'src/fragments'
import { cli, gettingStarted, dashboard, enterprise, training, support, plugins, components, dashboardPage, monitoring, alerts, debugging, pricing, integrations, policies } from 'src/constants/urls'

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
      // {
      //   category: 'Plugins',
      //   features: [
      //     {
      //       feature: 'Extend the Framework with 1,000+ plugins',
      //       one: true,
      //       two: true,
      //       three: true,
      //     },
      //     {
      //       feature: 'Get support for certified plugins',
      //       one: false,
      //       two: false,
      //       three: true,
      //     },
      //   ],
      // },
      // {
      //   category: 'Components',
      //   features: [
      //     {
      //       feature:
      //         'Rapidly deploy common serverless use-cases via Serverless Components',
      //       one: true,
      //       two: true,
      //       three: true,
      //     },
      //   ],
      // },
      // {
      //   category: 'Registry',
      //   features: [
      //     {
      //       feature: 'Publish, share & discover Serverless Components',
      //       one: true,
      //       two: true,
      //       three: true,
      //     },
      //   ],
      // },
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
            feature: 'Share and manage secrets across stages.',
            one: false,
            two: true,
            three: true,
          },
          {
            feature: 'Included team members.',
            one: false,
            two: '3',
            three: 'Custom',
          },
          {
            feature: 'Additional team members.',
            one: false,
            two: '$20/month',
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
          {
            feature: 'Additional monthly invocations.',
            one: false,
            two: '$10/million',
            three: 'Custom',
          },
        ],
      },
      {
        category: 'CI/CD',
        features: [
          {
            feature: 'Out-of-the-box CI/CD.',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'Deploy previews.',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'Included concurrent builds.',
            one: '1',
            two: '2',
            three: 'Custom',
          },
          {
            feature: 'Additional concurrent builds.',
            one: false,
            two: '$25/month',
            three: 'Custom',
          },
        ],
      },
      // {
      //   category: 'Alerts',
      //   features: [
      //     {
      //       feature: 'Zero configuration set-up of alerts',
      //       one: false,
      //       two: true,
      //       three: true,
      //     },
      //     {
      //       feature: 'Errors, performance, warnings & more',
      //       one: false,
      //       two: true,
      //       three: true,
      //     },
      //   ],
      // },
      // {
      //   category: 'Debugging',
      //   features: [
      //     {
      //       feature: 'Invocation Explorer',
      //       one: false,
      //       two: true,
      //       three: true,
      //     },
      //   ],
      // },
      // {
      //   category: 'Integrations',
      //   features: [
      //     {
      //       feature: 'Email, Slack, AWS SNS, webhooks & more',
      //       one: false,
      //       two: false,
      //       three: true,
      //     },
      //   ],
      // },
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
      <div className={`container ${styles.wrapper}`}>

        <div className={`container-inner`}>
          <div className={`${styles.title}`}>
            <div className={`${styles.header}`} style={{ 'margin':'20px 0 20px 0' }}>
              Serverless Framework Pro Pricing
            </div>

            <div className={`${styles.description}`}>
              Pricing for every stage of Serverless adoption. 
            </div>
          </div>
        </div>

        <div className={`container-inner ${styles.pricingSummary}`}>
          <div className={`${styles.pricingSummaryTile}`}>
            <div className={`${styles.pricingSummaryLogo}`}>
              <div className={`${styles.pricingSummaryLogoServerless}`}>
                serverless
              </div>
              <div className={`${styles.pricingSummaryLogoFramework}`}>
                framework
              </div>
              <div className={`${styles.pricingSummaryLogoEdition}`}>
                pro
              </div>
            </div>

            <div className={`${styles.pricingSummaryDetail}`}>
              <div className={`${styles.pricingSummaryDetailEdition}`}>
                Free
              </div>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Everything you need to start Serverless development. 
              </div>
              <div className={`${styles.pricingSummaryDetailPrice}`}>$0/month</div>
            </div>
            <InternalLink to={cli}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Serverless CLI
              </div>
            </div>
            </InternalLink>
            <InternalLink to={plugins}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Unlimited Applications
              </div>
            </div>
            </InternalLink>
            <InternalLink to={components}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Serverless Dashboard - 3 users
              </div>
            </div>
            </InternalLink>
            <InternalLink to={components}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Serverless Monitoring - 1m events/month
              </div>
            </div>
            </InternalLink>
             <InternalLink to={components}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Serverless CI/CD - 1 concurrent build
              </div>
            </div>
            </InternalLink>
            {/*
            <div className={`${styles.pricingSummaryDetail}`}>
              <div className={`${styles.pricingSummaryDetailTitle}`}>Registry</div>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Open-Source & Free
              </div>
            </div>
            */}
            <InternalLink to={gettingStarted}>
              <div className={`${styles.pricingSummaryDetail}`}>
                <Button type={'primary'} text={'Start Free'}/>
              </div>
            </InternalLink>
          </div>

          <div className={`${styles.pricingSummaryTile}`}>
            <div className={`${styles.pricingSummaryLogo}`}>
              <div className={`${styles.pricingSummaryLogoServerless}`}>
                serverless
              </div>
              <div className={`${styles.pricingSummaryLogoFramework}`}>
                framework
              </div>
              <div className={`${styles.pricingSummaryLogoEdition}`}>
                pro
              </div>
            </div>

            <div className={`${styles.pricingSummaryDetail}`}>
              <div className={`${styles.pricingSummaryDetailEdition}`}>
                Team
              </div>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Everything you need to scale your Serverless development.
              </div>
              <div className={`${styles.pricingSummaryDetailPrice}`}>$99/month</div>
            </div>
            <InternalLink to={dashboardPage}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>Serverless CLI</div>
            </div>
            </InternalLink>

            <InternalLink to={monitoring}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Unlimited Applications
              </div>
            </div>
            </InternalLink>

            <InternalLink to={alerts}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Serverless Dashboard - 5 users
              </div>
            </div>
            </InternalLink>
            <InternalLink to={debugging}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Serverless Monitoring - 10m events/month
              </div>
            </div>
            </InternalLink>
            <InternalLink to={debugging}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Serverless CI/CD - 2 concurrent builds
              </div>
            </div>
            </InternalLink>
            <ExternalLink to={dashboard}>
              <div className={`${styles.pricingSummaryDetail}`}>
                <Button type={'primary'} text={'Start Free'}/>
              </div>
            </ExternalLink>
          </div>

          <div className={`${styles.pricingSummaryTile}`}>
            <div className={`${styles.pricingSummaryLogo}`}>
              <div className={`${styles.pricingSummaryLogoServerless}`}>
                serverless
              </div>
              <div className={`${styles.pricingSummaryLogoFramework}`}>
                framework
              </div>
              <div className={`${styles.pricingSummaryLogoEdition}`}>
                pro
              </div>
            </div>

            <div className={`${styles.pricingSummaryDetail}`}>
              <div className={`${styles.pricingSummaryDetailEdition}`}>
                Enterprise
              </div>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Standardize and secure Serverless development and operations.
              </div>
              <div className={`${styles.pricingSummaryDetailPrice}`}>
                Contact Sales
              </div>
            </div>
            <InternalLink to={pricing}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailTitle}`}>
              </div>
              <div className={`${styles.pricingSummaryDetailText}`}>
                All features from Professional Edition
              </div>
            </div>
            </InternalLink>
            <InternalLink to={integrations}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Serverless Policies
              </div>
            </div>
            </InternalLink>
            <InternalLink to={policies}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Serverless Operations Console
              </div>
            </div>
            </InternalLink>
            <InternalLink to={policies}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Full Audit Logs
              </div>
            </div>
            </InternalLink>
            <InternalLink to={policies}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Enterprise Support
              </div>
            </div>
            </InternalLink>
            <InternalLink to={enterprise}>
              <div className={`${styles.pricingSummaryDetail}`}>
                <Button type={'primary'} text={'Contact Sales'}/>
              </div>
            </InternalLink>
          </div>
        </div>

        {/* Pricing — Add-Ons */}

        <div className={`container-inner`}>
          <div className={`${styles.title}`}>
            <div className={`${styles.header}`} style={{ 'margin':'40px 0 20px 0' }}>
              Add-Ons
            </div>
            <div className={`${styles.description}`}>
              Additional offerings for new and large teams.
            </div>
          </div>
        </div>

        <div className={`container-inner ${styles.addOns}`}>
          <div className={`${styles.addOnTile}`}>
            <div className={`${styles.addOnTileServerless}`}>
              serverless
            </div>
            <div className={`${styles.addOnTileAddOn}`}>
              training
            </div>
            <div className={`${styles.addOnTileDescription}`}>
              Expert led workshops to get your team up to speed and ensure you do Serverless right the first time.
            </div>
            <div className={`${styles.addOnTileAction}`}>
              <InternalLink to={training}>
                <Button type={'primary'} text={'Learn About Training'}/>
              </InternalLink>
            </div>
          </div>
          <div className={`${styles.addOnTile}`}>
            <div className={`${styles.addOnTileServerless}`}>
              serverless
            </div>
            <div className={`${styles.addOnTileAddOn}`}>
              support
            </div>
            <div className={`${styles.addOnTileDescription}`}>
              24/7 support and architectural reviews from the team behind the Serverless Framework.
            </div>
            <div className={`${styles.addOnTileAction}`}>
              <InternalLink to={support}>
                <Button type={'primary'} text={'Learn About Support'}/>
              </InternalLink>
            </div>
          </div>
        </div>

        {/* Pricing Table — Title */}

        <div className={`container-inner`}>
          <div className={`${styles.title}`}>
            <div className={`${styles.header}`} style={{ 'margin':'40px 0 20px 0' }}>Serverless Framework Edition Details</div>

            <div className={`${styles.description}`}>
              A breakdown of all features in every Serverless Framework Edition.
            </div>
          </div>
        </div>

        {/* Pricing Table — Desktop */}

        <div className={`container-inner`}>
          <div className={`container ${styles.tableDesktop}`}>
            <div className={`${styles.tableSection}`}>
              <div className={`${styles.tableEditions}`}>
                <div className={`${styles.tableColumn} ${styles.tableFeature}`} />
                <div className={`${styles.tableColumn}`}>Open-Source</div>
                <div className={`${styles.tableColumn}`}>Developer</div>
                <div className={`${styles.tableColumn}`}>Enterprise</div>
              </div>
            </div>

            {this.state.features.map((category, index) => (
              <div className={`${styles.tableSection}`} key={index}>
                <div className={`${styles.tableRow} ${styles.tableRowCategory}`}>
                  <div className={`${styles.tableColumn} ${styles.tableFeature}`}>
                    {category.category}
                  </div>
                  <div className={`${styles.tableColumn}`} />
                  <div className={`${styles.tableColumn}`} />
                  <div className={`${styles.tableColumn}`} />
                </div>

                {category.features.map((feature, index2) => (
                  <div className={`${styles.tableRow}`} key={index2}>
                    <div className={`${styles.tableColumn} ${styles.tableFeature}`}>
                      {feature.feature}.
                    </div>
                    <div className={`${styles.tableColumn}`}>
                      {feature.one === true && (
                        <span className={`${styles.check}`}>✔</span>
                      )}
                      {feature.one === false && (
                        <span className={`${styles.cross}`}>x</span>
                      )}
                      {typeof feature.one === 'string' && (
                        <span className={`${styles.limit}`}>{feature.one}</span>
                      )}
                    </div>
                    <div className={`${styles.tableColumn}`}>
                      {feature.two === true && (
                        <span className={`${styles.check}`}>✔</span>
                      )}
                      {feature.two === false && (
                        <span className={`${styles.cross}`}>x</span>
                      )}
                      {typeof feature.two === 'string' && (
                        <span className={`${styles.limit}`}>{feature.two}</span>
                      )}
                    </div>
                    <div className={`${styles.tableColumn}`}>
                      {feature.three === true && (
                        <span className={`${styles.check}`}>✔</span>
                      )}
                      {feature.three === false && (
                        <span className={`${styles.cross}`}>x</span>
                      )}
                      {typeof feature.three === 'string' && (
                        <span className={`${styles.limit}`}>{feature.three}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Table — Mobile */}

        <div className={`container-inner`}>
          <div className={`${styles.tableMobile}`}>
            <div className={`${styles.tableSection}`}>
              <div className={`${styles.tableRow}`}>
                <div className={`${styles.tableColumn}`}>Open-Source</div>
                <div className={`${styles.tableColumn}`}>Developer</div>
                <div className={`${styles.tableColumn}`}>Enterprise</div>
              </div>
            </div>

            {this.state.features.map((category, index) => (
              <div className={`${styles.tableSection}`} key={index}>
                <div className={`${styles.tableRow}`}>
                  <div className={`${styles.tableColumn} ${styles.tableColumnCategory}`}>
                    {category.category}
                  </div>
                </div>

                {category.features.map((feature, index2) => (
                  <div className={`${styles.tableSection}`} key={index2}>
                    <div className={`${styles.tableRow}`}>
                      <div className={`${styles.tableColumn} ${styles.tableFeature}`}>
                        {feature.feature}.
                      </div>
                    </div>
                    <div className={`${styles.tableRow}`}>
                      <div className={`${styles.tableColumn}`}>
                        {feature.one === true && (
                          <span className={`${styles.check}`}>✔</span>
                        )}
                        {feature.one === false && (
                          <span className={`${styles.cross}`}>x</span>
                        )}
                        {typeof feature.one === 'string' && (
                          <span className={`${styles.limit}`}>{feature.one}</span>
                        )}
                      </div>
                      <div className={`${styles.tableColumn}`}>
                        {feature.two === true && (
                          <span className={`${styles.check}`}>✔</span>
                        )}
                        {feature.two === false && (
                          <span className={`${styles.cross}`}>x</span>
                        )}
                        {typeof feature.two === 'string' && (
                          <span className={`${styles.limit}`}>{feature.two}</span>
                        )}
                      </div>
                      <div className={`${styles.tableColumn}`}>
                        {feature.three === true && (
                          <span className={`${styles.check}`}>✔</span>
                        )}
                        {feature.three === false && (
                          <span className={`${styles.cross}`}>x</span>
                        )}
                        {typeof feature.three === 'string' && (
                          <span className={`${styles.limit}`}>{feature.three}</span>
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
