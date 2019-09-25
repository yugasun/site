import React from 'react'
import Data from './Data'
import { Flex, Text, Image, Box } from 'serverless-design-system'
import styled from 'styled-components'
import tickIcon from 'src/assets/images/pages/support/tick-icon.svg'
import crossIcon from 'src/assets/images/pages/support/cross-icon.svg'

const SmallText = styled(Text)`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0;
  color: #5b5b5b;
  align: center;
  font-family: 'Soleil';
  margin-top: 12px;
`

const TableHeadline = styled(Text)`
  font-family: 'SoleilBk';
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  margin-bottom: 17px;
  min-height: 26px;
`

const repIcon = {
  cross: crossIcon,
  tick: tickIcon,
}

const SupportPlansDesktopView = props => (
  <Box display={['none', 'none', 'block']} width={[1, 1, 1, 1, 0.4]}>
    <Flex justifyContent='space-between' width={[1, 1, 1, 1, 1, 1]}>
      {Data.map((column, index) => (
        <Flex
          flexDirection='column'
          key={index}
          justifyContent='flex-end'
          alignItems={index == 0 ? 'initial' : 'center'}
        >
          {column.map(
            (item, index) =>
              index == 0 ? (
                <TableHeadline key={index + 'smalltext'}>{item}</TableHeadline>
              ) : item == 'cross' || item == 'tick' ? (
                <Image src={repIcon[item]} style={{ marginTop: '12px' }} />
              ) : (
                <SmallText key={index + 'smalltext'}>{item}</SmallText>
              )
          )}
        </Flex>
      ))}
    </Flex>
    <Box
      width={[0, 0, 1, 1, 1, 1]}
      mt={[-118]}
      style={{ borderTop: '1px solid #9b9b9b' }}
      pb={[0, 0, 115, 115, 0]}
    />
  </Box>
)

export default SupportPlansDesktopView
