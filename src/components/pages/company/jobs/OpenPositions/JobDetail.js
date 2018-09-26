import React from 'react'
import { ResponsiveStack, Column } from 'serverless-design-system'

export default ({ location, status }) => (
  <ResponsiveStack justifyContent="space-between">
    <Column>{location}</Column>
    <Column>{status}</Column>
  </ResponsiveStack>
)
