import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    
    wrapper: {
        marginTop: '2rem',
        padding: '2rem',
    },

    button: {
        padding: '1vh 5vh',
        borderRadius: '2rem',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.alternate.main,
        textTransform: 'none',
        fontSize: '15px',
        '&:hover': {
            backgroundColor: theme.palette.alternate.secondary,
        },
    },

    header: {
        marginTop: '2rem'
    },

    image: {

        width: '8rem',
        height: '10rem',
    },

    card: {
        borderRadius: '1px',
        padding: '3vh',
        // boxShadow: 'none',
    },

    checkoutButtonWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2vh',
    },

    checkoutButton: {
        padding: '1vh 8vh',
        color: theme.palette.alternate.main,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.secondary,
        },
    },

    deleteButton: {
        color: theme.palette.alternate.main,
    }

}));