import Alert from '@material-ui/lab/Alert';

import { useStyles } from './styles'


const GreenAlertBox = ({ alert }) => {

    const classes = useStyles()

    return (
        <div className={classes.alert}>
            <Alert severity='success'>{alert}</Alert>
        </div>
    )
}

export default GreenAlertBox
