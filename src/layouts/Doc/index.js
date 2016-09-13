/**
 * Base Doc template
 * https://github.com/reactjs/react-router/blob/master/docs/API.md#withroutercomponent-options
 */
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import invariant from 'invariant'
import { BodyContainer, joinUri } from 'phenomic'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Link } from 'react-router'
import generatedMenu from './generated-menu'
import Svg from 'react-svg-inline'
import debounce from 'lodash/debounce'
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
        // const title = (item.name && item.name.length > 35) ? item.name : null
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
        <div ref='sidebar'>
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
    const { props, context } = this

    const {
      pkg,
    } = context.metadata

    const {
      __filename,
      __url,
      head,
      body,
      header,
      footer,
      fullWidth
    } = props

    invariant(
      typeof head.title === 'string',
      `Your page '${__filename}' needs a title`
    )

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: metaTitle },
      {
        property: 'og:url',
        content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      },
      { property: 'og:description', content: head.description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: metaTitle },
      { name: 'twitter:creator', content: `@${pkg.twitter}` },
      { name: 'twitter:description', content: head.description },
      { name: 'description', content: head.description },
    ]

    /* Markdown content will display if it exists */
    const markdownContent = (
      <BodyContainer>
        {body}
      </BodyContainer>
    )

    const contentWrapperClass = (fullWidth) ? styles.fullWidth : styles.page

    return (
      <div className={styles.docContainer}>
        <Helmet title={metaTitle} meta={meta} />

        <div className={contentWrapperClass}>
          <Breadcrumbs path={__url} />
          {header}
          <div className={styles.docWrapper}>
            {this.renderSidebar()}
            <div className={styles.content}>
              <span className={styles.editLink}>
                <Svg svg={gitHubSvg} cleanup />
                <a
                  target='_blank'
                  href={'https://github.com/serverless/serverless/edit/master' + head.gitLink}>
                    Edit on github
                </a>
              </span>
              {markdownContent}
            </div>
          </div>

          {props.children}
        </div>
        {footer}
        <div dangerouslySetInnerHTML={{__html: props.head.script}} />
      </div>
    )
  }
}

Doc.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  __filename: PropTypes.string.isRequired,
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
