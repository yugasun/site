import React from 'react'

import { Box, Column } from 'serverless-design-system'
import { FooterCn as Footer, HeaderCn as Header} from 'src/components'

const DefaultLayout = ({
  children,
  prefooter,
  transparentHeader,
  prefooterOnlyDesktop,
  noPrefooter,
  url,
}) => {
  const prefooterOnlyDesktopBool = prefooterOnlyDesktop ? true : false
  const noPrefooterBool = noPrefooter ? true : false

  return (
    <Column width={1}>
      <Header transparent={transparentHeader} url={url} pathName={url}/>
      <Box width={1}>{children}</Box>
      <Footer
        prefooter={prefooter}
        prefooterOnlyDesktop={prefooterOnlyDesktopBool}
        noPrefooter={noPrefooterBool}
      />
    </Column>
  )
}
export default DefaultLayout