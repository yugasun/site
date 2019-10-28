import React from 'react'
import { Box, Text, Image, Flex } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import courseData from './Data'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import videoPosterImage from 'src/assets/images/pages/courses/videoPosterImage.png'
require('./responsivePlayer.css')

const NoScrollbarBox = styled(Box)`
  &::-webkit-scrollbar {
    width: 0 !important;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`

const CourseBox = styled(Flex)`
  border: solid 1px rgba(247, 247, 247, 0.3);
  background-color: black;
  border-radius: 4px;
  @media only screen and (min-width: 1025px) {
    max-height: 452px;
  }
`

class CoursesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: 1,
      activeVideoLink: this.findActiveVideoLink(1),
    }
  }

  playThisVideo(videoNumber) {
    const activeVideoLink = this.findActiveVideoLink(videoNumber)
    this.setState({
      activeId: videoNumber,
      activeVideoLink,
    })
  }

  findActiveVideoLink(activeId) {
    let allItems = []
    courseData.forEach(data => {
      allItems = allItems.concat(data.items)
    })
    const videoLink = allItems.filter(item => item.videoNumber === activeId)[0]
      .videoLink
    return videoLink
  }

  render() {
    return (
      <CourseBox
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        width={[1, 1, 0.85, 0.85, 1]}
        mx={'auto'}
      >
        <Box width={[1, 1, 1, 1, 1]}>
          <div className='course-video-player-wrapper'>
            <ReactPlayer
              url={this.state.activeVideoLink}
              controls={true}
              className='react-player'
              width={'100%'}
              muted
              loop={false}
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
      </CourseBox>
    )
  }
}

export default CoursesList
