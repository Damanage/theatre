import { createStyles, Theme } from '@material-ui/core'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

export default (theme: Theme & ThemeOptions) =>
  createStyles({
    content: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4, 2),
      },
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: theme.drawerWidth,
    },
  })
