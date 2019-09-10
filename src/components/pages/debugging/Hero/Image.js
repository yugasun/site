import React from 'react'
import { Background, Box } from 'serverless-design-system'
import debuggingHeroImage from 'src/assets/images/pages/debugging/debugging-hero.png'
import debuggingHeroBgImage from 'src/assets/images/pages/debugging/debugging-desktop-hero-bg.svg'
import debuggingHeroBgLaptopImage from 'src/assets/images/pages/debugging/debugging-laptop-hero-bg.svg'
import { ImageWithShadow as Image } from 'src/fragments'

const HeroImage = props => (
  <Background
    background={[
      '#f7f7f7',
      '#f7f7f7',
      '#f7f7f7',
      '#f7f7f7',
      `url(${JSON.stringify(debuggingHeroBgLaptopImage)}) no-repeat`,
      `url(${JSON.stringify(debuggingHeroBgImage)}) no-repeat`,
    ]}
    width={['100%', '100%', 592, 592, 512, 592]}
    height={[235, 235, 298, 298, 488, 448]}
    style={{
      alignSelf: 'center',
    }}
  >
    <Box mt={[0, 0, 0, 0, 58]}>
      <Image
        src={debuggingHeroImage}
        width={['100%', '100%', 592, 592, 512, 592]}
        height={[235, 235, 298, 298, 298, 298]}
      />
    </Box>
  </Background>
)

export default HeroImage
