import React from 'react'
import styled from 'styled-components'
import { InlineFlex, Column, Text } from 'serverless-design-system'

const TabWrapper = styled(Column)`
  background: ${({ background }) => background};
  background-size: ${({ backgroundSize }) => backgroundSize};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
  cursor: ${({ selected }) => (selected ? 'default' : 'pointer')};
  span {
    color: ${({ selected }) => (selected ? 'white' : '#8c8c8c')};
  }

  &:hover {
    span {
      color: white;
    }
  }
`

const Tab = ({ datum, onClick, selected, ...styles }) => {
  const containerStyles = !selected
    ? styles.tabContainerStyle
    : {
        ...styles.tabContainerStyle,
        ...styles.selectedTabContainerStyle,
      }

  const labelStyles = !selected
    ? styles.labelStyle
    : {
        ...styles.labelStyle,
        ...styles.selectedLabelStyle,
      }

  return (
    <TabWrapper
      onClick={() => onClick(datum)}
      selected={selected}
      {...containerStyles}
    >
      <Text.span {...labelStyles}>{datum.label}</Text.span>
    </TabWrapper>
  )
}

export default ({ data, selectedValue, onTabSelect, ...styleProps }) => (
  <InlineFlex flexDirection={['column', 'column', 'row']}>
    {data.map(datum => (
      <Tab
        datum={datum}
        key={datum.value}
        selected={datum.value === selectedValue}
        onClick={onTabSelect}
        {...styleProps}
      />
    ))}
  </InlineFlex>
)
