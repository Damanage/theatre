import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
    btnCancel: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        order: 2,
        marginRight: 0,
      },
    },
    btnSubmit: {
      [theme.breakpoints.down('sm')]: {
        order: 1,
        marginBottom: theme.spacing(1),
      },
    },
    actionsContainer: {
      paddingTop: theme.spacing(2),
    },
  })
