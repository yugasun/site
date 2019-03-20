import React from 'react'
import {
  Column,
  InlineBlock,
  Absolute,
  Card,
  Image,
  Position,
} from 'serverless-design-system'
import { getBlogLink } from 'src/utils/blog'
import facebookIcon from 'src/assets/images/facebook-black.svg'
import twitterIcon from 'src/assets/images/twitter-black.svg'
import linkedinIcon from 'src/assets/images/linkedin-black.svg'
import { ExternalLink } from 'src/fragments'

const Icon = ({ link, icon, iconHeight, iconWidth }) => (
  <Card
    bg='white'
    border='solid 1px #eaeaea'
    m='5px'
  >
    <ExternalLink to={link}>
      <Column
        height={36}
        width={36}
        p={1}
        alignItems='center'
        justifyContent='center'
      >
        <Image
          src={icon}
          maxWidth={iconWidth}
          maxHeight={iconHeight}
          objectFit='contain'
        />
      </Column>
    </ExternalLink>
  </Card>
)

export default class ShareOptions extends React.Component {
  constructor(props) {
    super(props)
    this.blogLink = `https://serverless.com${getBlogLink(props.id)}`
  }

  render() {
    const { title } = this.props

    return (
      <Position
        position='sticky'
        top='40%'
        height={0}
        width={1}
      >
        <Absolute
          display={['none', 'none', 'none', 'block']}
          right={20}
          top={23}
        >
          <InlineBlock>
            <Icon
              icon={facebookIcon}
              link={`https://www.facebook.com/sharer.php?u=${this.blogLink}`}
              iconHeight={'18px'}
              iconWidth={'10px'}
            />
            <Icon
              icon={twitterIcon}
              link={`https://twitter.com/intent/tweet?url=${this.blogLink}&text=${title}`}
              iconHeight={'15px'}
              iconWidth={'16px'}
            />
            <Icon
              icon={linkedinIcon}
              link={`https://www.linkedin.com/shareArticle?mini=true&url=${this.blogLink}&title=${title}`}
              iconHeight={'17px'}
              iconWidth={'16px'}
            />
          </InlineBlock>
        </Absolute>
      </Position>
    )
  }
}
