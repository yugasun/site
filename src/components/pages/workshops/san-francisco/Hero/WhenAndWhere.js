import React from 'react'
import { Flex, Box } from 'serverless-design-system'
import {
    TitleWithIconNew as TitleWithIcon,
  } from 'src/fragments'
import { P, Heading } from 'src/fragments/DesignSystem'

const WhenAndWhere = () => (
  <Flex
    width={[1, 1, 1, 1, 1 / 2]}
    justifyContent={['center', 'center', 'center', 'center', 'flex-end']}
    mt={['15px']}
  >
    <Flex flexDirection={['row', 'row', 'column']}>
      <Box>
        <TitleWithIcon headingComponent={Heading.h4}>When?</TitleWithIcon>
        <P mt={[0, 0, 0, 0, '10px']}>
          1 march 2019 <br />
          10am to 5pm
        </P>
      </Box>
      <Box mt={[0, 0, 0, 0, 45]}>
        <TitleWithIcon headingComponent={Heading.h4}>Where?</TitleWithIcon>
        <P mt={[0, 0, 0, 0, '10px']}>
          Harry M. Smith  <br />
          Conference Room <br /><br />
          414 Mason St. <br />
          Suite 800 (8th Floor) <br />
         San Francisco, CA <br />
        </P>
      </Box>
    </Flex>
  </Flex>
)

export default WhenAndWhere
