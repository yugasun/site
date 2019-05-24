import React from 'react'
import Link from 'gatsby-link'
import { Box, Heading, Text, List, ListItem } from 'serverless-design-system'
import { getCurrentUrl, getParentUrl } from 'src/utils/url'
import generatedMenu from 'src/constants/generated-menu-items-new'
import { ExternalLink } from 'src/fragments'
import MetisMenu from 'react-metismenu'
require('./Sidebar.css')

const menu = [
  {
    label: 'Menu 1',
    to: 'menu-1',
  },
  {
    label: 'providers',
    to: 'xyz',
    content: [
      {
        to: '/framework/docs/providers/aws/',
        label: 'AWS',
        content: [
          {
            to: '/framework/docs/providers/cloudflare/',
            label: 'Awesome',
          },
        ],
      },
      {
        to: '/framework/docs/providers/azure/',
        label: 'azure',
      },
      {
        to: '/framework/docs/providers/cloudflare/',
        label: 'cloudflare',
      },
      {
        to: '/framework/docs/providers/fn/',
        label: 'fn',
      },
      {
        to: '/framework/docs/providers/google/',
        label: 'Google',
      },
      {
        to: '/framework/docs/providers/kubelesss/',
        label: 'Kubeless',
      },
      {
        to: '/framework/docs/providers/openwhisk/',
        label: 'OpenWhisk',
      },
      {
        to: '/framework/docs/providers/spotinst/',
        label: 'Spotinst',
      },
    ],
  },
  {
    label: 'Some',
    to: 'https://www.google.com',
  },
]

const App = props => (
  <div>
    <MetisMenu
      content={generatedMenu}
      iconNameStateVisible='dropdown-icon'
      iconNameStateHidden='dropdown-icon'
      activeLinkTo={props.activeLinkTo}
      iconNamePrefix='sls-'
    />
  </div>
)

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
        <App activeLinkTo={url} />
      </Box>
    )
  }
}
