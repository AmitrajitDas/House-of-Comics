import Alert from '@material-ui/lab/Alert';

import { useStyles } from './styles'


const AlertBox = () => {

    const classes = useStyles()

    return (
        <div className={classes.alert}>
            <Alert severity='error'>Products did not load</Alert>
        </div>
    )
}

export default AlertBox
