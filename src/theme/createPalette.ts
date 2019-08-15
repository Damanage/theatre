import React from 'react'
import createPalette, { PaletteOptions, Palette } from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    success: React.CSSProperties['color']
    warning: React.CSSProperties['color']
    yellow: React.CSSProperties['color']
  }

  interface PaletteOptions {
    success: React.CSSProperties['color']
    warning: React.CSSProperties['color']
    yellow: React.CSSProperties['color']
  }
}

export default (options: PaletteOptions) =>
  createPalette({
    ...options,
  })
