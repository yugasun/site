import React from 'react'
import { Box, Row } from 'serverless-design-system'
import './Paradigm.css'

export default class Paradigm extends React.Component {

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
        className='paradigm-container'>

        <Row className='paradigm' mt={[92, 92, 132, 372, 102]} mb={[62, 62, 62, 62, 0]}>

          <div className='header-label row'>
            Paradigm
          </div>

          <div className='header row'>
            The future of software is serverless
          </div>

          <div className='subheader row'>
            Build apps with radically low overhead & cost.
          </div>

        </Row>
      </Box>
    )
  }
}
