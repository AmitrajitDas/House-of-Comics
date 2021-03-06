import { makeStyles } from '@material-ui/core/styles'

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
    padding: '1vh 5vh',
    color: theme.palette.alternate.main,
    backgroundColor: theme.palette.primary.main,
  },

  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  reviewContainer: {
    marginTop: '2rem',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  select: {
    width: '20rem',
    marginBottom: '2rem',
  },
  reviewSubmitButton: {
    padding: '1vh 5vh',
    color: theme.palette.alternate.main,
    backgroundColor: theme.palette.primary.main,
    marginTop: '2rem',
  },
}))
