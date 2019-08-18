import { createStyles, Theme } from '@material-ui/core'

export default (theme: Theme) =>
  createStyles({
      cardRoot: {
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
      }
  })
