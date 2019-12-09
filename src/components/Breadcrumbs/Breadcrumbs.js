/* fork of https://github.com/TiuSh/react-simple-breadcrumb/ */
import React from 'react'
import { Box, List, ListItem, Text } from 'serverless-design-system'
import BreadcrumbItem from './item'
import BreadcrumbsWrapper from './BreadcrumbsWrapper'

/**
<Breadcrumb
  getUrlFromPathSegments={function getUrlFromPathSegments(pathSegments) {
    return 'https://github.com/TiuSh/react-simple-breadcrumb/tree/master/' + pathSegments.join('/');
  }}
  path="example/src/example.jsx"
/>
*/

const Breadcrumbs = ({
  path,
  pathRoot,
  pathSeparator,
  getUrlFromPathSegments,
  onClick,
  className,
  rightContent,
}) => {
  const pathArray = explodePath(path, pathSeparator)
  let moreThan4Paths = false
  let useOnlyAfterId = 0
  let onOverviewPage = false
  if (pathArray.length > 4) {
    moreThan4Paths = true
    useOnlyAfterId = pathArray.length - pathArray.slice(-4).length
  } else if (pathArray.length == 2) {
    onOverviewPage = true
  } else {
    useOnlyAfterId = 1
  }

  let renderRight
  if (rightContent) {
    renderRight = <Box className='rightContent'>{rightContent}</Box>
  }
  return (
    <BreadcrumbsWrapper>
      <List className={`breadcrumbs ${className}`}>
        {pathRoot ? (
          <ListItem key='root' className='item basePath'>
            <Text.span className='itemInner' fontFamily='Soleil'>
              <BreadcrumbItem
                label={pathRoot}
                pathSegments={[]}
                {...{ getUrlFromPathSegments, onClick }}
              />
            </Text.span>
          </ListItem>
        ) : null}

        {moreThan4Paths ? (
          <ListItem key={'root-docs'} className={`item`}>
            <Text.span className='itemInner'>
              <BreadcrumbItem
                label={'...'}
                pathSegments={['framework', 'docs']}
                {...{ getUrlFromPathSegments, onClick }}
              />
            </Text.span>
          </ListItem>
        ) : null}
        {onOverviewPage ? (
          <React.Fragment>
            <ListItem key={'root-docs'} className={`item`}>
              <Text.span className='itemInner'>
                <BreadcrumbItem
                  label={'docs'}
                  pathSegments={['framework', 'docs']}
                  {...{ getUrlFromPathSegments, onClick }}
                />
              </Text.span>
            </ListItem>
            <ListItem key={'root-docs-overview'} className={`item current`}>
              <Text.span className='itemInner'>
                <BreadcrumbItem
                  label={'overview'}
                  pathSegments={['framework', 'docs']}
                  {...{ getUrlFromPathSegments, onClick }}
                />
              </Text.span>
            </ListItem>
          </React.Fragment>
        ) : (
          pathArray.map((segment, id) => {
            const pathSegments = pathArray
              .map(encodeURIComponent)
              .slice(0, id + 1)

            const active = pathArray.length === id + 1 ? 'current' : ''
            if (useOnlyAfterId <= id) {
              return (
                <ListItem key={id} className={`item ${active}`}>
                  <Text.span className='itemInner'>
                    <BreadcrumbItem
                      label={segment}
                      pathSegments={pathSegments}
                      {...{ getUrlFromPathSegments, onClick }}
                    />
                  </Text.span>
                </ListItem>
              )
            }
          })
        )}
      </List>
      {renderRight}
    </BreadcrumbsWrapper>
  )
}

Breadcrumbs.defaultProps = {
  pathSeparator: '/',
  getUrlFromPathSegments: pathSegments => {
    const link = `/${pathSegments.join('/')}/`
    return link
  },
}

export default Breadcrumbs

/**
 * Removes spaces and the given character from both sides of the string
 *
 * @param {String} path The path to be trimed
 * @param {String} char The character trime with spaces
 *
 * @returns {String} The trimed string
 */

const trimPath = (path, char = '/') => {
  const escapedString = char.replace(/[\[\](){}?*+\^$\\.|\-]/g, '\\$&')

  return path.replace(
    new RegExp(`^[ ${escapedString}]+|[ ${escapedString}]+$`, 'g'),
    ''
  )
}
/**
 * Create an array of segments from a path
 *
 * @param {String} path The path
 * @param {String} pathSeparator The separator used in the path
 *
 * @returns {Array} An array of segments
 */
const explodePath = (path, pathSeparator) => {
  const trimedPath = trimPath(path, pathSeparator)

  if (trimedPath === '') {
    return []
  }

  return trimedPath.split(pathSeparator)
}
