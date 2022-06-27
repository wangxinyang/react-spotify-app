import React from 'react'
import { Grid } from '@mui/material'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import Feed from '@/components/feed'

function Layout() {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Navbar />
        <Feed />
      </Grid>
    </Grid>
  )
}

export default Layout
