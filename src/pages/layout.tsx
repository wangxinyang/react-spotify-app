import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'

function Layout() {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Navbar />
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default Layout
