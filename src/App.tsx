import Navbar from '@/pages/navbar'
import Sidebar from '@/pages/sidebar'
import Feed from '@/pages/feed'
import { Grid, ThemeProvider } from '@mui/material'
import theme from '@/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Navbar />
          <Feed />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
