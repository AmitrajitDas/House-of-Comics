import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '4rem',
    padding: '3rem',
    marginBottom: '5rem',
  },

  avatar: {
    backgroundColor: theme.palette.primary.main,
    margin: '1rem auto',
  },

  header: {
    margin: '1rem auto',
  },

  form: {
    margin: '1rem auto',
  },

  radio: {
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },

  checked: {},

  submit: {
    margin: '1rem auto',
  },
}))
