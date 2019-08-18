import { createStyles, Theme } from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors';

export default (theme: Theme) =>
  createStyles({
      card: {
          width: '30%',
          height: 'fit-content',
          margin: theme.spacing(1),
      },
      media: {
          height: 0,
          paddingTop: '56.25%',
      },
      expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
          }),
      },
      expandOpen: {
          transform: 'rotate(180deg)',
      },
      avatar: {
          backgroundColor: deepPurple[500],
      },
      chip: {
          margin: theme.spacing(0.2),
      },
      link: {
          margin: theme.spacing(0.5),
      },
      linkWrapper: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
      }
  })
