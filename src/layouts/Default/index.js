/**
 * Base Page template
 */
import React, { PropTypes } from 'react'
import { BodyContainer, joinUri } from 'phenomic-serverless'
import Helmet from 'react-helmet'
import classnames from 'classnames'
import getCustomScripts from '../../fragments/CustomScripts'
import Button from '../../components/Button'
import Separator from '../../components/Separator'
import Header from '../../fragments/Header'
import Hero from '../../fragments/Hero'
import Footer from '../../fragments/Footer'
import styles from './Default.css'

const propTypes = {
  /** classname applied to wrapper */
  className: PropTypes.string,
  /** if true, page will be full width */
  fullWidth: PropTypes.bool,
  whiteLogo: PropTypes.bool,
  coloredHeader: PropTypes.bool,
  headerHideCTA: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  head: PropTypes.object,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  renderPrefooter: PropTypes.func,
  __url: PropTypes.string,
  prefetches: PropTypes.array,
}

const DefaultLayout = (props) => {
  const {
    __url,
    head,
    body,
    header,
    footer,
    renderPrefooter,
    children,
    className,
    fullWidth,
    whiteLogo,
    coloredHeader,
    headerHideCTA,
    headerHideSignUp,
    isLoading,
    prefetches,
  } = props

  let metaTitle
  let meta = []
  let link = []
  let wrapperClass = (fullWidth) ? styles.fullWidth : styles.page,
      heroImage = null
  let hero
  let hasHero
  if (!isLoading && head) {
    const uri = joinUri(process.env.PHENOMIC_USER_URL, __url)
    hasHero = head.heroTitle || head.heroSubTitle || head.heroBackground
    metaTitle = head.metaTitle || head.title
    meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    { property: 'og:url', content: uri },
    { property: 'og:description', content: head.description },
    { property: 'og:image', content: `${process.env.S3_BUCKET}logos/Serverless_mark_black_400x400_v3%402x.jpg` },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${process.env.TWITTER}` },
    { name: 'twitter:description', content: head.description },
    { name: 'description', content: head.description },
    ]

    if (head.thumbnail) {
      meta.push({ property: 'og:image', content: head.thumbnail })
    }

    if (head.rss) {
      link.push({ rel: 'alternate', type: 'application/rss+xml', href: head.rss, title: metaTitle })
    }

    if (prefetches && prefetches instanceof Array) {
      prefetches.forEach(prefetchLink => {
        link.push({ rel: 'prefetch', href: prefetchLink })
      })
    }

    wrapperClass = (head.fullWidth || fullWidth) ? styles.fullWidth : styles.page

    // TODO: refactor this out of default template completely
    if (head.heroImage) {
      heroImage = <div className={styles.hero} style={{ backgroundImage: `url(${head.heroImage})` }} />
    }


    if (hasHero) {
      hero = (
        <Hero
          title={head.heroTitle}
          subTitle={head.heroSubTitle}
          background={head.heroBackground}
        />
      )
    }
  }

  // Remove jumpy footer with loading state
  let footerRender
  if (!isLoading) {
    footerRender = <Footer renderPrefooter={renderPrefooter} />
  }

  /* Markdown content will display if it exists */
  const bodyContent = body || ''

  const componentsMap = {
    Separator: Separator,
    Button: Button,
    Hero: Hero
  }
  // components={componentsMap} for future use of components via markdown

  const markdown = (
    <BodyContainer>
      {bodyContent}
    </BodyContainer>
  )

  const pageClass = (head) ? `layout-${head.layout.toLowerCase()}` : ''
  const classes = classnames(
    styles.base,
    wrapperClass,
    className,
  )
  const customScripts = getCustomScripts(head)
  return (
    <div id='base' className={pageClass}>
      <Helmet title={metaTitle} meta={meta} link={link} />
      <style>{".async-hide { opacity: 0 !important} "}</style>
      <script>{`(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
      h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
      (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
    })(window,document.documentElement,'async-hide','dataLayer',4000,
    {'GTM-M5WQLDN':true});`}</script>
      <Header />
      {hero}
      <div className={classes}>
        {header}
        {children || markdown}
        {footer}
      </div>
      {footerRender}
      {customScripts}
    </div>
  )
}

DefaultLayout.hasLoadingState = true
DefaultLayout.propTypes = propTypes
export default DefaultLayout
