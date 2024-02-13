/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react'
import { css } from '@emotion/styled'

import MUIMenu from '@mui/material/Menu';
import MUIMenuItem from '@mui/material/MenuItem';
import MUIMenuList from '@mui/material/MenuList';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import { THEME } from '../src/components/themes'
import * as styles from '../uib/js/dark/variables';
import Button from './Button';

const defaultMenuStyle = {
  display: 'flex',
  borderRadius: styles.semanticBorderRadiusSm,
  boxShadow: styles.elevation,
  flexDirection: 'column',
  alignItems: 'flex-start',
};
function buildMenuStyle(theme) {
  const backgroundColor = THEME[theme].fg.value;
  return {
    ...defaultMenuStyle,
    backgroundColor,
  }
}

const defaultMenuItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  padding: styles.semanticSpaceAroundCompMd,
  gap: styles.semanticSpaceBetweenPatternMd,
  alignSelf: 'stretch',
  fontFamily: styles.fontFamilyInter,
  fontWeight: styles.fontWeightRegular,
  lineHeight: styles.lineHeight150,
};
function buildMenuItemStyle(theme) {
  const themeStyles = {
    backgroundColor: THEME[theme].bg.hollow.value,
    color: THEME[theme].fg.default,
  };

  return {
    ...defaultMenuItemStyle,
    ...themeStyles,
  }
}

function SubHeader({ title, theme }) {
  return (
    <div
      css={{
        display: 'flex',
        height: styles.semanticSizeCompSm,
        padding: styles.semanticSpaceAroundCompXs,
        alignItems: 'center',
        alignSelf: 'stretch',
        color: THEME[theme].fg.subtle,
        borderBottom: THEME[theme].outline['on-surface'],
        background: THEME[theme].bg.surface,
        fontFamily: styles.fontFamilyInter,
        fontSize: styles.fontSizeSm,
        fontWeight: styles.fontWeightRegular,
        lineHeight: styles.lineHeight140,
        overFlow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {title}
    </div>
  );
}

export function MenuItem({ onClick, children, theme }) {
  return (
    <MUIMenuItem
      css={{
        ...buildMenuItemStyle(theme)
      }}
      onClick={onClick}
    >
        {children}
    </MUIMenuItem>
  );
}

export function MenuList({ children }) {
  return (
    <MUIMenuList
      css={{
        display: 'flex',
        padding: styles.semanticSpaceAroundCompXs,
        flexFlow: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
      }}
    >
      {children}
    </MUIMenuList>
  );
}
const Menu = React.forwardRef(function Menu({ theme, menuItems = [], onClick, subHeader, width }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    onClick();
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        type="solid"
        size="medium"
        theme={theme}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <MUIMenu
          id="basic-menu"
          css={{
            ...buildMenuStyle(theme),
            width,
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <SubHeader title={subHeader} theme={theme}/>
          <MenuList>
            {menuItems.map(item => (
              <MenuItem
                css={{
                  ...buildMenuItemStyle(theme),
                  '&:hover': {
                    backgroundColor: styles.themeBgEmphasis,
                  }
                }}
                key={item}
                onClick={handleClose}
                theme={theme}
              >
                  <AccessAlarmIcon
                    css={{
                      height: styles.size24,
                      width: styles.size24,
                      display: 'flex',
                      alignItems: 'center',
                      gap: styles.semanticSpaceBetweenCompMd,
                      flex: '1 0 0' 
                    }}
                  />
                  {item}
              </MenuItem>
            ))}
          </MenuList>
      </MUIMenu>
    </>
  );
});

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  width: PropTypes.number,
  subHeader: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Menu;
