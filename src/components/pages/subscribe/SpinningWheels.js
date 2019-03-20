import React, { Component } from 'react'
import { Background, Absolute } from 'serverless-design-system'
import spinningWheel from 'src/assets/images/pages/framework/spinning-wheel.svg'
import spinningWheelAnimation from 'src/assets/images/pages/framework/spinning-wheel-animation.svg'

class SpinningWheels extends Component {
  constructor() {
    super()
    this.state = {
      usingSafariDesktop: false,
    }
  }

  componentDidMount() {
    const windowGlobal = typeof window !== 'undefined' && window
    const navigatorGlobal = typeof navigator !== 'undefined' && navigator

    if (windowGlobal && navigatorGlobal) {
      const using_safari_browser = /^((?!chrome|android).)*safari/i.test(
        navigatorGlobal.userAgent
      )
      const using_desktop = windowGlobal.innerWidth > 1200

      if (using_safari_browser && using_desktop) {
        this.setState({ usingSafariDesktop: true })
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Absolute
          right="0"
          bottom="0"
          display={['none', 'none', 'none', 'none', 'block']}
        >
          <Background
            width="622px"
            height="553px"
            backgroundImage={
              this.state.usingSafariDesktop
                ? `url(${spinningWheel})`
                : `url(${spinningWheelAnimation})`
            }
            backgroundRepeat="no-repeat"
            backgroundPosition={[0, 0, 0, 0, '150px 150px', '150px 50px']}
            backgroundSize="cover"
          />
        </Absolute>
        <Absolute
          top="0"
          left="0"
          zIndex="0"
          width={[0, 0, 0, 0, '40%', '622px']}
          display={['none', 'none', 'none', 'none', 'block']}
        >
          <Background
            width="622px"
            height="553px"
            backgroundImage={
              this.state.usingSafariDesktop
                ? `url(${spinningWheel})`
                : `url(${spinningWheelAnimation})`
            }
            backgroundRepeat="no-repeat"
            backgroundPosition={[0, 0, 0, 0, '-70px -140px', '-10px -140px']}
            backgroundSize="cover"
          />
        </Absolute>
      </React.Fragment>
    )
  }
}

export default SpinningWheels
