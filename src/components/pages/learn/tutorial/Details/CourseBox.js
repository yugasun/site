import React from 'react'
import { Flex, Image, Card, Box } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import playVideoIcon from 'src/assets/images/pages/courses/play-video-icon.svg'
import { InternalLink } from 'src/fragments'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

const CourseOutlineBox = styled(Card)`
  overflow-y: scroll;
  max-height: 600px;

  @media screen and (min-width: 962px) {
    min-width: 450px; 
  }
`

class CourseBox extends React.Component {
  state = { activeVideoNumber: this.props.activeVideoNumber, 
    courseOutlineData: this.props.outline,
    myRef: React.createRef() }

  componentDidMount() {
    const thisNode = ReactDOM.findDOMNode(this.refs['videoNumber' + this.state.activeVideoNumber])
    const thisNodeOffsetTop = thisNode.offsetTop
    document.getElementById("course-outline-box").scrollTop = thisNodeOffsetTop - 330
  }

  render() {
    return (
      <CourseOutlineBox border='1px solid #eaeaea' ml={[0, 0, 0, 0, 22]} mt={[92, 92, 92, 92, 0]} id='course-outline-box'>
      {
        this.state.courseOutlineData.map((course, metaIndex) => (
          <Flex key={metaIndex} flexDirection='column'>
            <Flex style={{backgroundColor: '#f7f7f7'}} p={22}>
              <Heading.h5 color='black' mb={0} fontFamily='Soleil'>{course.title}</Heading.h5>
            </Flex>
            {
                course.items.map((item, index) => (
                  <Flex 
                  key={item.videoNumber} 
                  justifyContent='space-between' px={'22px'} 
                  style={item.videoNumber === this.state.activeVideoNumber ? {backgroundColor: '#D4E9EE'}: {}}
                  ref={`videoNumber${item.videoNumber}`}
                  >
                    <InternalLink to={item.title.indexOf('[coming soon]') > -1 ? `#course-updates`: `/learn/tutorial/${item.slug}/`} anchorLink={item.title.indexOf('[coming soon]') > -1 ? true: false}>
                      <Flex mt={'16px'}>
                        <Image src={playVideoIcon} style={{alignSelf: 'flex-start', marginTop: '3px'}}/>
                        <Box width={0.95}>
                          <P mt={0} pl={'12px'}>{item.title}</P>  
                        </Box>
                      </Flex>
                    </InternalLink>
                    <P>{item.playTime}</P>
                  </Flex>
                ))
            }
          </Flex>
        ))
      }
      </CourseOutlineBox>
    )
  }
}

export default CourseBox
