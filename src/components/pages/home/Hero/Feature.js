import React, { Component } from 'react'
import { AppContainer } from 'src/components'
import { Flex, Text, Box } from 'serverless-design-system'
import videoPosterImage from 'src/assets/images/home/video-loading-poster.png'
import styled from 'styled-components'
import featuresData from './FeaturesData'
import ReactPlayer from 'react-player'
require('./responsivePlayer.css')

const HR = styled('hr')`
  width: 100%;
  margin-top: -69px;
  z-index: -2;
`

//TODO: create a component for the below 2
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
  margin-top: 25px;
`

class HomeFeatureList extends Component {
  state = {
    activeVideoId: 1,
    activeFeature: 'Intro',
    activeVideoUrl: featuresData.filter(f => f.name === 'Intro')[0].videoUrl,
    videoPlaying: true,
  }

  updateActiveFeature(feature) {
    this.setState({
      activeFeature: feature.name,
      activeVideoUrl: feature.videoUrl,
      videoPlaying: true,
    })

    this.setState({ activeVideoId: feature.id })
  }

  autoPlayNextVideo() {
    const nextId =
      this.state.activeVideoId === 6 ? 1 : this.state.activeVideoId + 1
    const nextIdFeature = featuresData.filter(f => f.id === nextId)[0]
    this.updateActiveFeature(nextIdFeature)
    this.setState({ activeVideoId: nextId })
  }

  toggleVideoPlaying() {
    this.setState({ videoPlaying: !this.state.videoPlaying })
  }

  render() {
    return (
      <Flex
        flexDirection={['column', 'column', 'column']}
        width={[1]}
        mt={[3, 3, 2, 2, 2]}
        alignItems='center'
      >
        <Box display={['none', 'none', 'block']} mb={52}>
          <Flex mb={67}>
            {featuresData.map(feature => (
              <HoverableText
                key={feature.name}
                mx={[25]}
                fontSize={18}
                lineHeight={'30px'}
                letterSpacing={'-0.28px'}
                fontFamily='SoleilBk'
                pb={'12px'}
                style={
                  this.state.activeFeature === feature.name
                    ? { borderBottom: '2px solid black', color: '#000' }
                    : { color: '#8c8c8c' }
                }
                onClick={() => this.updateActiveFeature(feature)}
              >
                {feature.name}
              </HoverableText>
            ))}
          </Flex>
          <HR />
        </Box>
        <Box display={['block', 'block', 'none']} mb={[45, 45, 32]}>
          <StyledSelect>
            {featuresData.map(feature => (
              <option
                value={feature.name}
                key={feature.name}
                onClick={() => this.updateActiveFeature(feature)}
              >
                {feature.name}
              </option>
            ))}
          </StyledSelect>
        </Box>
        <AppContainer>
          <div className='homepage-video-player-wrapper'>
            <ReactPlayer
              url={this.state.activeVideoUrl}
              className='react-player'
              muted
              width='100%'
              height='529px'
              onClick={() => this.toggleVideoPlaying()}
              onEnded={() => this.autoPlayNextVideo()}
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
        </AppContainer>
      </Flex>
    )
  }
}

export default HomeFeatureList
