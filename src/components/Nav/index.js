import React from 'react'
import Link from 'gatsby-link'
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

  componentDidMount() {}

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
      <div className='container nav-component' onMouseLeave={() => { this.hideDropdown() }}>
        <div className='container'>
          <div className='container-inner nav-inner'>
            <div className='nav-main'>
              <Link className='nav-logo' to='/'>
                <img src={imgLogo} draggable={false} />
              </Link>

              <div className='nav-items'>
                <Link
                  className={`nav-item ${this.state.dropdown === 'product' ? 'nav-item-active' : ''}`}
                  to='/'
                  onMouseEnter={() => { this.showDropdown('product') }}>
                  Product
                </Link>
                <Link
                  className='nav-item'
                  to='/framework/docs'
                  onMouseEnter={() => { this.hideDropdown() }}>
                  Docs
                </Link>
                <Link
                  className='nav-item'
                  to='/pricing'
                  onMouseEnter={() => { this.hideDropdown() }}>
                  Pricing
                </Link>
                <Link
                  className={`nav-item ${this.state.dropdown === 'learn' ? 'nav-item-active' : ''}`}
                  to='/learn'
                  onMouseEnter={() => { this.showDropdown('learn') }}>
                  Learn
                </Link>
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
                <a
                  className='nav-item nav-sign-in'
                  href='https://dashboard.serverless.com'
                  onMouseEnter={() => { this.hideDropdown() }}>
                  Register
                </a>
                <a
                  className='nav-item nav-sign-up'
                  href='https://dashboard.serverless.com'
                  onMouseEnter={() => { this.hideDropdown() }}>
                  Sign-in
                </a>
                <Link
                  className='nav-item nav-contact-sales'
                  to='/contact-sales'
                  onMouseEnter={() => { this.hideDropdown() }}>
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`container nav-dropdown ${this.state.dropdown ? 'nav-dropdown-active' : ''}`}>
          <div className='container-inner'>

            { this.state.dropdown === 'product' && (

              <div className={`nav-dropdown-content nav-dropdown-product`}>
                <div className='nav-dropdown-column'>
                  <div className='nav-dropdown-column-item'>
                    CLI
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Plugins
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Components
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Registry
                  </div>
                </div>

                <div className='nav-dropdown-column'>
                  <div className='nav-dropdown-column-item'>
                    Dashboard
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Monitoring
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Alerts
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Debugging
                  </div>
                </div>

                <div className='nav-dropdown-column'>
                  <div className='nav-dropdown-column-item'>
                    Integrations
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Policies
                  </div>
                </div>
              </div>
            )}

            { this.state.dropdown === 'learn' && (
              <div className={`nav-dropdown-content nav-dropdown-services`}>
                <div className='nav-dropdown-column'>
                  <div className='nav-dropdown-column-title'>
                    Resources
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Courses
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Use-Cases
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Examples
                  </div>
                </div>
                <div className='nav-dropdown-column'>
                  <div className='nav-dropdown-column-title'>
                    What & Why
                  </div>
                  <div className='nav-dropdown-column-item'>
                    What is serverless
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Why is serverless important?
                  </div>
                </div>
              </div>
            )}

            { this.state.dropdown === 'services' && (
              <div className={`nav-dropdown-content nav-dropdown-services`}>
                <div className='nav-dropdown-column'>
                  <div className='nav-dropdown-column-title'>
                    Services
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Training
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Support
                  </div>
                </div>
              </div>
            )}

            { this.state.dropdown === 'more' && (
              <div className={`nav-dropdown-content nav-dropdown-more`}>
                <div className='nav-dropdown-column'>
                  <div className='nav-dropdown-column-title'>
                    Community
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Github
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Forum
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Slack
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Meetups
                  </div>
                </div>
                <div className='nav-dropdown-column'>
                  <div className='nav-dropdown-column-title'>
                    Company
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Blog
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Partners
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Job Listings
                  </div>
                  <div className='nav-dropdown-column-item'>
                    Contact
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
