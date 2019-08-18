import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import styles from './styles'

const ModalFooter: React.FunctionComponent<any & WithStyles> = ({
  onClose,
  onSubmit,
  cancelTitle,
  submitTitle,
  submitDisabled,
  classes,
}) => (
  <Grid container item className={classes.actionsContainer} xs={12} justify="flex-end">
    <Grid>
      <Button color="primary" className={classes.btnCancel} onClick={onClose}>
        {cancelTitle}
      </Button>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className={classes.btnSubmit}
        onClick={onSubmit}
        disabled={submitDisabled}
      >
        {submitTitle}
      </Button>
    </Grid>
  </Grid>
)

ModalFooter.defaultProps = {
  submitTitle: 'Сохранить',
  cancelTitle: 'Отмена',
  submitDisabled: false,
}

export default withStyles(styles)(ModalFooter)
