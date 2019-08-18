import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
      header: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
      },
      content: {
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(2),
      },
      title: {
          paddingRight: theme.spacing(4),
          color: theme.palette.type === 'dark' ? theme.palette.text.primary : theme.palette.primary.main,
      },
      actionsContainer: {
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
      },
      btnSubmit: {
          margin: theme.spacing(1),
          [theme.breakpoints.down('sm')]: {
              order: 1,
              marginBottom: theme.spacing(1),
          },
      },
      button: {
          marginRight: theme.spacing(1),
      },
      btnContainer: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
      }
  })
