import React from 'react'
import { InternalLink, ExternalLink } from 'src/fragments'
import './FrameworkEditions.css'
import {
  cli,
  dashboardPage,
  monitoring,
  alerts,
  debugging,
  integrations,
  cicd,
  gettingStarted,
} from 'src/constants/urls.cn'

// TODO: change to cn after complete
import {
  plugins,
  components,
} from 'src/constants/urls'
import FrameworkLogoOpenSource from 'src/assets/images/logo-serverless-framework.png'

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
      <div id='homeEditions' className='container home-editions-component-cn'>
        <div className='container-inner home-editions-inner'>
          <div className='header-label container'>Serverless Framework</div>

          <div className='header container'>免费开源的 Serverless 框架</div>

          <div className='home-editions-list container'>
            <div className='home-edition'>
              <div className='home-edition-title'>
                <img
                  src={FrameworkLogoOpenSource}
                  alt={'serverless framework open source edition'}
                  draggable={false}
                />
              </div>

              <div className='home-edition-detail'>
                <div className='home-edition-detail-price' />
                <div className='home-edition-detail-text'>
                  使用免费的 Serverless Framework Open-Source
                  即可在几秒钟内开发和部署 Serverless。
                </div>
                <div className='home-edition-detail-features' />
              </div>

              <div className='home-edition-line'>
                <InternalLink to={cli}>
                  <div className='home-edition-detail home-edition-detail-clickable'>
                    <div className='home-edition-detail-title'>命令行工具</div>
                    <div className='home-edition-detail-text'>
                      使用 YAML + CLI 开发应用并将其快速部署到云端。
                    </div>
                  </div>
                </InternalLink>

                <InternalLink to={plugins}>
                  <div className='home-edition-detail home-edition-detail-clickable'>
                    <div className='home-edition-detail-title'>插件</div>
                    <div className='home-edition-detail-text'>
                      提供1000+ Framework CLI
                      插件，帮助开发者快速定义自己的工作流。
                    </div>
                  </div>
                </InternalLink>

                <InternalLink to={components}>
                  <div className='home-edition-detail home-edition-detail-clickable'>
                    <div className='home-edition-detail-title'>组件</div>
                    <div className='home-edition-detail-text'>
                      通过更加简单的担建，快速部署常见的 Serverless 应用。
                    </div>
                  </div>
                </InternalLink>
              </div>

              <div className='home-edition-line'>
                <InternalLink to={dashboardPage}>
                  <div className='home-edition-detail home-edition-detail-clickable'>
                    <div className='home-edition-detail-title todo'>
                      Dashboard
                    </div>
                    <div className='home-edition-detail-text'>
                      提供完整 Serverless
                      应用的告警信息，部署信息，活跃指标等报表信息。
                    </div>
                  </div>
                </InternalLink>

                <InternalLink to={monitoring}>
                  <div className='home-edition-detail home-edition-detail-clickable'>
                    <div className='home-edition-detail-title todo'>监控</div>
                    <div className='home-edition-detail-text'>
                      针对 Serverless
                      应用的即时，强大的指标监控，包括使用率，性能，错误信息等。
                    </div>
                  </div>
                </InternalLink>

                <InternalLink to={cicd}>
                  <div className='home-edition-detail home-edition-detail-clickable'>
                    <div className='home-edition-detail-title todo'>CI/CD</div>
                    <div className='home-edition-detail-text'>
                      提供完善的 CI/CD 功能，轻松测试和部署 Serverless 应用。
                    </div>
                  </div>
                </InternalLink>
              </div>

              <div className='home-edition-line'>
                <InternalLink to={alerts}>
                  <div className='home-edition-detail home-edition-detail-clickable'>
                    <div className='home-edition-detail-title todo'>告警</div>
                    <div className='home-edition-detail-text'>
                      无需配置的实时警报，包括部署告警，错误告警，异常持续时间，超时等。
                    </div>
                  </div>
                </InternalLink>

                <InternalLink to={debugging}>
                  <div className='home-edition-detail home-edition-detail-clickable'>
                    <div className='home-edition-detail-title todo'>调试</div>
                    <div className='home-edition-detail-text'>
                      使用资源管理工具可轻松查询每个调用的详细信息，帮助开发者查找问题，性能优化等。
                    </div>
                  </div>
                </InternalLink>

                <InternalLink to={integrations}>
                  <div className='home-edition-detail home-edition-detail-clickable'>
                    <div className='home-edition-detail-title todo'>
                      信息整合
                    </div>
                    <div className='home-edition-detail-text'>
                      可将告警信息，指标参数等发送到企业微信，电子邮件，Webhooks
                      和其他 Ops 工具。
                    </div>
                  </div>
                </InternalLink>
              </div>

              <InternalLink
                to={gettingStarted}
              >
                <div className='home-edition-action'>
                  <div className='home-edition-action-button'>下载</div>
                </div>
              </InternalLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
