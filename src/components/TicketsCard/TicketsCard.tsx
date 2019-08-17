import React, { PureComponent, ReactNode } from 'react'
import { withStyles, WithStyles, Card, CardHeader, Avatar } from '@material-ui/core'
import styles from './styles'
import {IProps} from './interfaces'
import {get} from 'lodash'

class TicketsCard extends PureComponent<IProps & WithStyles> {
  render(): ReactNode {
    const {classes, performanceData} = this.props

    return (
      <Card>
        <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                ТЪ
              </Avatar>
            }
            title={get(performanceData, 'attributes.title', '-')}
            subheader="September 14, 2016"
        />
      </Card>
    )
  }
}

export default withStyles(styles)(TicketsCard)
