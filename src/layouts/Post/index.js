import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { BodyContainer } from 'phenomic-serverless'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'
import Default from '../Default'
import authorData from '../../pages/Blog/generated-authors.json'
import ContentLoading from '../../components/ContentLoading/Paragraph'
import FixedSocialButtons from '../../components/FixedSocialButtons'
import NewsletterCTA from '../../fragments/NewsletterCTA'
import Block from '../../components/Block'
import BetaCTA from '../../fragments/BetaCTA'
import AuthorCTA from '../../fragments/AuthorCTA'
import gitHubSvg from '../../assets/icons/github.svg'
import styles from './Post.css'
import disqus from './disqus-script'

class Post extends Component {
  static hasLoadingState = true
  render() {
    const { props } = this
    const { head, body, isLoading, loadingData } = props
    let pageDate
    let postMeta
    let githubURL
    let author
    let authorBio
    let avatarURL
    let markdownContent
    let title = (head) ? head.title : 'Default Loading Title'

    if (loadingData && loadingData.title) {
      title = loadingData.title
    }

    if (!isLoading) {
      if (head.authors && Array.isArray(head.authors)) {
        // console.log('page.authors', page.authors)
        const authorInfo = head.authors.map((a) => {
          return authorData[a]
        })
        const authorNames = authorInfo.map((auth) => {
          return auth.name
        })
        // console.log('authorInfo', authorInfo)
        if (authorNames.length < 2) {
          // single author
          author = authorNames[0]
          // console.log('authorInfo[0].avatar', authorInfo[0].avatar)
          avatarURL = (authorInfo[0].avatar) ? authorInfo[0].avatar : false
          authorBio = (authorInfo[0].bio && authorInfo[0].bio.long) ? authorInfo[0].bio.long : false
          if (!authorBio) {
            authorBio = (authorInfo[0].bio && authorInfo[0].bio.short) ? authorInfo[0].bio.short : false
          }
        }
      }

      pageDate = head.date ? new Date(head.date) : null
      const actualDate = new Date(pageDate.getTime() + Math.abs(pageDate.getTimezoneOffset() * 60000))
      const prettyDate = actualDate.toDateString().split(" ")
      prettyDate.splice(0, 1)

      let postDataContent

      if (pageDate) {
        postDataContent = (
          <span className={styles.publishMeta}>
          Written by {author}.&nbsp;
            <time key={actualDate.toISOString()}>
              {prettyDate.join(" ")}
            </time>
          </span>
        )
      }
      markdownContent = (
        <BodyContainer>
          {body}
        </BodyContainer>
      )
      githubURL = `https://github.com/serverless/blog/edit/master/posts${head.gitLink}`
      postMeta = (
        <header className={styles.postMeta}>
          {postDataContent}
          <span className={styles.editLink}>
            <Svg svg={gitHubSvg} cleanup />
            <a target='_blank' rel='noopener noreferrer' href={githubURL}>
              Edit this post
            </a>
          </span>
        </header>
      )

      title = head.title


    }

    let authorBox
    if (author) {
      authorBox = (
        <div className={styles.authorBox}>
          <div className={styles.authorImage}>
            <img src={avatarURL} role='presentation' />
          </div>
          <div className={styles.authorDetails}>
            <h3>About {author}</h3>
            <div className={styles.authorBio}>{authorBio}</div>
          </div>
        </div>
      )
    }

    if (isLoading) {
      markdownContent = (
        <div className={styles.loadingWrapper}>
          <ContentLoading numberOfLines={30} />
        </div>
      )
    }

    return (
      <Default {...props} fullWidth className={styles.postPage}>
        <FixedSocialButtons
          url={`https://serverless.com${this.props.__url}`}
          title={title}
          editLink={githubURL}
        />
        <div className={styles.postWrapper}>
          <div className={styles.contentWrapper}>

            <h1 className={styles.title}>{title}</h1>

            <div className={styles.postMetaWrapper}>
              {postMeta}
            </div>
            <div className={styles.postContent}>
              {markdownContent}
              {authorBox}
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.aboutBlog}>
              <h2>Serverless Blog</h2>
              <h3>The blog on serverless and event driven compute</h3>
            </div>

            <div className={styles.getStarted}>
              <h3>New to serverless?</h3>
              <p>Run the following commands to get started today</p>
              <code>
                npm install serverless -g
              </code>
            </div>

            <div className={styles.quickLinks}>
              <h2>Quick Links</h2>
              <div className={styles.sidebarLinks}>
                <Link to='/framework/docs'>
                  Serverless documentation
                </Link>
              </div>
              <div className={styles.sidebarLinks}>
                <a href='https://gitter.im/serverless/serverless' target='_blank' rel='noopener noreferrer'>
                  Chat in Gitter
                </a>
              </div>
              <div className={styles.sidebarLinks}>
                <a href='http://forum.serverless.com' target='_blank' rel='noopener noreferrer'>
                  Ask Questions on the Forum
                </a>
              </div>
            </div>
            <NewsletterCTA style={{ marginBottom: '20px' }} black={true} />
            </div>
        </div>
        <div className={styles.comments} id='disqus_thread' />
        <Helmet script={[{ type: 'text/javascript', innerHTML: disqus }]} />
      </Default>
    )
  }
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
  __url: PropTypes.string,
  phenomicLoading: PropTypes.bool,
}

export default Post
