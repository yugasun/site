import React, { Component } from 'react'
import { Flex, Column, Text, Background, Box } from 'serverless-design-system'
import Terminal from './Terminal'
import { Button } from 'src/fragments/DesignSystem'
import { DashboardLink } from 'src/fragments'
import styled from 'styled-components'

const providers = [
  {
    id: 'aws',
    name: 'AWS',
    template: 'aws-nodejs',
  },
  {
    id: 'gcp',
    name: 'Google Cloud Platform',
    template: 'google-nodejs',
  },
  {
    id: 'azure',
    name: 'Azure',
    template: 'azure-nodejs',
  },
  {
    id: 'openwhisk',
    name: 'OpenWhisk',
    template: 'openwhisk-nodejs',
  },
  {
    id: 'kubeless',
    name: 'Kubeless',
    template: 'kubeless-nodejs',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    template: 'cloudflare-workers',
  },
]

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

const HoverableText = styled(Text)`
  &:hover {
    color: black;
    cursor: pointer;
  }
`

const BackgroundWithBorderRadius = styled(Background)`
  border-radius: ${props => (props.active ? '4px' : 'null')};
  box-shadow: ${props =>
    props.active ? '2px 2px 8px 0 rgba(0, 0, 0, 0.08)' : 'null'};
  border: ${props =>
    props.active ? 'solid 1px rgba(234, 234, 234, 0.3)' : 'null'};
`

class Options extends Component {
  state = {
    activeProviderId: 'aws',
    activeProviderTemplate: 'aws-nodejs',
  }

  updateActiveProvider(providerId) {
    const activeProviderTemplate = providers.filter(p => p.id === providerId)[0]
      .template

    this.setState({
      activeProviderId: providerId,
      activeProviderTemplate: activeProviderTemplate,
    })
  }

  render() {
    return (
      <Flex mt={['12px', '12px', 42, 42, 92]}>
        <Box display={['none', 'none', 'block']}>
          <Column ml={[0, 0, 0, 82, 32, 72]} mr={[0, 0, 16, 16, 82, 136]}>
            {providers.map(provider => (
              <BackgroundWithBorderRadius
                key={provider.id}
                background={
                  provider.id === this.state.activeProviderId
                    ? 'white'
                    : 'transparent'
                }
                height={42}
                width={[0, 0, 240, 240, 312]}
                active={
                  provider.id === this.state.activeProviderId ? true : false
                }
              >
                <HoverableText
                  key={provider.id}
                  color={
                    provider.id === this.state.activeProviderId
                      ? '#000000'
                      : '#8c8c8c'
                  }
                  fontSize={'18px'}
                  lineHeight={'30px'}
                  letterSpacing={'-0.28px'}
                  fontFamily='SoleilBk'
                  mt={'10px'}
                  ml={32}
                  onClick={() => this.updateActiveProvider(provider.id)}
                >
                  {provider.name}
                </HoverableText>
              </BackgroundWithBorderRadius>
            ))}
          </Column>
        </Box>
        <Column mx='auto'>
          <Box display={['block', 'block', 'none']} mb={22}>
            <StyledSelect>
              {providers.map(provider => (
                <option
                  key={provider.id}
                  onClick={() => this.updateActiveProvider(provider.id)}
                >
                  {provider.name}
                </option>
              ))}
            </StyledSelect>
          </Box>
          <Terminal templateName={this.state.activeProviderTemplate} />
          <Flex justifyContent='flex-end' mt={42} mb={[0, 0, 0, 0, 162]}>
            <DashboardLink>
              <Button width={[300, 300, 176]}>get started free</Button>
            </DashboardLink>
          </Flex>
        </Column>
      </Flex>
    )
  }
}

export default Options
