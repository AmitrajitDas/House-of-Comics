import { makeStyles } from '@material-ui/core/styles'

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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },

  orderHeader: {
    marginTop: '2rem',
  },

  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

  table: {
    minWidth: 650,
  },
  btn: {
    backgroundColor: theme.palette.alternate.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.alternate.main,
      color: 'white',
    },
  },
}))
