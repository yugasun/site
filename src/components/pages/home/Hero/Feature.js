import React, { Component } from 'react'

import { Flex, Text, Box } from 'serverless-design-system'
import videoPosterImage from 'src/assets/images/home/temp-video-image.png'
import styled from 'styled-components'
import featuresData from './FeaturesData'

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

const FeatureVideo = styled('video')`
  width: 982px;
  height: 529px;
  outline: none;

  @media screen and (max-width: 1024px) {
    width: 613px;
    height: 328px;
  }

  @media screen and (max-width: 415px) {
    width: 286px;
    height: 154px;
  }
`

class HomeFeatureList extends Component {
  state = {
    activeFeature: 'Intro',
    activeVideoUrl: featuresData.filter(f => f.name === 'Intro')[0].videoUrl,
  }

  updateActiveFeature(feature) {
    this.setState({
      activeFeature: feature.name,
      activeVideoUrl: feature.videoUrl,
    })
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
                    ? { borderBottom: '2px solid black' }
                    : null
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
        <FeatureVideo controls poster={videoPosterImage}>
          <source src={this.state.activeVideoUrl} type='video/mp4' />
        </FeatureVideo>
      </Flex>
    )
  }
}

export default HomeFeatureList
