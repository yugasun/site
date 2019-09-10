import React from 'react'
import { Box, Text, Image, Flex } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import courseData from './Data'
import styled from 'styled-components'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'
import playVideoIconActive from 'src/assets/images/pages/courses/play-video-icon-active.svg'
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
        mt={[-62, -62, -92, -92, -110]}
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        width={[1, 1, 0.85, 0.85, 1]}
        mx={'auto'}
      >
        <Box width={[1, 1, 1, 1, 0.7]}>
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
        <NoScrollbarBox
          width={[1, 1, 1, 1, 0.3]}
          style={{ overflowY: 'scroll' }}
        >
          {courseData.map((course, index) => {
            return (
              <Box key={index} mx={['12px', '12px', 42, 42, 32]}>
                <Text
                  fontFamily='SoleilBk'
                  fontSize='18px'
                  lineHeight='1.33'
                  letterSpacing='-0.28px'
                  mb={16}
                  mt={[22, 22, 22, 22, 32]}
                  color='#8c8c8c'
                >
                  {course.title}
                </Text>
                {course.items.map((item, index) => (
                  <Flex
                    key={item.title}
                    justifyContent={'space-between'}
                    style={{ borderTop: '1px solid #9b9b9b' }}
                  >
                    <Flex width={[1, 1, 0.8, 0.8, 0.8]}>
                      <Image
                        src={
                          item.videoNumber == this.state.activeId
                            ? playVideoIconActive
                            : playVideoIcon
                        }
                      />
                      <P
                        ml={22}
                        color={
                          item.videoNumber == this.state.activeId
                            ? 'white'
                            : '#5b5b5b'
                        }
                        onClick={() => this.playThisVideo(item.videoNumber)}
                        style={
                          item.title.indexOf('coming soon') > -1
                            ? { cursor: 'default' }
                            : { cursor: 'pointer' }
                        }
                      >
                        {item.title}
                      </P>
                    </Flex>
                    <P>{item.playTime}</P>
                  </Flex>
                ))}
              </Box>
            )
          })}
        </NoScrollbarBox>
      </CourseBox>
    )
  }
}

export default CoursesList
