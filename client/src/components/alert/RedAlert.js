import Alert from '@material-ui/lab/Alert'

import { useStyles } from './styles'

const RedAlertBox = ({ alert }) => {
  const classes = useStyles()

  return (
    <div className={classes.alert}>
      <Alert severity='error'>{alert}</Alert>
    </div>
  )
}

export default RedAlertBox
