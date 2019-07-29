import React, { Component } from 'react'
import { Column, Text, Flex, Box } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'
import MobileCTA from './MobileCTA'
import Actions from './Actions'
import useCasesData from './Data'
import Terminal from './Terminal'
import styled from 'styled-components'

const HR = styled('hr')`
  border-color: #eaeaea;
  max-width: 98%;
  margin: 0;
  z-index: -20;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`

const HoverableText = styled(Text)`
  &:hover {
    cursor: pointer;
  }
`

const StyledSelect = styled('select')`
  width: 300px;
  height: 42px;
  border-radius: 4px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
  background-color: white;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.28px;
  font-family: 'SoleilBk';
  outline: none;
`

class UseCases extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeUseCase: 'apis',
      activeUseCaseTitle: useCasesData.filter(f => f.id === 'apis')[0].title,
      activeUseCaseDescription: useCasesData.filter(f => f.id === 'apis')[0]
        .description,
      activeUseCaseCreateCommand: useCasesData.filter(f => f.id === 'apis')[0]
        .createCommand,
    }
    this.updateActiveUseCaseMobile = this.updateActiveUseCaseMobile.bind(this)
    this.updateActiveUseCase = this.updateActiveUseCase.bind(this)
  }

  updateActiveUseCaseMobile(event) {
    const useCaseId = event.target.value
    const useCase = useCasesData.filter(f => f.id === useCaseId)[0]
    this.updateActiveUseCase(useCase)
  }

  updateActiveUseCase(useCase) {
    this.setState({
      activeUseCase: useCase.id,
      activeUseCaseTitle: useCase.title,
      activeUseCaseDescription: useCase.description,
      activeUseCaseCreateCommand: useCase.createCommand,
    })
  }

  render() {
    return (
      <Flex>
        <Column width={1}>
          <Box width={[1, 1, 1, 1, 0.5]}>
            <Heading.h3 mb={46} align={['center', 'center', 'left']}>
              Use cases
            </Heading.h3>
            <Box display={['none', 'none', 'block']}>
              <Flex pb={'7px'} justifyContent={['space-between']}>
                {useCasesData.map(useCase => (
                  <HoverableText
                    fontFamily={'SoleilBk'}
                    key={useCase.id}
                    fontSize={'18px'}
                    lineHeight={'30px'}
                    letterSpacing={['-0.28px']}
                    mr={[30, 30, 30, 30, '10px', 36]}
                    mb={['-9px']}
                    style={
                      useCase.id === this.state.activeUseCase
                        ? { borderBottom: '2px solid black', color: '#000' }
                        : { color: '#8c8c8c' }
                    }
                    onClick={() => this.updateActiveUseCase(useCase)}
                  >
                    {useCase.title}
                  </HoverableText>
                ))}
              </Flex>
              <HR />
            </Box>
            <Box display={['block', 'block', 'none']}>
              <StyledSelect onChange={this.updateActiveUseCaseMobile}>
                {useCasesData.map(useCase => (
                  <option key={useCase.id} value={useCase.id}>
                    {useCase.title}
                  </option>
                ))}
              </StyledSelect>
            </Box>
          </Box>
          <Text
            fontSize={'24px'}
            lineHeight={'38px'}
            letterSpacing={'-0.38px'}
            fontFamily='Soleil'
            mt={62}
          >
            {this.state.activeUseCaseTitle}
          </Text>
          <Flex flexDirection={['column', 'column', 'row']}>
            <Column width={[1, 1, 0.5, 0.5, 0.4, 0.4]}>
              <Box minHeight={[0, 0, 234, 182, 192, 174]}>
                <P mb={0} mt={'8px'}>
                  {this.state.activeUseCaseDescription}
                </P>
              </Box>
              <Box display={['none', 'none', 'block']}>
                <Actions />
              </Box>
            </Column>
            <Terminal createCommand={this.state.activeUseCaseCreateCommand} />
            <MobileCTA />
          </Flex>
        </Column>
      </Flex>
    )
  }
}

export default UseCases
