import React from 'react'
import { withStyles } from '@material-ui/core'
import Header from '../../components/Header'
import Content from '../../components/Content'
import styles from './styles'

const BaseLayout = (Component: any, props: object) => {
  class ComponentWithLayout extends React.Component<any, {}> {
    render(): React.ReactNode {
      const { classes } = this.props
      return (
        <div className={classes.root}>
          <Header title="Театръ" />
          <Content>
            <Component {...props} />
          </Content>
        </div>
      )
    }
  }

  return withStyles(styles)(ComponentWithLayout)
}

export default BaseLayout
