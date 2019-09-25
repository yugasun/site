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

const SupportPlansDataArr = [
  [Data[0], Data[1]],
  [Data[0], Data[2]],
  [Data[0], Data[3]],
]

const SupportPlansMobileView = props => (
  <React.Fragment>
    {SupportPlansDataArr.map((dataArr, plansIndex) => (
      <Box
        display={['block', 'block', 'none']}
        width={[0.9]}
        key={plansIndex + 'root'}
        mt={plansIndex !== 0 ? [52, 52, 0] : [0]}
      >
        <Flex justifyContent='space-between' width={[1, 1, 1, 1, 1, 0.9]}>
          {dataArr.map((column, index) => (
            <Flex
              flexDirection='column'
              key={index}
              justifyContent='flex-end'
              pr={plansIndex == 0 && index == 1 ? ['14px', '14px', 0] : [0]}
            >
              {column.map(
                (item, index) =>
                  index == 0 ? (
                    <TableHeadline key={index + 'smalltext'}>
                      {item}
                    </TableHeadline>
                  ) : item == 'cross' || item == 'tick' ? (
                    <Box>
                      <Image
                        src={repIcon[item]}
                        style={{ marginTop: '12px' }}
                      />
                    </Box>
                  ) : (
                    <SmallText key={index + 'smalltext'}>{item}</SmallText>
                  )
              )}
            </Flex>
          ))}
        </Flex>
        <Box
          width={[1, 1, 0]}
          mt={[-118]}
          style={{ borderTop: '1px solid #9b9b9b' }}
          pb={plansIndex == 2 ? [108, 108, 0] : [98, 98, 0]}
        />
      </Box>
    ))}
  </React.Fragment>
)

export default SupportPlansMobileView
