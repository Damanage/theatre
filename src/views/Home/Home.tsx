import React, { PureComponent, ReactNode } from 'react'
import { withStyles, WithStyles } from '@material-ui/core'
import styles from './styles'

class HomeView extends PureComponent<any & WithStyles> {
  render(): ReactNode {

    return (
      <div>
        text
      </div>
    )
  }
}

export default withStyles(styles)(HomeView)
