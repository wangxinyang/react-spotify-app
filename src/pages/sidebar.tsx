import React from 'react'
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material'
import { Home, Search } from '@mui/icons-material'
import { Logo } from '@/assets/svg'

function Sidebar() {
  // styledのパッケージには要注意
  // @mui/materialになります、＠emotionではない
  const NavbarContainer = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.tosei.main,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    paddingTop: '24px',
  }))

  const LogoContainer = styled('div')(({ theme }) => ({
    color: 'white',
    alignSelf: 'center',
  }))

  const ListContainer = styled(List)(({ theme }) => ({
    color: 'white',
    alignSelf: 'center',
  }))

  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo width={'131px'} height={'40px'}>
          <Link href="#" underline="none">
            {'underline="none"'}
          </Link>
        </Logo>
      </LogoContainer>
      <ListContainer>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="ホーム" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Search sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="検索" />
          </ListItemButton>
        </ListItem>
      </ListContainer>
    </NavbarContainer>
  )
}

export default Sidebar
