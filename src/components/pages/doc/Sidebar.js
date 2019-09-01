import React from 'react'
import Link from 'gatsby-link'
import { Box, Text, ListItem, Flex, Image } from 'serverless-design-system'
import { getCurrentUrl, getParentUrl } from 'src/utils/url'
import { ExternalLink } from 'src/fragments'
import SidebarMenu from './SidebarMenu'
import githubGrayIcon from 'src/assets/images/github-gray.svg'

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
    const url = getCurrentUrl(__url)

    return (
      <Box className='sidebar'>
        <SidebarMenu activeLinkTo={url} />
        <ExternalLink
          to={`https://github.com/serverless/serverless/edit/master${
            this.props.head.gitLink
          }`}
        >
          <Flex ml={22} mt={72}>
            <Image src={githubGrayIcon} width='22px' height='22px' />
            <Text
              color='#8c8c8c'
              fontSize='14px'
              lineHeight='24px'
              letterSpacing='0.44px'
              ml={'12px'}
              fontFamily='Soleil'
              pb={62}
            >
              go to github
            </Text>
          </Flex>
        </ExternalLink>
      </Box>
    )
  }
}
