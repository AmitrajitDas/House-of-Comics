import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    
    footerWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {
        marginTop: '30rem',
        height: '10rem',
        backgroundColor: '#393e46',
    },

    text: {
        marginTop: '4rem',
        color: 'white'
    }

}));