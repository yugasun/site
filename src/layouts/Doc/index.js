/**
 * Base Doc template
 * https://github.com/reactjs/react-router/blob/master/docs/API.md#withroutercomponent-options
 */
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import invariant from 'invariant'
import { BodyContainer, joinUri } from 'phenomic'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import styles from './Doc.css'
// import axios from 'axios'
// const isClient = typeof window !== 'undefined'
// (function () {
//   window.smoothtocer = function ($toc_container, $content) {
//     var $headingLevel, $link, $menuItem, $newSubmenu, $stepsUp, $targetNode, $thisHeadingLevel, $toc, heading, k$, _i, _len, _ref
//     k$ = new Object()
//     k$.$$ = function (el) {
//       return document.querySelectorAll(el)
//     }
//     k$.$ = function (el) {
//       return k$.$$(el)[0]
//     }
//     k$.slugify = function (str) {
//       return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
//     }
//     if ($toc_container) {
//       $toc = document.createElement('ul')
//       $link = document.createElement('li')
//       $link.innerHTML = '<a></a>'
//       $headingLevel = 1
//       $targetNode = $toc
//       _ref = $content.querySelectorAll('h1, h2, h3, h4, h5, h6')
//       for (_i = 0, _len = _ref.length; _i < _len; _i++) {
//         heading = _ref[_i]
//         if (!heading.classList.contains('toc-exempt')) {
//           heading.id = k$.slugify(heading.innerHTML)
//           $thisHeadingLevel = parseInt(heading.tagName.substr(1, 2))
//           if ($thisHeadingLevel > $headingLevel) {
//             $newSubmenu = document.createElement('ul')
//             $targetNode.children[$targetNode.children.length - 1].appendChild($newSubmenu)
//             $targetNode = $newSubmenu
//             $headingLevel = $thisHeadingLevel
//           }
//           if ($thisHeadingLevel < $headingLevel) {
//             $stepsUp = $headingLevel - $thisHeadingLevel
//             while ($stepsUp > 0) {
//               $targetNode = $targetNode.parentNode.parentNode
//               $stepsUp--
//             }
//             $headingLevel = $thisHeadingLevel
//           }
//           $menuItem = $link.cloneNode(true)
//           $menuItem.querySelector('a').href = '#' + heading.id
//           $menuItem.querySelector('a').innerHTML = heading.innerHTML
//           $targetNode.appendChild($menuItem)
//         }
//       }
//       return $toc_container.appendChild($toc)
//     } else {
//       return console.error('Did not find a Table of Contents container. Found: ' + $toc_container)
//     }
//   }
// }).call(this)

// function getMenu () {
//   if (isClient) {
//     axios({
//       method: 'get',
//       url: window.location.href + 'menu.json',
//     }).then(function (response) {
//       console.log(response.data)
//       // console.log(response.status);
//       // console.log(response.statusText);
//       // console.log(response.headers);
//       // console.log(response.config);
//     }).catch(function (error) {
//       console.log(error)
//     })
//   }
// }

class Doc extends Component {
  componentDidMount () {
    // var content = document.querySelectorAll('.phenomic-BodyContainer')[0]
    // var target = document.querySelectorAll('.toc')[0]
    // smoothtocer(target, content)
    // var test = getMenu()
    // console.log(test)
  }
  renderSidebar () {
    return (
      <div className={styles.sidebar}>
        <div className={styles.toc + ' toc'}>
        </div>
        <div className={styles.subPages}>
          Sub page links
          <ul>
            <li>sub page link 1</li>
            <li>sub page link 2</li>
          </ul>
        </div>
        <div>
          Level up links
          <ul>
            <li>parent link 1</li>
            <li>parent link 2</li>
          </ul>
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
      <div>
        <Helmet title={metaTitle} meta={meta} />

        <div className={contentWrapperClass}>
          <Breadcrumbs path={__url} />
          {header}
          <div className={styles.docWrapper}>
            {false && this.renderSidebar()}
            <div className={styles.content}>
              <a
                className={styles.editLink}
                href={'https://github.com/serverless/serverless/edit/master' + head.gitLink}>
                Edit on github
              </a>
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
}

export default Doc
