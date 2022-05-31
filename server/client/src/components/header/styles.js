import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.primary.main,
  },

  title: {
    fontWeight: '500',
  },
}))
