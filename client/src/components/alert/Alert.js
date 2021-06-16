import Alert from '@material-ui/lab/Alert';

import { useStyles } from './styles'


const AlertBox = (props) => {

    const classes = useStyles()

    return (
        <div className={classes.alert}>
            <Alert severity='error'>{props.error}</Alert>
        </div>
    )
}

export default AlertBox
