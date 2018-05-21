import React from 'react'
import styles from './styles.css'
import { Link } from 'react-router'
import { getCategoryNameFromPath } from '../util.js'
import authorData from '../generated-authors.json'

const FeaturedPost = ({
  image,
  category,
  title,
  description,
  author,
  url,
  displayedWhere='blog'
}) => {

  const { name: authorName, avatar: authorAvatar } = authorData[author]

  const PostLink = props => (
    <Link
      to={ url }
      { ...props }
    />
  )

  return (
    <div className={ styles.container }>
      <div>
        {
          displayedWhere == 'blog' &&
            <PostLink>
              <div
                className={ styles.image }
                style={{ backgroundImage : `url(${ image })` }}
              ></div>
            </PostLink>
        }
        {
          category
            ? (
                <div className={ styles.category }>
                  <Link to={ `/blog/category/${ category }` }>
                    <div>{ getCategoryNameFromPath(category) }</div>
                  </Link>
                </div>
              )
            : (
                <div className={ styles.category }>
                  <div>uncategorized</div>
                </div>
              )
        }
        <div className={ styles.title }>
          {
            displayedWhere === 'blog'
              ? (
                  <PostLink>
                    <div>{ title }</div>
                  </PostLink>
                )
              : <div>{ title }</div>
          }
        </div>
        <div className={ styles.description }>
          { description }
        </div>
        <div className={ styles.authorshipLabel }>
          <div className={ styles.writtenBy }>
            Written<br/>by
          </div>
          <div className={ styles.avatar }>
            {
              (() => {
                let avatarSections = []
                for(let i = 0; i < 3; i++) {
                  avatarSections.push(
                    <div
                      style={{ backgroundImage: `url(${ authorAvatar })` }}
                    ></div>
                  )
                }
                return avatarSections
              })()
            }
          </div>
          <div className={ styles.name }>
            { authorName.split(' ')[0] }
            <br />
            { authorName.split(' ')[1] }
          </div>
        </div>
        {
          displayedWhere == 'post' &&
            <div
              className={ styles.image }
              style={{ backgroundImage : `url(${ image })` }}
            ></div>
        }
      </div>
    </div>
  )
}

export default FeaturedPost