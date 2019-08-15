import { createStyles, Theme } from '@material-ui/core'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

export default (theme: Theme & ThemeOptions) => {
  const primaryOrPrimaryText = theme.palette.type === 'dark' ? theme.palette.text.primary : theme.palette.primary.main
  const primaryOrSecondary = theme.palette.type === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary

  return createStyles({
    appBar: {
      backgroundColor: theme.palette.background.paper,
      color: primaryOrPrimaryText,
      overflow: 'hidden',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${theme.drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: theme.drawerWidth,
    },
    title: {
      paddingRight: theme.spacing(2),
      marginRight: theme.spacing(2),
      borderRight: `1px solid ${primaryOrPrimaryText}`,
    },
    login: {
      marginLeft: theme.spacing(1),
      color: primaryOrSecondary,
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    menu: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.type === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary,
      margin: `0 ${theme.spacing(1)}px`,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['color'], {
        duration: theme.transitions.duration.short,
      }),
      '&:hover': {
        color: theme.palette.primary.main,
      },
      '&:first-child': {
        marginLeft: 0,
      },
    },
    linkActive: {
      color: theme.palette.primary.main,
    },
    avatar: {
      marginLeft: theme.spacing(1),
    },
  })
}
