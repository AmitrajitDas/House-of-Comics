import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    loader: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

}));