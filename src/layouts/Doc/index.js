/**
 * Base Doc template
 */
import React, { Component, PropTypes } from 'react'
import { BodyContainer } from 'phenomic'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'
import Helmet from 'react-helmet'
import debounce from 'lodash.debounce'
import gitHubSvg from '../../assets/icons/github.svg'
import generatedMenu from './generated-menu'
import Shell from '../Default'
import Breadcrumbs from '../../components/Breadcrumbs'
// Global styles are used to style html classes from github markdown files
import globalStyles from './Doc.global.css' // eslint-disable-line
import styles from './Doc.css'

/*
TODO: add previous release tag links https://developer.github.com/v3/repos/releases/
*/

class Doc extends Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.sidebarNode = null
    this.sidebarNodeOffset = null
  }
  componentDidMount() {
    if (window.outerWidth > 600) {
      window.addEventListener('scroll', debounce(this.handleScroll, 10))
      window.addEventListener('resize', debounce(this.handleScroll, 10))
      this.sidebarNode = this.refs.sidebar
      this.sidebarNodeOffset = this.sidebarNode.offsetTop
      this.handleScroll()
    }
    initializeSearch()
  }
  handleScroll = (_event) => {
    /* TODO: make editLink fixed */
    const offsetHeigh = window.pageYOffset || document.documentElement.scrollTop
    const stickyNavHeight = 70
    const cachedOffset = this.sidebarNodeOffset - stickyNavHeight
    if (offsetHeigh >= cachedOffset) {
      if (this.sidebarNode.style.position !== 'fixed') {
        this.sidebarNode.style.position = 'fixed'
        this.sidebarNode.style.top = `${stickyNavHeight}px`
        // this.sidebarNode.style.background = 'red'
      }
    } else {
      this.sidebarNode.style.position = 'relative'
      this.sidebarNode.style.top = '0px'
      // this.sidebarNode.style.background = 'white'
    }
  }
  renderList() {
    const { __url } = this.props
    const trimmedURL = __url.replace(/\/$/, '')
    const menu = generatedMenu[__url] || generatedMenu[trimmedURL]
    let items = ''
    if (menu) {
      items = menu.map((item, i) => {
        const currentStyle = (item.path === trimmedURL) ? styles.currentURL : ''
        return (
          <li key={i} className={`${styles.subPageLink} ${currentStyle}`}>
            <Link to={item.path}>
              {item.title}
            </Link>
          </li>
        )
      })
    }
    return items
  }
  renderNewSidebar() {
    const { __url } = this.props
    const items = this.renderList()
    console.log('__url', __url)
    const trimmedURL = __url.replace(/\/$/, '')
    const parent = trimmedURL.split('/')
    const parentName = parent[parent.length - 2]
    let parentDisplay = parentName

    if (parentName === 'aws') {
      parentDisplay = 'AWS'
    } else if (parentName === 'framework') {
      parentDisplay = 'Framework Docs'
    }
    return (
      <div className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <div className={styles.searchBumper}>
            <div ref='sidebar' className={styles.searchWrapper}>
              <input
                className={styles.searchBox}
                id='algolia-search'
                placeholder='&#9889;  Search docs'
                type='text'
              />
            </div>
          </div>

          <div className={styles.pageContext}>
            {parentDisplay}
          </div>

          <div className={styles.subPages}>
            <ul>
              {items}
            </ul>
          </div>


          <div className={styles.versionNumber}>
            Docs Version: {process.env.DOCS_VERSION}
          </div>
        </div>
      </div>
    )
  }
  render() {
    const {
      __url,
      head,
      body,
      isLoading,
    } = this.props
    let githubURL
    if (isLoading) {
      githubURL = ''
    } else {
      githubURL = `https://github.com/serverless/serverless/edit/master${head.gitLink}`
    }

    const markdownContent = (
      <BodyContainer>
        {body}
      </BodyContainer>
    )

    const breadcrumbs = (
      <div className={styles.breadCrumbContainer}>
        <Breadcrumbs path={__url} />
        <span ref='editLink' className={styles.editLink}>
          <Svg svg={gitHubSvg} cleanup />
          <a target='_blank' rel='noopener noreferrer' href={githubURL}>
            Edit on github
          </a>
        </span>
      </div>
    )
    return (
      <Shell {...this.props} className={`${styles.docPage} docs-breadcrumbs`} header={breadcrumbs}>
        <Helmet
          link={[
            {
              rel: 'stylesheet',
              href: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css'
            }
          ]}
          script={[
            {
              src: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js', type: 'text/javascript'
            }
          ]}
        />
        <div className={styles.docContainer}>
          <div className={styles.docWrapper}>

            {this.renderNewSidebar()}

            <div className={`${styles.content} docs-content`}>

              {markdownContent}

            </div>
          </div>
        </div>
      </Shell>
    )
  }
}

function initializeSearch() {
  if (typeof docsearch !== 'undefined') {
    docsearch({ // eslint-disable-line
      apiKey: 'd5a39b712b86965d93534207ef5423df',
      indexName: 'serverless',
      inputSelector: '#algolia-search',
      debug: false
    })
  } else {
    setTimeout(() => {
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
