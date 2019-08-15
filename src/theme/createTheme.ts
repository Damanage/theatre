import React from 'react'
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    drawerWidth?: React.CSSProperties['width']
    sectionTitle?: React.CSSProperties
    sectionContent?: React.CSSProperties
  }

  interface Theme {
    drawerWidth?: React.CSSProperties['width']
    sectionTitle?: React.CSSProperties
    sectionContent?: React.CSSProperties
  }
}

export default (options: ThemeOptions & any) =>
  createMuiTheme({
    ...options,
  })
