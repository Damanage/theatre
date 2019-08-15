import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { LocationState } from 'history'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles, WithStyles, WithTheme } from '@material-ui/core/styles'
import styles from './styles'
import { IProps, IState } from './interfaces'
import { RouteInterface } from '../../interfaces'
import * as routes from "../../constants/routes";

const pages: RouteInterface[] = [
  routes.home,
  routes.tickets,
]

class Header extends Component<IProps & WithStyles & WithTheme & LocationState, IState> {
  static readonly defaultProps = {
    pages: [],
    visibleChangePassword: false,
    loadingChangePassword: false,
    title: '',
  }

  readonly state = {
    anchorEl: null,
  }

  render(): React.ReactNode {
    const {
      title,
      classes,
    } = this.props

    return (
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" color="inherit" className={classes.title}>
            {title}
          </Typography>
          <div className={classes.menu}>
            {pages.map((item: RouteInterface, idx: number) => (
              <NavLink
                key={idx}
                to={item.path}
                exact={item.exact}
                className={classes.link}
                activeClassName={classes.linkActive}
              >
                <Typography variant="button" color="inherit">
                  {item.title}
                </Typography>
              </NavLink>
            ))}
          </div>


        </Toolbar>

      </AppBar>
    )
  }
}

export interface IOuterProps {
  title: string
}

export default compose<IProps, IOuterProps>(
  withRouter,
  withStyles(styles, { withTheme: true })
)(Header)
