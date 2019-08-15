import { WithStyles } from '@material-ui/core'
import styles from './styles'

export interface IProps extends WithStyles<typeof styles> {
  open?: boolean
  className?: string
}
