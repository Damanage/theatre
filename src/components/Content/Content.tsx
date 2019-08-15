import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { IProps } from './interfaces'

const Content: React.FunctionComponent<IProps> = ({ children, classes, open, className }) => (
  <main
    className={classNames(
      classes.content,
      {
        [classes.contentShift]: open,
      },
      className
    )}
  >
    {React.Children.toArray(children)}
  </main>
)

Content.defaultProps = {
  open: false,
}

export default withStyles(styles)(Content)
