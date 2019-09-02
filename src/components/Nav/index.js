import React from 'react'
import { Box, Row } from 'serverless-design-system'
import imgLogo from 'src/assets/images/logo.svg'
import './Nav.css'

export default class Nav extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
    this.state.dropdown = null

    this.showDropdown = this.showDropdown.bind(this)
  }

  /**
   * Component Did Mount
   */

  componentDidMount() {

  }

  /**
   * Show Dropdown
   */

  showDropdown(type) {
    if (type === this.state.dropdown) return

    this.setState({ dropdown: type })
  }

  /**
   * Hide Dropdown
   */

  hideDropdown() {
    this.setState({ dropdown: null })
  }

  /**
   * Render
   */

  render() {
    return (
      <div className='container' onMouseLeave={() => { this.hideDropdown() }}>
        <div className='container nav'>
          <div className='container-inner nav-inner'>
            <div className='nav-main'>
              <div className='nav-logo'>
                <img src={imgLogo} draggable={false} />
              </div>

              <div className='nav-items'>
                <div
                  className={`nav-item ${this.state.dropdown === 'product' ? 'nav-item-active' : ''}`}
                  onMouseEnter={() => { this.showDropdown('product') }}>
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
                  Register
                </div>
                <div className='nav-item nav-sign-up'>
                  Sign-in
                </div>
                <div className='nav-item nav-contact-sales'>
                  Contact Sales
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`container nav-dropdown ${this.state.dropdown ? 'nav-dropdown-active' : ''}`}>
          <div className='container-inner'>

            { this.state.dropdown === 'product' && (

              <div className={`nav-dropdown-product`}>
                <div className='nav-dropdown-product-category'>
                  <div className='nav-dropdown-product-category-title'>
                    Open-Source
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    CLI
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    Plugins
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    Components
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    Registry
                  </div>
                </div>

                <div className='nav-dropdown-product-category'>
                  <div className='nav-dropdown-product-category-title'>
                    Developer
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    Dashboard
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    Monitoring
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    Alerts
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    Debugging
                  </div>
                </div>

                <div className='nav-dropdown-product-category'>
                  <div className='nav-dropdown-product-category-title'>
                    Enterprise
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    Integrations
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    Policies
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    Training
                  </div>
                  <div className='nav-dropdown-product-category-item'>
                    Support
                  </div>
                </div>
              </div>

            )}
          </div>
        </div>
      </div>
    )
  }
}
