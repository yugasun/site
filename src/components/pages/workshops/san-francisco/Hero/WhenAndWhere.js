import React from 'react'
import { Flex, Box } from 'serverless-design-system'
import { TitleWithIconNew as TitleWithIcon } from 'src/fragments'
import { P, Heading } from 'src/fragments/DesignSystem'

const WhenAndWhere = () => (
  <Flex
    width={[1, 1, 0.5]}
    justifyContent={[
      'space-around',
      'space-around',
      'flex-end',
      'flex-end',
      'flex-end',
    ]}
    mt={[68, 68, '15px']}
  >
    <Flex
      flexDirection={['row', 'row', 'column']}
      justifyContent={['space-around', 'space-around', 'unset']}
      width={[1, 1, 'auto']}
    >
      <Box>
        <TitleWithIcon
          headingComponent={Heading.h4}
          fontSize={['24px']}
          lineHeight={['32px']}
          letterSpacing={['-0.38px']}
          align={['left', 'left', 'auto']}
        >
          When?
        </TitleWithIcon>
        <P mt={[0, 0, 0, 0, '10px']}>
          1 march 2019 <br />
          10am to 5pm
        </P>
      </Box>
      <Box mt={[0, 0, 4, 4, 45]}>
        <TitleWithIcon
          headingComponent={Heading.h4}
          fontSize={['24px']}
          lineHeight={['32px']}
          letterSpacing={['-0.38px']}
          align={['left', 'left', 'auto']}
        >
          Where?
        </TitleWithIcon>
        <P mt={[0, 0, 0, 0, '10px']}>
          Harry M. Smith <br />
          Conference Room <br />
          <br />
          414 Mason St. <br />
          Suite 800 (8th Floor) <br />
          San Francisco, CA <br />
        </P>
      </Box>
    </Flex>
  </Flex>
)

export default WhenAndWhere
