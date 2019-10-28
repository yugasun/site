import React from 'react'

import {
  Box,
  Flex,
  InlineBlock,
  Heading,
  Text,
  Image,
} from 'serverless-design-system'
import {
  TextArea,
  Label,
  TextField,
  Checkbox,
  RadioButton,
} from 'src/fragments/DesignSystem/Form'
import { Button } from 'src/fragments/DesignSystem'
import addHubspotEvent from 'src/utils/forms/hubspotEvent'
import formHandler from 'src/utils/formHandler'
import { validateEmail } from 'src/utils/validator'
import hubspotIdentify from 'src/utils/analytics/identify'
import tickIconBig from 'src/assets/images/tick-icon-big.svg'
import tickIconSmall from 'src/assets/images/tick-icon-small.svg'

import styled from 'styled-components'
import { Column } from 'serverless-design-system/dist/atoms'
const formId = 'sales-contact-us'

const StyledForm = styled(Flex)`
  position: relative;
  background-color: white;
  padding: 32px;
  width: 608px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #eaeaea;
  width: 100%;
`

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      success: false,
      contact_purpose: this.props.formHeadline
        ? this.props.formHeadline
        : 'Request sales call',
      email: '',
      first_name: '',
      last_name: '',
      poi: '',
      developers_count: '',
      message: '',
      infrastructure: {
        AWS: false,
        'Google Cloud Platform': false,
        'Microsoft Azure': false,
        Other: false,
      },
    }
  }

  onSubmit = event => {
    event.preventDefault()
    const {
      email,
      first_name,
      last_name,
      company,
      poi,
      developers_count,
      message,
    } = this.state

    if (!validateEmail(email)) {
      alert('Please enter valid email address')
      return false
    }

    this.setState({ loading: true })
    const infras = Object.keys(this.state.infrastructure)
    const infrastructure = infras.filter(
      infra => this.state.infrastructure[infra]
    )

    const formData = {
      formId: formId,
      fields: {
        email,
        first_name,
        last_name,
        company,
        poi,
        developers_count,
        message,
        infrastructure,
      },
    }

    if (!this.state.loading) {
      formHandler(formData)
        .then(res => {
          this.sendToHubspot(formData.fields)
          this.setState({
            success: true,
            loading: false,
          })
        })
        .catch(e => {
          console.log('ERROR', e)
          this.setState({
            success: false,
            loading: false,
            error: e,
          })
        })
    }

    return false
  }

  sendToHubspot = data => {
    data.lead_source = 'Contact Sales Page'
    data.firstname = data.first_name
    data.lastname = data.last_name
    data.infrastructure = data.infrastructure.toString()
    hubspotIdentify(null, data)
    addHubspotEvent(data, 'sales')
  }

  updateInfrastructure = (fieldName, value) => {
    this.setState({
      infrastructure: { ...this.state.infrastructure, [fieldName]: value },
    })
  }

  updateDeveloperCount = value => {
    this.setState({
      developers_count: value,
    })
  }

  updatePoi = value => {
    this.setState({
      poi: value,
    })
  }

  render() {
    const { loading, success } = this.state
    let submitButtonText
    if (loading) {
      submitButtonText = 'loading'
    } else if (success) {
      submitButtonText = 'request sent'
    } else {
      submitButtonText = 'send request'
    }

    return (
      <React.Fragment>
        <Box
          id={'sales-contact-form'}
          pb={
            this.props.customPb ? this.props.customPb : [92, 92, 120, 120, 150]
          }
          style={{ zIndex: '15' }}
        />
        <form onSubmit={this.onSubmit} id={formId}>
          <StyledForm
            flexDirection={['column', 'column', 'column', 'column', 'row']}
            mt={[0, 0, 0, 0, -459]}
          >
            <Box>
              <Text
                fontFamily='SoleilBk'
                fontSize='18px'
                lineHeight={'30px'}
                letterSpacing={'-0.28px'}
                mb={0}
              >
                Request more information
              </Text>

              <Box mt={2} width={1}>
                <Label color='#8c8c8c'>Work e-mail</Label>
                <TextField
                  placeholder='mary.smith@business.com'
                  name='email'
                  onChange={({ target }) =>
                    this.setState({ email: target.value, success: false })
                  }
                  required
                />
              </Box>

              <Flex.spaceBetween mt={2}>
                <Column width={49 / 100}>
                  <Label color='#8c8c8c'>First name</Label>
                  <TextField
                    placeholder='Mary'
                    name='first_name'
                    onChange={({ target }) =>
                      this.setState({
                        first_name: target.value,
                        success: false,
                      })
                    }
                    required
                  />
                </Column>
                <Column width={49 / 100}>
                  <Label color='#8c8c8c'>Last name</Label>
                  <TextField
                    placeholder='Smith'
                    name='last_name'
                    onChange={({ target }) =>
                      this.setState({ last_name: target.value, success: false })
                    }
                    required
                  />
                </Column>
              </Flex.spaceBetween>

              <Box mt={2}>
                <Label color='#8c8c8c'>Company name</Label>
                <TextField
                  placeholder='Business.com'
                  name='company'
                  onChange={({ target }) =>
                    this.setState({ company: target.value, success: false })
                  }
                  required
                />
              </Box>

              <Box mt={2}>
                <Label>
                  How is your company currently using the Serverless Framework?
                </Label>
                <Flex flexDirection={['column', 'column', 'row']}>
                  <Box mt={1} width={[1, 1, 1 / 3]}>
                    <Label htmlFor='five-to-fifteen'>
                      <Flex.verticallyCenter>
                        <RadioButton
                          name='poi'
                          id='five-to-fifteen'
                          onChange={() => this.updatePoi('In Production')}
                        />
                        <InlineBlock>in production</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                  <Box mt={1} width={[1, 1, 1 / 3]}>
                    <Label htmlFor='in-development'>
                      <Flex.verticallyCenter>
                        <RadioButton
                          name='poi'
                          id='in-development'
                          onChange={() => this.updatePoi('In Development')}
                        />
                        <InlineBlock>in development</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                  <Box mt={1} width={[1, 1, 1 / 3]}>
                    <Label htmlFor='not-at-all'>
                      <Flex.verticallyCenter>
                        <RadioButton
                          name='poi'
                          id='not-at-all'
                          onChange={() => this.updatePoi('Not at all')}
                        />
                        <InlineBlock>not at all</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                </Flex>
              </Box>

              <Box mt={2}>
                <Label>
                  How many developers in your organization plan on doing
                  serverless development?
                </Label>
                <Flex flexDirection={['column', 'column', 'row']}>
                  <Box mt={1} width={[1, 1, 1 / 3]}>
                    <Label htmlFor='less-than-five'>
                      <Flex.verticallyCenter>
                        <RadioButton
                          name='developer-count'
                          id='less-than-five'
                          onChange={() =>
                            this.updateDeveloperCount('Less than 5')
                          }
                        />
                        <InlineBlock>less than 5</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                  <Box mt={1} width={[1, 1, 1 / 3]}>
                    <Label htmlFor='five-to-fifteen'>
                      <Flex.verticallyCenter>
                        <RadioButton
                          name='developer-count'
                          id='five-to-fifteen'
                          onChange={() => this.updateDeveloperCount('5 - 15')}
                        />
                        <InlineBlock>5-15</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                  <Box mt={1} width={[1, 1, 1 / 3]}>
                    <Label htmlFor='fifteen-to-thirty'>
                      <Flex.verticallyCenter>
                        <RadioButton
                          name='developer-count'
                          id='fifteen-to-thirty'
                          onChange={() => this.updateDeveloperCount('15 - 30')}
                        />
                        <InlineBlock>15-30</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                </Flex>
                <Flex flexDirection={['column', 'column', 'row']}>
                  <Box mt={1} width={[1, 1, 1 / 3]}>
                    <Label htmlFor='thirty-to-hundred'>
                      <Flex.verticallyCenter>
                        <RadioButton
                          name='developer-count'
                          id='thirty-to-hundred'
                          onChange={() => this.updateDeveloperCount('30 - 100')}
                        />
                        <InlineBlock>30-100</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                  <Box mt={1} width={[1, 1, 1 / 3]}>
                    <Label htmlFor='more-than-hundred'>
                      <Flex.verticallyCenter>
                        <RadioButton
                          name='developer-count'
                          id='more-than-hundred'
                          onChange={() =>
                            this.updateDeveloperCount('More than 100')
                          }
                        />
                        <InlineBlock>more than 100</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                </Flex>
              </Box>
              <Box mt={[2]}>
                <Label>
                  Which infrastructure providers are you utilizing with the
                  Serverless Framework?
                </Label>
                <Flex flexDirection={['column', 'column', 'row']}>
                  <Box mt={1} width={[1, 1, 1 / 2]}>
                    <Label htmlFor='aws'>
                      <Flex.verticallyCenter>
                        <Checkbox
                          name='infrastructure'
                          id='aws'
                          onChange={({ target }) =>
                            this.updateInfrastructure('AWS', target.checked)
                          }
                        />
                        <InlineBlock>AWS</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                  <Box mt={1} width={[1, 1, 1 / 2]}>
                    <Label htmlFor='google-cloud-platform'>
                      <Flex.verticallyCenter>
                        <Checkbox
                          name='infrastructure'
                          id='google-cloud-platform'
                          onChange={({ target }) =>
                            this.updateInfrastructure(
                              'Google Cloud Platform',
                              target.checked
                            )
                          }
                        />
                        <InlineBlock>Google Cloud Platform</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                </Flex>
                <Flex flexDirection={['column', 'column', 'row']}>
                  <Box mt={1} width={[1, 1, 1 / 2]}>
                    <Label htmlFor='azure'>
                      <Flex.verticallyCenter>
                        <Checkbox
                          name='infrastructure'
                          id='azure'
                          onChange={({ target }) =>
                            this.updateInfrastructure(
                              'Microsoft Azure',
                              target.checked
                            )
                          }
                        />
                        <InlineBlock>Microsoft Azure</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                  <Box mt={1} width={[1, 1, 1 / 2]}>
                    <Label htmlFor='other'>
                      <Flex.verticallyCenter>
                        <Checkbox
                          name='infrastructure'
                          id='other'
                          onChange={({ target }) =>
                            this.updateInfrastructure('Other', target.checked)
                          }
                        />
                        <InlineBlock>Other</InlineBlock>
                      </Flex.verticallyCenter>
                    </Label>
                  </Box>
                </Flex>
              </Box>

              <Box mt={2}>
                <Label>Anything else?</Label>
                <TextArea
                  placeholder='Please describe your Serverless use-case and any goals your team has with Serverless.'
                  name='message'
                  onChange={({ target }) =>
                    this.setState({ message: target.value, success: false })
                  }
                  height={'274px'}
                />
              </Box>

              <Flex mt={3} justifyContent={'flex-end'}>
                <Button
                  disabled={success}
                  style={{
                    cursor: success ? 'not-allowed' : 'pointer',
                    backgroundColor: success ? '#8c8c8c' : '#fd5750',
                  }}
                >
                  <Flex justifyContent='center' alignItems='center'>
                    {success ? (
                      <Box pr={'9px'}>
                        <Image
                          src={tickIconSmall}
                          width={'16px'}
                          height={'9.5px'}
                          pr={2}
                        />
                      </Box>
                    ) : null}
                    {loading ? (
                      <Image src={tickIconBig} width={'32px'} />
                    ) : (
                      <Box>{submitButtonText}</Box>
                    )}
                  </Flex>
                </Button>
              </Flex>
            </Box>
          </StyledForm>
        </form>
      </React.Fragment>
    )
  }
}
