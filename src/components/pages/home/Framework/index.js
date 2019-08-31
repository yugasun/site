import React from 'react'
import { Box, Row } from 'serverless-design-system'
import './Framework.css'

export default class Framework extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  /**
   * Component Did Mount
   */

  componentDidMount() {

  }

  /**
   * Render
   */

  render() {
    return (
      <Box
        display={['block', 'block', 'none', 'none', 'block']}
        className='framework-container'>

        <Row className='framework' mt={[92, 92, 132, 372, 102]} mb={[62, 62, 62, 62, 0]}>

          <div className='header row'>
            Serverless Framework
          </div>

          <div className='subheader row'>
            An edition for every type of user.
          </div>

        </Row>
      </Box>
    )
  }
}
