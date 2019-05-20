import React from 'react'
import Link from 'gatsby-link'
import { Box, Heading, Text, List, ListItem } from 'serverless-design-system'
import { getCurrentUrl, getParentUrl } from 'src/utils/url'
import generatedMenu from 'src/constants/generated-menu-items'
import { ExternalLink } from 'src/fragments'

export default class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.sidebarNode = null
    this.sidebarNodeOffset = null
  }

  renderList() {
    const { __url, head } = this.props
    const url = getCurrentUrl(__url)
    const trimmedURL = url.replace(/\/$/, '')

    let menu = []
    // Check for custom items in head yaml
    if (head && head.menuItems) {
      menu = menu.concat(head.menuItems)
    }

    // Check for items in generated nav menu
    const currentPageMenu = generatedMenu[__url] || generatedMenu[trimmedURL]
    if (currentPageMenu) {
      menu = menu.concat(currentPageMenu.children)
    }

    // Check for items in generated nav menu of parent
    if (menu.length === 0) {
      const parentMenu = generatedMenu[getParentUrl(trimmedURL)]
      if (parentMenu) {
        menu = menu.concat(parentMenu.children)
      }
    }

    // DO sort here
    let items
    const alreadyLinked = {}
    if (menu && menu.length > 0) {
      items = menu.map((item, i) => {
        const currentStyle = item.path === trimmedURL ? 'currentURL' : ''
        // ensure all internal links end with a trialing /
        item.path =
          item.path.startsWith('/') && !item.path.endsWith('/')
            ? `${item.path}/`
            : item.path

        // check if already linked
        if (alreadyLinked && alreadyLinked[item.path]) {
          return null
        }
        alreadyLinked[item.path] = true
        //use Link component type according to whether the link is internal or external
        const FinalLinkType = item.path.startsWith('http') ? ExternalLink : Link

        return (
          <ListItem key={i} className={`subPageLink ${currentStyle}`}>
            <FinalLinkType to={item.path}>
              {item.title || item.menuText}
            </FinalLinkType>
          </ListItem>
        )
      })
    }
    return items
  }

  render() {
    const { __url } = this.props
    const items = this.renderList()
    const url = getCurrentUrl(__url)
    const trimmedURL = url.replace(/\/$/, '')
    const parent = trimmedURL.split('/')
    const parentName = parent[parent.length - 1]
    let parentDisplay = parentName
    let parentURL

    let menu = generatedMenu[__url] || generatedMenu[trimmedURL]
    if (!menu) {
      parentURL = getParentUrl(trimmedURL)
      menu = generatedMenu[parentURL]
    }

    if (menu && menu.index) {
      parentDisplay = menu.index[0].title
    }

    return (
      <Box className='sidebar' pt={[0, 0, 0, 0, 92]}>
        <Box
          className='sidebarInner'
          ref={ref => {
            this.sidebarRef = ref
          }}
        >
          <Box className='pageContext'>{parentDisplay}</Box>
          <Box className='subPages'>
            <List>{items}</List>
          </Box>
        </Box>
      </Box>
    )
  }
}
