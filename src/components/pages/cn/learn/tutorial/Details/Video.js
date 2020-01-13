import React from 'react'
import { Box, Flex } from 'serverless-design-system'
import courseData from 'src/constants/courses/fullStackAws.js'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import videoPosterImage from 'src/assets/images/pages/courses/videoPosterImage.png'
require('./responsivePlayer.css')

const CourseBox = styled(Flex)`
  border: solid 1px rgba(247, 247, 247, 0.3);
  background-color: black;
  border-radius: 4px;
  @media only screen and (min-width: 1025px) {
    max-height: 452px;
  }
`

const CoursesList = ({link}) => (
      <CourseBox
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        width={[1, 1, 0.85, 0.85, 1]}
        mx={'auto'}
      >
        <Box width={[1, 1, 1, 1, 1]}>
          <div className='course-video-player-wrapper'>
            <ReactPlayer
              url={link}
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

export default CoursesList
