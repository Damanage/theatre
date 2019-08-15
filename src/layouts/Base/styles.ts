import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  })
