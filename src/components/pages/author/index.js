import React from 'react'
import { Column, ResponsiveStack } from 'serverless-design-system'
import { AppContainer, SubscribeModal } from 'src/components'

import Avatar from './Profile/Avatar'
import Bio from './Profile/Bio'
import Links from './Profile/Links'
import Blogs from './Blogs/Blogs'

const Profile = ({ author, allBlog }) => {
  const edges = allBlog ? (allBlog.edges || []) : []

  return (
  <React.Fragment>
    <SubscribeModal />
    <AppContainer>
      <ResponsiveStack mt={[2, 2, 3, 4, 5]} flexDirection={['column', 'column', 'column', 'row']} alignItems={['normal', 'normal', 'center', 'normal']}>
          <Column
            width={[1, 1, 0.6, 0.5, 0.25]}
            alignItems={["center", "center", "center", "center", "flex-end"]}
            my={2}
          >
            <Avatar avatar={author.avatar} />
            <Links
              personalWebsite={author.site}
              githubHandle={author.github}
              twitterHandle={author.twitter}
              mediumHandle={author.medium}
            />
          </Column>
          <Column
            width={[1, 1, 1, 0.7, 0.7, 0.8]}
            alignItems='left'
            my={3}
            ml={[0, 0, 0, '5.5%']}
          >
            <Bio
              authorName={author.name}
              bio={author.bio.long || author.bio.short}
            />

            <Blogs
              authorName={author.name.split(' ')[0]}
              blogs={edges.map(({ node }) => (node))}
            />
          </Column>
        </ResponsiveStack>
    </AppContainer>
  </React.Fragment>
)
}

Profile.defaultProps = { author: {} }
export default Profile
