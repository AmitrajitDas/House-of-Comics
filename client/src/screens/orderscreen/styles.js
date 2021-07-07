import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    
    wrapper: {
        padding: '3rem',
    },

    breadcrumbs: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    leftContainer: {
        marginTop: '2rem',
    },

    header: {
        fontWeight: '500',
        marginTop: '2rem',
        marginBottom: '1rem',
    },

    paragraph: {
        fontWeight: '200'
    },

    image: {
        width: '8rem',
        height: '10rem',
        marginTop: '1vh',
    },

    productNameWrapper: {
         display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    productName: {
        fontWeight: '500'
    },

    divider: {
        marginTop: '2rem'
    },

    cardWrapper: {
        marginTop: '4rem',
    },

    card: {

    },

    cardHeader: {
        fontWeight: '500',
        margin: '2vh auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardLeft: {
        marginLeft: '1rem'
    },

    orderButtonWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2vh'
    },

    orderButton: {
        padding: '1vh 8vh',
        color: theme.palette.alternate.main,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.secondary,
        },
    },

    alert: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    }

}));