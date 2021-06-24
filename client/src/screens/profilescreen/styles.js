import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 
    wrapper: {
        marginTop: '2rem',
        padding: '2rem',
    },
    
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));