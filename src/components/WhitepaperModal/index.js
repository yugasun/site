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
import { Button, P, SecondaryButton } from 'src/fragments/DesignSystem'
import logo from 'src/assets/images/logo.svg'
import 'src/components/SubscribeModal/modal.css'
import NewsLetterForm from './WhitepaperDownloadForm'
import WhitepaperDownloadBanner from 'src/fragments/WhitepaperDownloadBanner/Banner.js'

const SubmitButton = props => (
  <Button width={[1, 1, '228px', '228px', '123px']} {...props}>
    download
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
    Download our white paper to see common Serverless Architecture use cases,
    architecture diagrams, and cost estimates.
    <P color='gray.3'>Enter email to download.</P>
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
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
    ReactModal.setAppElement('#whitepaper-download')
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
        <Box id='whitepaper-download'>
          <ReactModal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.handleModalClose}
            contentLabel='Serverless Whitepaper Download'
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
                  mt={['12px', '12px', '72px', '72px', '122px']}
                >
                  <Logo
                    src={logo}
                    height={['26px']}
                    width={['160px']}
                    alt='Serverless'
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
                      wrapperProps={{ width: 1 }}
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
        {this.props.componentToRender === 'whitepaper' ? (
          <WhitepaperDownloadBanner onClick={this.handleModalOpen} />
        ) : (
          <SecondaryButton
            as={SecondaryButton}
            width={['100%', '100%', 176]}
            onClick={this.handleModalOpen}
          >
            download whitepaper
          </SecondaryButton>
        )}
      </React.Fragment>
    )
  }
}

export default index
