import React, { Component } from 'react'
import { Column, Text, Flex, Box } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'
import MobileCTA from './MobileCTA'
import Actions from './Actions'
import useCasesData from './Data'
import styled from 'styled-components'
import videoPosterImage from 'src/assets/images/home/video-loading-poster.png'
import ReactPlayer from 'react-player'
require('./responsivePlayer.css')

const HR = styled('hr')`
  border-color: #eaeaea;
  max-width: 98%;
  margin: 0;
  z-index: -20;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`

const HoverableText = styled(Text)`
  &:hover {
    cursor: pointer;
  }
`

const StyledSelect = styled('select')`
  width: 300px;
  height: 42px;
  border-radius: 4px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
  background-color: white;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.28px;
  font-family: 'SoleilBk';
  outline: none;
`

class UseCases extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeUseCase: 1,
      activeUseCaseTitle: useCasesData.filter(f => f.id === 1)[0].title,
      activeUseCaseDescription: useCasesData.filter(f => f.id === 1)[0]
        .description,
      activeUseCaseVideo: useCasesData.filter(f => f.id === 1)[0].videoUrl,
      videoPlaying: false,
      isMobile: false,
    }

    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    if (window) {
      const isMobile = window.innerWidth <= 420 ? true : false
      if (isMobile) {
        this.setState({ isMobile: true })
      }
      window.addEventListener('scroll', this.onScroll, false)
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('scroll', this.onScroll, false)
    }
  }

  onScroll() {
    const scrollY = window.scrollY
    if (scrollY > 1587 && !this.state.isMobile) {
      this.setState({ videoPlaying: true })
    }
  }

  autoPlayNextVideo() {
    const nextId =
      this.state.activeUseCase === 6 ? 1 : this.state.activeUseCase + 1
    const nextIdFeature = useCasesData.filter(f => f.id === nextId)[0]
    this.updateActiveUseCase(nextIdFeature)
    this.setState({ activeUseCase: nextId })
  }

  toggleVideoPlaying() {
    if (!this.state.isMobile) {
      this.setState({ videoPlaying: !this.state.videoPlaying })
    }
  }

  updateActiveUseCase(useCase) {
    this.setState({
      activeUseCase: useCase.id,
      activeUseCaseTitle: useCase.title,
      activeUseCaseDescription: useCase.description,
      activeUseCaseVideo: useCase.videoUrl,
      videoPlaying: true,
    })
  }

  render() {
    return (
      <Flex mt={[92, 92, 52, 52, 122]}>
        <Box width={[0, 0, 0, 0, 0.55]}>
          <Box>
            <div className='framework-video-player-wrapper'>
              <ReactPlayer
                url={this.state.activeUseCaseVideo}
                controls={this.state.isMobile ? true : false}
                onEnded={() => this.autoPlayNextVideo()}
                className='react-player'
                muted
                loop={false}
                playing={this.state.videoPlaying}
                config={{
                  file: {
                    attributes: {
                      poster: videoPosterImage,
                    },
                  },
                }}
              />
            </div>
          </Box>
        </Box>
        <Column width={[1, 1, 1, 1, 0.55]}>
          <Box width={[1, 1, 1, 1, 1]}>
            <Heading.h3 mb={46} align={['center', 'center', 'left']}>
              The Serverless Application lifecycle
            </Heading.h3>
            <Box display={['none', 'none', 'block']}>
              <Flex pb={'7px'} justifyContent={['space-between']}>
                {useCasesData.map(useCase => (
                  <HoverableText
                    fontFamily={'SoleilBk'}
                    key={useCase.id}
                    fontSize={'18px'}
                    lineHeight={'30px'}
                    letterSpacing={['-0.28px']}
                    mr={[30, 30, 30, 30, '10px', 36]}
                    onEnded={() => this.autoPlayNextVideo()}
                    mb={['-9px']}
                    style={
                      useCase.id === this.state.activeUseCase
                        ? { borderBottom: '2px solid black', color: '#000' }
                        : { color: '#8c8c8c' }
                    }
                    onClick={() => this.updateActiveUseCase(useCase)}
                  >
                    {useCase.title}
                  </HoverableText>
                ))}
              </Flex>
              <HR />
            </Box>
            <Box display={['block', 'block', 'none']}>
              <StyledSelect onChange={() => this.updateActiveUseCase()}>
                {useCasesData.map(useCase => (
                  <option key={useCase.id}>{useCase.title}</option>
                ))}
              </StyledSelect>
            </Box>
          </Box>
          <Text
            fontSize={'24px'}
            lineHeight={'38px'}
            letterSpacing={'-0.38px'}
            fontFamily='Soleil'
            mt={62}
          >
            {this.state.activeUseCaseTitle}
          </Text>
          <Flex flexDirection={['column', 'column', 'row']}>
            <Column width={[1, 1, 0.5, 0.5, 0.8, 0.8]}>
              <Box
                minHeight={
                  this.state.activeUseCaseTitle === 'Intro'
                    ? [0]
                    : [0, 0, 234, 182, 150]
                }
              >
                <P mb={0} mt={'8px'}>
                  {this.state.activeUseCaseDescription}
                </P>
              </Box>
              <Box display={['none', 'none', 'block']}>
                <Actions />
              </Box>
            </Column>
          </Flex>
          <MobileCTA />
        </Column>
      </Flex>
    )
  }
}

export default UseCases
