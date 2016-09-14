/**
 * Base Doc template
 */
import React, { Component, PropTypes } from 'react'
import { BodyContainer } from 'phenomic'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'
import debounce from 'lodash/debounce'
import generatedMenu from './generated-menu'
import Shell from '../Page'
import Breadcrumbs from '../../components/Breadcrumbs'
import gitHubSvg from '../../assets/icons/iconmonstr-github-1.svg'
import styles from './Doc.css'

class Doc extends Component {
  static contextTypes = {
    auth: React.PropTypes.object.isRequired,
  };
  constructor (props, context) {
    super(props, context)

    const auth = this.context.auth
    const loggedIn = auth.loggedIn()
    this.state = {
      active: false,
      showModal: false,
      isLoggedIn: loggedIn,
    }
    this.login = auth.login.bind(this)
    this.logout = auth.logout.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.sidebarNode = null
    this.sidebarNodeOffset = null
  }
  componentDidMount () {
    if (window.outerWidth > 600) {
      window.addEventListener('scroll', debounce(this.handleScroll, 10))
      window.addEventListener('resize', debounce(this.handleScroll, 10))
      this.sidebarNode = this.refs.sidebar
      this.sidebarNodeOffset = this.sidebarNode.offsetTop
      this.handleScroll()
    }
  }
  handleScroll (event) {
    const offsetHeigh = window.pageYOffset || document.documentElement.scrollTop
    if (offsetHeigh >= this.sidebarNodeOffset) {
      if (this.sidebarNode.style.position !== 'fixed') {
        this.sidebarNode.style.position = 'fixed'
        this.sidebarNode.style.top = '10px'
      }
    } else {
      this.sidebarNode.style.position = 'relative'
    }
  }
  renderParentList () {
    const { __url } = this.props
    const trimmedURL = __url.replace(/\/$/, '')
    const urlArray = trimmedURL.split('/')
    urlArray.pop()
    const correctURL = urlArray.join('/')
    const menu = generatedMenu[correctURL] || generatedMenu[correctURL + '/']
    let renderItems
    if (menu && menu.children) {
      renderItems = menu.children.map(function (item, i) {
        const currentStyle = (item.path === trimmedURL) ? styles.currentURL : ''
        return (
          <li key={i} className={styles.subPageLink + ' ' + currentStyle}>
            <Link to={item.path} >
              {item.title}
            </Link>
          </li>
        )
      })
    }
    if (renderItems) {
      return (
        <div className={styles.subPages}>
          <span className={styles.subPageLinkHeading}>Jump to:</span>
          <ul>
            {renderItems}
          </ul>
        </div>
      )
    }
  }
  renderChildrenList () {
    const { __url } = this.props
    const trimmedURL = __url.replace(/\/$/, '')
    const menu = generatedMenu[__url] || generatedMenu[trimmedURL]
    let renderItems
    if (menu && menu.children) {
      renderItems = menu.children.map(function (item, i) {
        const currentStyle = (item.path === trimmedURL) ? styles.currentURL : ''
        return (
          <li key={i} className={styles.subPageLink + ' ' + currentStyle}>
            <Link to={item.path}>
              {item.title}
            </Link>
          </li>
        )
      })
    }
    if (renderItems) {
      return (
        <div className={styles.subPages}>
          <span className={styles.subPageLinkHeading}>Sections</span>
          <ul>
            {renderItems}
          </ul>
        </div>
      )
    }
  }
  renderSidebar () {
    const childrenItems = this.renderChildrenList()
    const parentItems = this.renderParentList()
    return (
      <div className={styles.sidebar}>
        <div ref='sidebar' className={styles.sidebarInner}>
          {childrenItems}
          {parentItems}
          <div className={styles.cta} onClick={this.login}>
            The Serverless Platform is coming
            <div className={styles.ctaText}>Sign up for early access</div>
          </div>
        </div>
      </div>
    )
  }
  render () {
    const {
      __url,
      head,
      body,
    } = this.props

    const githubURL = 'https://github.com/serverless/serverless/edit/master' + head.gitLink

    const markdownContent = (
      <BodyContainer>
        {body}
      </BodyContainer>
    )

    const breadcrumbs = (
      <Breadcrumbs className={styles.breadCrumbContainer} path={__url} />
    )

    return (
      <Shell {...this.props} header={breadcrumbs}>
        <div className={styles.docContainer}>
          <div className={styles.docWrapper}>

            {this.renderSidebar()}

            <div className={styles.content}>
              <span className={styles.editLink}>
                <Svg svg={gitHubSvg} cleanup />
                <a target='_blank' href={githubURL}>
                  Edit on github
                </a>
              </span>

              {markdownContent}

            </div>
          </div>
        </div>
      </Shell>
    )
  }
}

Doc.propTypes = {
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
  /** if true, page will be full width */
  fullWidth: PropTypes.bool,
}

Doc.contextTypes = {
  metadata: PropTypes.object.isRequired,
  auth: React.PropTypes.object.isRequired,
}

export default Doc
