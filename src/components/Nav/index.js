import React from 'react'
import { Box, Row } from 'serverless-design-system'
import imgLogo from 'src/assets/images/logo.svg'
import './Nav.css'

export default class Nav extends React.Component {

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
      <div className='container nav'>
        <div className='container-inner nav-inner'>

          <div className='nav-logo'>
            <img src={imgLogo} draggable={false} />
          </div>

          <div className='nav-items'>
            <div className='nav-item'>
              Product
            </div>
            <div className='nav-item'>
              Docs
            </div>
            <div className='nav-item'>
              Pricing
            </div>
            <div className='nav-item'>
              Learn
            </div>
            <div className='nav-item'>
              Services
            </div>
            <div className='nav-item'>
              More
            </div>
            <div className='nav-item nav-sign-in'>
              Sign-in
            </div>
            <div className='nav-item nav-sign-up'>
              Register
            </div>
          </div>

        </div>
      </div>
    )
  }
}
