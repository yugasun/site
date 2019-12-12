import React from 'react'
import Button from '../../Button'
import imgLogoPro from 'src/assets/images/logo-serverless-framework-pro-centered-light.png'
import styles from './Pricing.module.css'
import { InternalLink, ExternalLink } from 'src/fragments'
import { gettingStarted, dashboard, contactSales, training, support, monitoring, integrations, policies } from 'src/constants/urls'

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
        category: 'Dashboard',
        features: [
          {
            feature: 'View your serverless applications & configuration',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'Share application state & outputs',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'Share stage-specific configuration and credentials',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'View deployments, metrics, alerts & logs',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'Share and manage secrets across stages',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'Included team members',
            one: '3',
            two: '5',
            three: 'Custom',
          },
          {
            feature: 'Additional team members',
            one: false,
            two: '$20 / per user',
            three: 'Custom',
          },
        ],
      },
      {
        category: 'Monitoring',
        features: [
          {
            feature: 'Out-of-the-box metrics on usage, performance & errors',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'Data retention',
            one: '7 days',
            two: '7 days',
            three: 'Custom',
          },
          {
            feature: 'Included monthly monitoring events',
            one: '1,000,000',
            two: '10,000,000',
            three: 'Custom',
          },
          {
            feature: 'Additional monthly monitoring events',
            one: false,
            two: '$0.00001 / per event',
            three: 'Custom',
          },
        ],
      },
      {
        category: 'CI/CD',
        features: [
          {
            feature: 'Concurrent Builds',
            one: '1',
            two: '2',
            three: 'Custom',
          },
          {
            feature: 'Additional concurrent builds',
            one: false,
            two: '$25 / concurrent build',
            three: 'Custom',
          },
        ],
      },
      {
        category: 'Alerts',
        features: [
          {
            feature: 'Zero configuration set-up of alerts',
            one: true,
            two: true,
            three: true,
          },
          {
            feature: 'Errors, performance, warnings & more',
            one: true,
            two: true,
            three: true,
          },
        ],
      },
      {
        category: 'Debugging',
        features: [
          {
            feature: 'Query across all requests, invocations & more',
            one: true,
            two: true,
            three: true,
          },
        ],
      },
      {
        category: 'Integrations',
        features: [
          {
            feature: 'Email, Slack, AWS SNS, webhooks & more',
            one: false,
            two: true,
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
      <div className={`container ${styles.wrapper}`}>

        <div className={`container-inner`}>
          <div className={`${styles.title}`}>
            <div className={`${styles.header}`} style={{ 'margin':'20px 0 20px 0' }}>
              Plans for teams of all sizes.
            </div>

            <div className={`${styles.description}`}>
              Deploy serverless applications in seconds with <ExternalLink to={`https://www.github.com/serverless/serverless`}>Serverless Framework Open-Source</ExternalLink>.  <br/>Bring those apps into production with Serverless Framework Pro, which includes out-of-the-box collaboration, monitoring,  debugging, & more.
            </div>
          </div>
        </div>

        <div className={`container-inner ${styles.logoPro} ${styles.fadeIn}`}>
          <img src={imgLogoPro} draggable={false} />
        </div>

        <div className={`container-inner ${styles.pricingSummary}`}>

          <div className={`${styles.pricingSummaryTile} ${styles.freeTile} ${styles.fadeInUp}`}>
            <div className={`${styles.pricingHeader}`}>
              <div className={`${styles.pricingSummaryDetailEdition}`}>
                Free
              </div>
              <div className={`${styles.pricingSummaryDetailPrice}`}>$0<span>/month</span></div>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Enable monitoring, debugging, CI/CD, secrets & more for your serverless apps, for free!
              </div>
              <InternalLink to={gettingStarted}>
                <div className={`${styles.pricingSummaryButtonWrapper}`}>
                  <Button type={'primary'} text={'Sign up for free'}/>
                </div>
              </InternalLink>
            </div>
            <InternalLink to={monitoring}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailTitle}`}>Monitoring</div>
              <div className={`${styles.pricingSummaryDetailText}`}>
                1,000,000 / events / month
              </div>
            </div>
            </InternalLink>
            <div>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailTitle}`}>CI/CD</div>
              <div className={`${styles.pricingSummaryDetailText}`}>
                1 concurrent build
              </div>
            </div>
            </div>
            <ExternalLink to={dashboard}>
            <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
              <div className={`${styles.pricingSummaryDetailTitle}`}>Team Collaboration</div>
              <div className={`${styles.pricingSummaryDetailText}`}>
                3 included members
              </div>
            </div>
            </ExternalLink>
          </div>

          <div className={`${styles.pricingSummaryTile} ${styles.teamTile} ${styles.fadeInUp}`}>
            <div className={`${styles.pricingHeader}`}>
              <div className={`${styles.pricingSummaryDetailEdition}`}>
                Team
              </div>
              <div className={`${styles.pricingSummaryDetailPrice}`}>$99<span>/month</span></div>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Ideal for teams bringing serverless apps into production and scaling them.  Includes all free features plus...
              </div>
              <ExternalLink to={dashboard}>
                <div className={`${styles.pricingSummaryButtonWrapper}`}>
                  <Button type={'primary'} text={'Sign up for free'}/>
                </div>
              </ExternalLink>
              <InternalLink to={contactSales}>
                <div className={`${styles.salesLink}`}>
                  Contact sales to purchase
                </div>
              </InternalLink>
            </div>

            <InternalLink to={monitoring}>
              <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
                <div className={`${styles.pricingSummaryDetailTitle}`}>Monitoring</div>
                <div className={`${styles.pricingSummaryDetailText}`}>
                  10,000,000 / events / month
                </div>
              </div>
            </InternalLink>

            <div>
              <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
                <div className={`${styles.pricingSummaryDetailTitle}`}>CI/CD</div>
                <div className={`${styles.pricingSummaryDetailText}`}>
                  2 concurrent builds
                </div>
              </div>
            </div>

            <InternalLink to={dashboard}>
              <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
                <div className={`${styles.pricingSummaryDetailTitle}`}>Team Collaboration</div>
                <div className={`${styles.pricingSummaryDetailText}`}>
                  5 included members
                </div>
              </div>
            </InternalLink>

            <InternalLink to={integrations}>
              <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
                <div className={`${styles.pricingSummaryDetailTitle}`}>Integrations</div>
                <div className={`${styles.pricingSummaryDetailText}`}>
                  Email, Slack, SNS, Webhooks
                </div>
              </div>
            </InternalLink>
          </div>

          <div className={`${styles.pricingSummaryTile} ${styles.enterpriseTile} ${styles.fadeInUp}`}>
            <div className={`${styles.pricingHeader}`}>
              <div className={`${styles.pricingSummaryDetailEdition}`}>
                Enterprise
              </div>
              <div className={`${styles.pricingSummaryDetailPriceEnterprise}`}>Contact Sales</div>
              <div className={`${styles.pricingSummaryDetailText}`}>
                Custom packages designed for the needs of your company.  Includes all features plus...
              </div>
              <InternalLink to={contactSales}>
                <div className={`${styles.pricingSummaryButtonWrapper}`}>
                  <Button type={'primary'} text={'Request a demo'}/>
                </div>
              </InternalLink>
            </div>

            <InternalLink to={monitoring}>
              <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
                <div className={`${styles.pricingSummaryDetailTitle}`}>All Features</div>
                <div className={`${styles.pricingSummaryDetailText}`}>
                  All features in Free & Team.
                </div>
              </div>
            </InternalLink>

            <InternalLink to={policies}>
              <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
                <div className={`${styles.pricingSummaryDetailTitle}`}>Policies</div>
                <div className={`${styles.pricingSummaryDetailText}`}>
                  Auto-enforce policies on every deployment.
                </div>
              </div>
            </InternalLink>

            <div>
              <div className={`${styles.pricingSummaryDetail} ${styles.pricingSummaryDetailClickable}`}>
                <div className={`${styles.pricingSummaryDetailTitle}`}>Self Hosted Option</div>
                <div className={`${styles.pricingSummaryDetailText}`}>
                  Host everything on your own AWS account.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Table — Title */}

        <div className={`container-inner`}>
          <div className={`${styles.title}`}>
            <div className={`${styles.header}`} style={{ 'margin':'40px 0 20px 0' }}>Serverless Framework Pro Details</div>

            <div className={`${styles.description}`}>
              A breakdown of all features in every Serverless Framework Pro Tier.
            </div>
          </div>
        </div>

        {/* Pricing Table — Desktop */}

        <div className={`container-inner`}>
          <div className={`container ${styles.tableDesktop}`}>
            <div className={`${styles.tableSection}`}>
              <div className={`${styles.tableEditions}`}>
                <div className={`${styles.tableColumn} ${styles.tableFeature}`} />
                <div className={`${styles.tableColumn}`}>Free</div>
                <div className={`${styles.tableColumn}`}>Team</div>
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
                <div className={`${styles.tableColumn}`}>Free</div>
                <div className={`${styles.tableColumn}`}>Team</div>
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

      </div>
    )
  }
}
