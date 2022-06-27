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
import {
  FavoriteBorder,
  Home,
  LibraryAdd,
  LibraryMusic,
  Search,
} from '@mui/icons-material'
import { Logo } from '@/assets/svg'

function Sidebar() {
  // styledのパッケージには要注意
  // @mui/materialになります、＠emotionではない
  const NavbarContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'calc(100% + 64px)',
    backgroundColor: theme.palette.primary.main,
  }))

  const NavbarFixedContainer = styled('div')({
    color: 'white',
    alignSelf: 'center',
    position: 'sticky',
    top: 0,
    left: 0,
  })

  const LogoContainer = styled('div')({
    color: 'white',
    alignSelf: 'center',
    paddingTop: '20px',
  })

  const ListContainer = styled(List)({
    color: 'rgb(179, 179, 179)',
    alignSelf: 'center',
    marginBottom: '20px',
  })

  const CustomizedListItem = styled(ListItem)({
    '&:hover': {
      color: 'white',
    },
  })

  return (
    <NavbarContainer>
      <NavbarFixedContainer>
        <LogoContainer>
          <Logo width={'131px'} height={'40px'}>
            <Link href="#" underline="none">
              {'underline="none"'}
            </Link>
          </Logo>
        </LogoContainer>
        <ListContainer>
          <CustomizedListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home sx={{ color: 'rgb(179, 179, 179)' }} />
              </ListItemIcon>
              <ListItemText primary="ホーム" />
            </ListItemButton>
          </CustomizedListItem>
          <CustomizedListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Search sx={{ color: 'rgb(179, 179, 179)' }} />
              </ListItemIcon>
              <ListItemText primary="検索" />
            </ListItemButton>
          </CustomizedListItem>
          <CustomizedListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LibraryMusic sx={{ color: 'rgb(179, 179, 179)' }} />
              </ListItemIcon>
              <ListItemText primary="マイライブラリ" />
            </ListItemButton>
          </CustomizedListItem>
        </ListContainer>
        <ListContainer>
          <CustomizedListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LibraryAdd sx={{ color: 'rgb(179, 179, 179)' }} />
              </ListItemIcon>
              <ListItemText primary="プレイリストを作成" />
            </ListItemButton>
          </CustomizedListItem>
          <CustomizedListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteBorder sx={{ color: 'rgb(179, 179, 179)' }} />
              </ListItemIcon>
              <ListItemText primary="お気に入りの曲" />
            </ListItemButton>
          </CustomizedListItem>
        </ListContainer>
      </NavbarFixedContainer>
    </NavbarContainer>
  )
}

export default Sidebar
