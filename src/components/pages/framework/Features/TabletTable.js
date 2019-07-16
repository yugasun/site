import React from 'react'
import { Box } from 'serverless-design-system'
import featuresData from './Data'
const featureListOne = Object.keys(featuresData).splice(0, 3)
const featureRange = [0, 1, 2, 3]

const featureListTwo = Object.keys(featuresData).splice(3, 4)
require('./featureTableTablet.css')

const TabletTable = props => (
  <Box display={['none', 'none', 'block', 'block', 'none']}>
    <table className='tablet-feature-table'>
      <thead>
        <tr>
          {featureListOne.map(feature => (
            <th key={feature}>{feature}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {featureRange.map(range => (
          <tr key={'range' + range}>
            {featureListOne.map(feature => (
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
    <Box>
      <table className='tablet-feature-table'>
        <thead>
          <tr>
            {featureListTwo.map(feature => (
              <th key={feature}>{feature}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureRange.map(range => (
            <tr key={'range' + range}>
              {featureListTwo.map(feature => (
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
  </Box>
)

export default TabletTable
