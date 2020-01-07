import React from 'react'
import { InternalLink, ExternalLink } from 'src/fragments'
import {
  overview,
  gettingStarted,
  github,
  pluginTutorial,
  componentTutorial,
  deployPractice,
  demoPractice,
  community,
  blog,
  forum,
} from 'src/constants/urls.cn'

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
          <div className='header-label container'>Serverless 生态</div>

          <div className='header container'>Serverless 开发者生态</div>

          <div className='paradigm-guide-steps container-inner'>
            <div className='paradigm-guide-step'>
              <div className='paradigm-guide-step-title'>视频教程</div>
              <div className='paradigm-guide-step-description'>
                通过简单易懂的视频，帮助开发者快速了解并上手serverless相关知识体系
              </div>
              <ExternalLink to={overview}>
                <div className='paradigm-guide-step-action'>概述</div>
              </ExternalLink>
              <InternalLink to={gettingStarted}>
                <div className='paradigm-guide-step-action'>快速使用</div>
              </InternalLink>
              <InternalLink to={pluginTutorial}>
                <div className='paradigm-guide-step-action'> 插件教程</div>
              </InternalLink>
              <ExternalLink to={componentTutorial}>
                <div className='paradigm-guide-step-action'>组件教程</div>
              </ExternalLink>
            </div>

            <div className='paradigm-guide-step'>
              <div className='paradigm-guide-step-title'>快速使用</div>
              <div className='paradigm-guide-step-description'>
                通过简单易懂的文档，数秒内即可快速部署无服务器用例
              </div>
              <InternalLink to={gettingStarted}>
                <div className='paradigm-guide-step-action'>入门文档</div>
              </InternalLink>
              <ExternalLink to={deployPractice}>
                <div className='paradigm-guide-step-action'>部署实战</div>
              </ExternalLink>
              <ExternalLink to={demoPractice}>
                <div className='paradigm-guide-step-action'>案例实践</div>
              </ExternalLink>
              <ExternalLink to={github}>
                <div className='paradigm-guide-step-action'>Github项目</div>
              </ExternalLink>
            </div>

            <div className='paradigm-guide-step'>
              <div className='paradigm-guide-step-title'>中文社区</div>
              <div className='paradigm-guide-step-description'>
                提供完整的中文社区，帮助引导开发者快速解决问题
              </div>
              <ExternalLink to={community}>
                <div className='paradigm-guide-step-action'>社区首页</div>
              </ExternalLink>
              <ExternalLink to={blog}>
                <div className='paradigm-guide-step-action'>博客</div>
              </ExternalLink>
              <ExternalLink to={forum}>
                <div className='paradigm-guide-step-action'>论坛</div>
              </ExternalLink>
            </div>
          </div>
        </div>

        {/* Paradigm Mission */}

        <div className='container paradigm-mission'>
          <div className='container-inner paradigm-mission-inner'>
            <div className='paradigm-mission-icon container'>ß</div>

            <div className='header-label container'>关于 Serverless</div>

            <div className='header container'>Serverless面向未来的运维方式</div>

            <div className='paradigm-mission-statement container-inner'>
              <p>
                网络应用正在慢慢改变世界，但是大多数互联网企业仍然无法顺畅交付工程，更不用说敏捷开发和快速迭代了。
                <b>所以我们必须从根本上简化应用工程的交付和操作。</b>
              </p>
              <p>
                这就是
                <b>无服务器架构</b>
                所提供的serverless建立在下一代公共云服务之上，该服务仅在使用时自动扩容和收费。当规模，
                所用容量和成本管理实现自动化时，可节省99%的成本管理。
              </p>
              <p>
                无服务器架构是全新的，因此我们需要改变先前对老架构和工作流的看法。serverless
                的目标是以一种简单，强大
                而优雅的使用体验为开发者，团队提供开发和运行serverless应用程序所需的所有工具。
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
