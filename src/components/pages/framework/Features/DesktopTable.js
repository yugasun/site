import React from 'react'
import { Box } from 'serverless-design-system'
import featuresData from './Data'
const featureList = Object.keys(featuresData)
const featureRange = [0, 1, 2, 3]
require('./featureTableDesktop.css')

const DesktopTable = props => (
  <Box display={['none', 'none', 'none', 'none', 'block']}>
    <table className='desktop-feature-table'>
      <thead>
        <tr>
          {featureList.map(feature => (
            <th key={feature}>{feature}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {featureRange.map(range => (
          <tr key={'range' + range}>
            {featureList.map(feature => (
              <td
                key={feature}
                className={range == 3 ? 'last-feature-row' : null}
              >
                {featuresData[feature][range]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </Box>
)

export default DesktopTable
