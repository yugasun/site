/**
 * Base Doc template
 */
import React, { Component, PropTypes } from 'react'
import { BodyContainer } from 'phenomic'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'
import gitHubSvg from '../../assets/icons/github.svg'
import debounce from 'lodash/debounce'
import generatedMenu from './generated-menu'
import Shell from '../Default'
import Breadcrumbs from '../../components/Breadcrumbs'
import styles from './Doc.css'
import Helmet from 'react-helmet'

/*
TODO: add previous release tag links https://developer.github.com/v3/repos/releases/
*/

class Doc extends Component {
  constructor (props, context) {
    super(props, context)
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
    initializeSearch()
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
      this.sidebarNode.style.top = '0px'
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
      <div className={styles.sidebar + ' docs-sidebar'}>
        <div ref='sidebar' className={styles.sidebarInner}>
          <div className={styles.searchWrapper}>
            <input className={styles.searchBox} id='algolia-search'
              placeholder='&#9889;  Search docs' type='text' />
          </div>
          <div className={styles.sidebarBlock}>
            <div className={styles.sidebarLinks}>
              <a href='https://gitter.im/serverless/serverless'>
                Join chat on Gitter
              </a>
            </div>
            <div className={styles.sidebarLinks}>
              <a href='http://forum.serverless.com'>
                Read Serverless Forum
              </a>
            </div>
          </div>
          {childrenItems}
          {parentItems}
          <div className={styles.versionNumber}>
            Docs Version: {process.env.DOCS_VERSION}
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
      <div className={styles.breadCrumbContainer}>
        <Breadcrumbs path={__url} />
      </div>
    )
    return (
      <Shell {...this.props} className={styles.docPage + ' docs-breadcrumbs'} header={breadcrumbs}>
        <Helmet
          link={[
            {
              'rel': 'stylesheet',
              'href': 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css'
            }
          ]}
          script={[
            {
              'src': 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js', 'type': 'text/javascript'
            }
          ]}
        />
        <div className={styles.docContainer}>
          <div className={styles.docWrapper}>

            {this.renderSidebar()}

            <div className={styles.content + ' docs-content'}>
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

function initializeSearch () {
  if (typeof docsearch !== 'undefined') {
    docsearch({ // eslint-disable-line
      apiKey: 'd5a39b712b86965d93534207ef5423df',
      indexName: 'serverless',
      inputSelector: '#algolia-search',
      debug: false
    })
  } else {
    setTimeout(function () {
      initializeSearch()
    }, 50)
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

export default Doc
