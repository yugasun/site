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
                <div
                  className='nav-item'
                  onMouseEnter={() => { this.hideDropdown() }}>
                  Docs
                </div>
                <div
                  className='nav-item'
                  onMouseEnter={() => { this.hideDropdown() }}>
                  Pricing
                </div>
                <div
                  className='nav-item'
                  onMouseEnter={() => { this.hideDropdown() }}>
                  Learn
                </div>
                <div
                  className={`nav-item ${this.state.dropdown === 'services' ? 'nav-item-active' : ''}`}
                  onMouseEnter={() => { this.showDropdown('services') }}>
                  Services
                </div>
                <div
                  className={`nav-item ${this.state.dropdown === 'more' ? 'nav-item-active' : ''}`}
                  onMouseEnter={() => { this.showDropdown('more') }}>
                  More
                </div>
                <div
                  className='nav-item nav-sign-in'
                  onMouseEnter={() => { this.hideDropdown() }}>
                  Register
                </div>
                <div
                  className='nav-item nav-sign-up'
                  onMouseEnter={() => { this.hideDropdown() }}>
                  Sign-in
                </div>
                <div
                  className='nav-item nav-contact-sales'
                  onMouseEnter={() => { this.hideDropdown() }}>
                  Contact Sales
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`container nav-dropdown ${this.state.dropdown ? 'nav-dropdown-active' : ''}`}>
          <div className='container-inner'>

            { this.state.dropdown === 'product' && (

              <div className={`nav-dropdown-content nav-dropdown-product`}>
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

            { this.state.dropdown === 'services' && (
              <div className={`nav-dropdown-content nav-dropdown-services`}>

              </div>
            )}

            { this.state.dropdown === 'more' && (
              <div className={`nav-dropdown-content nav-dropdown-more`}>

              </div>
            )}

          </div>
        </div>
      </div>
    )
  }
}
