import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  wrapper: {
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
  button: {
    padding: '1vh 5vh',
    borderRadius: '2rem',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.alternate.main,
    textTransform: 'none',
    fontSize: '15px',
    marginTop: '2rem',
    '&:hover': {
      backgroundColor: theme.palette.alternate.secondary,
    },
  },
}))
