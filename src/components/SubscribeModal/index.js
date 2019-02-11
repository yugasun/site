import React, { Component } from 'react'
import ReactModal from 'react-modal'
import {
  Container,
  Box,
  Flex,
  Image,
  Row,
  Logo,
  Heading,
} from 'serverless-design-system'
import closeIcon from 'src/assets/images/icon-close.png'
import { NewsLetterFormNew as NewsLetterForm } from 'src/components'
import { Button, P } from 'src/fragments/DesignSystem'
import logo from 'src/assets/images/blog-logo.svg'
import SubscribeOptionDesktop from './Buttons/Desktop'
import SubscribeOptionMobileAndTablet from './Buttons/MobileAndTablet'
import 'src/components/SubscribeModal/modal.css'

const SubmitButton = props => (
  <Button width={[1, 1, '228px', '228px', '123px']} {...props}>
    subscribe
  </Button>
)

const Title = ({ component: HeadingComp, color }) => (
  <HeadingComp
    color={color}
    fontFamily='SoleilLt'
    letterSpacing='0'
    lineHeight={'32px'}
    align={['left']}
    mt={[5, 5, 0]}
  >
    Join 16,000 other developers and keep up to speed on the latest serverless
    news and releases.
    <P color='gray.3'>Don’t worry. You can unsubscribe whenever you want.</P>
  </HeadingComp>
)

function getModalStyles(device) {
  let deviceHeight
  if (device === 'mobile') {
    deviceHeight = '640px'
  } else if (device === 'tablet') {
    deviceHeight = '514px'
  } else {
    deviceHeight = '496px'
  }

  const modalStyles = {
    content: {
      top: 0,
      left: 0,
      right: 0,
      height: deviceHeight,
      background: 'linear-gradient(155deg,rgb(0,0,0) 50%,#70221f)',
    },
    overlay: {
      zIndex: 1000,
      width: '100%',
    },
  }

  return modalStyles
}

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      modalStyles: getModalStyles(),
    }
  }

  componentDidMount() {
    ReactModal.setAppElement('#main-blog')
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 415) {
        this.setState({ modalStyles: getModalStyles('mobile') })
      } else if (window.innerWidth <= 1024) {
        this.setState({ modalStyles: getModalStyles('tablet') })
      }
    }
  }

  handleModalOpen = event => {
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <React.Fragment>
        <Box id='main-blog'>
          <ReactModal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.handleModalClose}
            contentLabel='Serverless Newsletter Subscription'
            style={this.state.modalStyles}
            closeTimeoutMS={2000}
          >
            <Container maxWidth={[1216, 1216, 1216, 1216, '76%', 1216]}>
              <Box px={['10px', '10px', 20, 20, 0]}>
                <Box display={['block', 'block', 'block', 'block', 'none']}>
                  <Flex justifyContent='flex-end'>
                    <Image
                      maxHeight='16px'
                      src={closeIcon}
                      onClick={this.handleModalClose}
                    />
                  </Flex>
                </Box>
                <Row
                  justifyContent='space-between'
                  mt={['52px', '52px', '72px', '72px', '122px']}
                >
                  <Logo
                    src={logo}
                    height={['26px']}
                    width={['205px']}
                    alt='Serverless Blog'
                  />
                  <Box
                    mt='4px'
                    display={['none', 'none', 'none', 'none', 'block']}
                  >
                    <Image
                      maxHeight='16px'
                      src={closeIcon}
                      onClick={this.handleModalClose}
                    />
                  </Box>
                </Row>

                <Flex
                  justifyContent='space-between'
                  flexDirection={[
                    'column',
                    'column',
                    'column',
                    'column',
                    'row',
                  ]}
                >
                  <Flex
                    width={[1, 1, 0.83, 0.64, 0.5, 0.4]}
                    pt={[1, 1, 5, 5, '63px']}
                    pb={[1, 1, 3, 4, '63px']}
                    pr={2}
                  >
                    <Title component={Heading.h4} color='white' />
                  </Flex>
                  <Flex
                    width={[1, 1, 0.6, 0.6, 0.4]}
                    pl={[0, 0, 0, 0, 7, 8]}
                    pb={[0, 0, 0, 0, 7]}
                    pt={[2, 2, 0]}
                  >
                    <NewsLetterForm
                      emailFieldProps={{
                        width: [1, 1, 1, 1, 0.8],
                        height: 36,
                        bg: 'rgba(255,255,2555,0.2)',
                        fontSize: '14px',
                        placeholder: 'email address',
                        placeholderColor: '#8c8c8c',
                        id: 'newsletter-emailfield',
                        color: '#8c8c8c',
                      }}
                      btnComponent={SubmitButton}
                      wrapperProps={{ width: 1, color: 'white' }}
                      formStyles={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    />
                  </Flex>
                </Flex>
              </Box>
            </Container>
          </ReactModal>
        </Box>
        {this.props.includeDesktop ? (
          <SubscribeOptionDesktop onClick={this.handleModalOpen} />
        ) : null}
        <SubscribeOptionMobileAndTablet onClick={this.handleModalOpen} />
      </React.Fragment>
    )
  }
}

export default index
