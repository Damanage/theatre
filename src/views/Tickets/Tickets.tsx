import React, { PureComponent, ReactNode } from 'react'
import { withStyles, WithStyles } from '@material-ui/core'
import styles from './styles'

class Tickets extends PureComponent<any & WithStyles> {
  render(): ReactNode {

    return (
      <div>
        tickets
      </div>
    )
  }
}

export default withStyles(styles)(Tickets)
