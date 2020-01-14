import React from 'react'
import imgLanguage from 'src/assets/images/language.svg'
import { List, ListItem } from 'serverless-design-system'
import { homepage, cn } from 'src/constants/urls.cn'
import MenuTitle from './Title'
import MenuDescription from './MenuDescription'
import SubMenuItem from './SubMenuItem'
import { Box } from 'serverless-design-system'
import './language.css'

const LanguageSelect = ({ pathName }) => (
  <Box>
    <MenuTitle
      name={pathName && pathName.indexOf('/cn') === 0 ? '简体中文' : 'English'}
    >
      <img src={imgLanguage} className="lang-icon" />
    </MenuTitle>
    <MenuDescription
      wrapperStyles={{
        display: 'block',
        backgroundColor: 'red',
      }}
    >
      <List m={0} ml={[4, 4, 0]} p={0}>
        <ListItem.noStyleType>
          <SubMenuItem
            navProps={{
              to: homepage + '#en',
              backgroundOnHover: true,
              completed: true,
            }}
          >
            English
          </SubMenuItem>
        </ListItem.noStyleType>
        <ListItem.noStyleType>
          <SubMenuItem
            navProps={{
              to: cn,
              backgroundOnHover: true,
              completed: true,
            }}
          >
            简体中文
          </SubMenuItem>
        </ListItem.noStyleType>
      </List>
    </MenuDescription>
  </Box>
)

export default LanguageSelect
