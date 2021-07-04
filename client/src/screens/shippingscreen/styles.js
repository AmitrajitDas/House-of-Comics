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
        padding: '0.6rem 2rem 0.6rem 2rem',
        margin: '0.5rem 0 1rem 0',
        borderRadius: '20px',
        fontSize: '1rem',
    },

}));