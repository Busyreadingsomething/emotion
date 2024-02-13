/** @jsx jsx */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react'
import { css } from '@emotion/styled'

import MUIDrawer from '@mui/material/Drawer';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { THEME } from '../src/components/themes'
import * as styles from '../uib/js/dark/variables';

const MENU_ITEMS = [
  {
    label: 'Table of Contents',
    icon: FormatListBulletedIcon,
  },
  {
    label: 'Bookmarks',
    icon: BookmarkIcon,
  },
  {
    label: 'Your List',
    icon: PlaylistAddIcon,
  },
  {
    label: 'Settings',
    icon: SettingsIcon,
  },
  {
    label: 'Logout',
    icon: LogoutIcon,
  },
];

const Drawer = React.forwardRef(function Drawer({ anchor = 'left', theme, open, onClose }) {
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    onClose(open);
  };

  console.log('BG-COLOR', theme, THEME[theme].bg.page);

  return (
    <MUIDrawer
      css={{
        display: 'flex',
        height: '100%',
        padding: styles.semanticSpaceAroundCompMd,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderTop: `${styles.borderWidthSm} solid ${THEME[theme].fg['on-page']}`,
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 'auto',
        maxWidth: styles.size208
      }}
      PaperProps={{
        sx: {
          backgroundColor: THEME[theme].bg.page,
        }
      }}
      open={open}
      anchor={anchor}
      onClose={toggleDrawer(false)}
    >
      <DrawerList menuItems={MENU_ITEMS} onSelect={() => onClose(!open)} theme={theme} />
    </MUIDrawer>
  )
});

function DrawerList({ menuItems, onSelect, theme }) {
  return (
    <List
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: styles.semanticSpaceAroundCompSm,
      }}
    >
      {menuItems.map((item) => (
        <DrawerItem key={item.label} item={item} onSelect={onSelect} theme={theme} />
      ))
      }
    </List>
  );
}

function DrawerItem({ item, onSelect, theme }) {
  return (
    <ListItem
      key={item.label}
      css={{
        display: 'flex',
        minWidth: styles.size224,
        padding: styles.semanticSpaceAroundCompMd,
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: styles.semanticSpaceBetweenCompMd,
        borderRadius: styles.semanticBorderRadiusSm,
        background: THEME[theme].bg.hollow,
      }}
      onClick={onSelect}
      onKeyDown={onSelect}
    >
      <ListItemIcon
        css={{
          color: THEME[theme].fg.default,
        }}
      >
        <item.icon />
      </ListItemIcon>
      <ListItemText
        css={{
          flex: '1 0 0',
          fontFamily: styles.fontFamilyInter,
          fontSize: styles.fontSizeMd,
          fontWeight: styles.fontWeightBold,
          lineHeight: styles.lineHeight150,
          textOverflow: 'ellipsis',
          color: THEME[theme].fg.default,
        }}
      >
        {item.label}
      </ListItemText>
    </ListItem>
  );
}

Drawer.propTypes = {
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Drawer;
