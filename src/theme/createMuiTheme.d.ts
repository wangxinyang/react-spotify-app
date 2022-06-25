import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    falied?: PaletteColorOptions
    warning?: PaletteColorOptions
    tosei?: PaletteColorOptions
  }

  interface Palette {
    falied: PaletteColor
    warning: PaletteColor
    tosei: PaletteColor
  }
}
