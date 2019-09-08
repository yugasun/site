import React from 'react'
import Data from './Data'
import { Flex, Text, Image } from 'serverless-design-system'
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

const SupportPlans = props => (
  <Flex
    mt={[62, 62, 62, 62, 92]}
    justifyContent='space-between'
    width={[1, 1, 1, 1, 1, 0.9]}
  >
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
)

export default SupportPlans
