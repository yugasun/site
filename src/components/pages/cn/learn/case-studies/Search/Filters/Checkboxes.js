import React from 'react'
import {
  Box,
  Flex,
  InlineBlock,
  Row,
  Column,
  Text,
} from 'serverless-design-system'
import { FilterCheckbox, Label } from 'src/fragments/DesignSystem/Form'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCheckboxes: [],
    }
  }

  updateCheckboxes(fieldName, isChecked) {
    let selectedCheckboxes = this.state.selectedCheckboxes
    let selectValue = fieldName.text
    if (selectValue === 'version 1') {
      selectValue = 'v1'
    } //TODO: refactor
    if (isChecked) {
      selectedCheckboxes.push(selectValue)
    } else {
      selectedCheckboxes.splice(selectedCheckboxes.indexOf(selectValue), 1)
    }
    this.setState({
      selectedCheckboxes: selectedCheckboxes,
    })

    this.props.refreshFilter({
      [this.props.name]: this.state.selectedCheckboxes,
    })
  }

  render() {
    return (
      <Row>
        <Column>
          {this.props.options[0].map(({ id, name, text }, index) => (
            <Box mt={index === 0 ? 1 : '6px'} key={id} mr={[0, 0, 58, 48, 48]}>
              <Label htmlFor={id}>
                <Flex.verticallyCenter>
                  <FilterCheckbox
                    name={name}
                    id={id}
                    onChange={({ target }) =>
                      this.updateCheckboxes({ text }, target.checked)
                    }
                  />
                  <InlineBlock>
                    <Text
                      fontSize='12px'
                      fontFamily='Soleil'
                      lineHeight='16px'
                      letterSpacing='0'
                      color='#5b5b5b'
                    >
                      {text}
                    </Text>
                  </InlineBlock>
                </Flex.verticallyCenter>
              </Label>
            </Box>
          ))}
        </Column>
        <Column>
          {this.props.options[1]
            ? this.props.options[1].map(({ id, name, text }, index) => (
                <Box mt={index === 0 ? 1 : '6px'} key={id}>
                  <Label htmlFor={id}>
                    <Flex.verticallyCenter>
                      <FilterCheckbox
                        name={name}
                        id={id}
                        onChange={({ target }) =>
                          this.updateCheckboxes({ text }, target.checked)
                        }
                      />
                      <InlineBlock>
                        <Text
                          fontSize='12px'
                          fontFamily='Soleil'
                          lineHeight='16px'
                          letterSpacing='0'
                          color='#5b5b5b'
                        >
                          {text}
                        </Text>
                      </InlineBlock>
                    </Flex.verticallyCenter>
                  </Label>
                </Box>
              ))
            : ''}
        </Column>
      </Row>
    )
  }
}
