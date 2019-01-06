import React from 'react'
import { Box } from 'serverless-design-system'
import { AppContainerNewest as AppContainer, NewsLetterForm } from 'src/components'
import { getAuthorById } from 'src/utils/blog'
import AuthorCard from './AuthorCard'
import ContentWrapper from './ContentWrapper'
import Frontmatter from './Frontmatter'
import HeroImage from './HeroImage'
import SubscribeOptionDesktop from './SubscribeOptionDesktop'
import SubscribeOptionMobileAndTablet from './SubscribeOptionMobileAndTablet'
import ShareOptions from './ShareOptions'
import ReactModal from 'react-modal'
import logo from 'src/assets/images/blog-logo.svg'
import { Logo, Image, Row, 
  Flex,
  Heading} from 'serverless-design-system'
import closeIcon from 'src/assets/images/icon-close.png'
import { Button, P } from 'src/fragments/DesignSystem'

const modalStyles = {
  content: {
    top: 0,
    left: 0,
    right: 0,
    height: '496px',
    background : 'linear-gradient(155deg,rgb(0,0,0) 50%,#70221f)'
  },
  overlay: {
    zIndex: 1000,
    width: '100%'
  }
}

const Title = ({ component: HeadingComp, color }) => (
  <HeadingComp
    color={color}
    fontFamily='SoleilLt'
    letterSpacing='0'
    lineHeight={2}
    align={['center', 'center', 'center', 'center', 'left']}
  >
    Join 16,000 other developers and keep up to speed on the latest serverless news and releases.
    <P color='gray.3'>
      Don’t worry. You can unsubscribe whenever you want.
    </P>
  </HeadingComp>
)

const SubmitButton = (props) => (
  <Button
    width={['228px', '228px', '228px', '228px', '123px']}
    {...props}
  >
    subscribe
  </Button>
)

export default class BlogContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  componentDidMount() {
    ReactModal.setAppElement('#main-blog')
  }

  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  //TODO: componentize subscription modal

  render() {
    const { id, frontmatter, content } = this.props
    const author = getAuthorById((frontmatter.authors || [])[0]) || {}
    return (
        <Box pb={[2, 2, 3, 3, 6]} id='main-blog'>

        <ReactModal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.handleModalClose}
            contentLabel='Serverless Newsletter Subscription'
            style={modalStyles}
          >
          <AppContainer>
            <Row justifyContent='space-between' mt='122px'>
              <Logo
                  src={logo}
                  height={['26px']}
                  width={['205px']}
                  alt='Serverless Blog'
                />
              <Box mt='4px'>
              <Image
                maxHeight='16px'
                src={closeIcon}
                onClick={this.handleModalClose}
              />
              </Box>
            </Row>

            <Row justifyContent='space-between'>
              <Flex
                width={[1, 1, 1, 1, 0.5, 0.4]}
                py={[1, 1, 5, '73px']}
                pr={2}
              >
                <Title component={Heading.h4} color='white' />
              </Flex>
              <Flex
                width={[1, 1, 0.4]}
                pl={[7, 7, 7, 7, 7, 8]}
                pb={7}
              >
                <NewsLetterForm
                  emailFieldProps={{ width: 0.8,
                    height: 36,
                    bg: "rgba(255,255,2555,0.2)",
                    fontSize: '14px',
                    placeholder: "email address",
                    placeholderColor: "#8c8c8c",
                    id: "newsletter-emailfield",
                    color: "gray.3",
                  }}
                  btnComponent={SubmitButton}
                  wrapperProps={{ width: 1 }}
                  formStyles={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
              </Flex>
            </Row>
          </AppContainer>
        </ReactModal>

        <SubscribeOptionDesktop onClick={this.handleModalOpen}/>
        <SubscribeOptionMobileAndTablet />
        <AppContainer>
          <Frontmatter frontmatter={frontmatter} />
          <HeroImage heroImage={frontmatter.heroImage} />
          <ShareOptions
            id={id}
            title={frontmatter.title}
          />
          <ContentWrapper
            width={[1, 1, 1, 0.65]}
            mx='auto'
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <AuthorCard author={author} />
        </AppContainer>
      </Box>
    )
  }
}
