import React from 'react'
import { Box, Column, Row, P, Image } from 'serverless-design-system'
import NewsLetterForm from './NewsletterForm'
import logoBlack from 'src/assets/images/logo-black.svg'
import publicGroupQRcode from 'src/assets/images/cn/QRcode.jpeg'
import wechatGroupQRcode from 'src/assets/images/cn/wechat-group.png'

// Renders the subscribe column
const Subscribe = () => (
  <Column
    width={[1, 1, 2.5 / 4, 3 / 4, 0.28, 0.35]}
    order={['1', '1', '1', '1', '2']}
    pl={[0, 0, 0, 0, 3]}
    mb={['14px', '14px', 0, 0, 0]}
  >
    <Box display={['none', 'none', 'block', 'block', 'none']} mb={32}>
      <Image src={logoBlack} width={153} height={26} />
    </Box>
    <Row id="newsletter-box-footer">
      <Column width={[1, 1, 1, 1]}>
        <P
          style={{ paddingLeft: 20 }}
          color="#8c8c8c"
          fontFamily="SoleilBk"
          align={['left']}
          lineHeight={1.63}
          mb={0}
          mt={[42, 42, 0, 0, '12px']}
        >
          订阅微信公众号
        </P>
        <img src={publicGroupQRcode} style={{ width: 150 }} />
      </Column>
      <Column width={[1, 1, 1, 1]}>
        <P
          style={{ paddingLeft: 20 }}
          color="#8c8c8c"
          fontFamily="SoleilBk"
          align={['left']}
          lineHeight={1.63}
          mb={0}
          mt={[42, 42, 0, 0, '12px']}
        >
          问题反馈小助手
        </P>
        <img src={wechatGroupQRcode} style={{ width: 150 }} />
      </Column>
    </Row>
  </Column>
)

export default Subscribe
