import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
 
    wrapper: {
        marginTop: '2rem',
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

    image: {
        width: '20rem',
        height: '30rem',
        marginTop: '2rem',
    },

    productWrapper: {
        marginTop: '2rem',
    },

    detailWrapper: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        marginTop: '3rem',
        borderRadius: '1px',
        // boxShadow: 'none',
    },

    addtocartButtonWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2vh',
    },

    addtocartButton: {
        padding: '1vh 10vh',
        color: theme.palette.alternate.main,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.secondary,
        },
    },

}));