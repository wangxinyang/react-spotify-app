import React from 'react'
import { Box, Button, Divider, styled, Typography } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { fontWeight } from '@mui/system'

const NavbarContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  padding: '10px 30px',
}))

const MenuContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
}))

const MenuButton = styled(Button)(({ theme }) => ({
  color: '#9D9D9D',
  fontWeight: '700',
  fontSize: '16px',
  '&:hover': {
    color: 'white',
  },
}))

const CustomizedMenuButton = styled(MenuButton)(({ theme }) => ({
  margin: '0 20px',
  backgroundColor: 'white',
  borderRadius: '20px',
  color: '#000',
  '&:hover': {
    color: '#000',
    backgroundColor: '#b7b7b7',
  },
}))

const CustomizedDivider = styled(Divider)({
  display: 'inline-block',
  backgroundColor: '#fff',
  width: '1px',
  margin: '5px 0',
})

function Navbar() {
  return (
    <NavbarContainer>
      <Box>
        <KeyboardArrowLeft />
        <KeyboardArrowRight />
      </Box>
      <MenuContainer>
        <MenuButton size="large">プレミアム</MenuButton>
        <MenuButton size="large">サポート</MenuButton>
        <MenuButton size="large">ダウンロード</MenuButton>
        <CustomizedDivider orientation="vertical" flexItem />
        <MenuButton size="large">サインアップ</MenuButton>
        <CustomizedMenuButton variant="contained" size="large">
          ログイン
        </CustomizedMenuButton>
      </MenuContainer>
    </NavbarContainer>
  )
}

export default Navbar
