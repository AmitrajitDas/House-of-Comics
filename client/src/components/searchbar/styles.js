import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  search: {
    marginTop: '0.5rem',
    position: 'relative',
    borderRadius: '2px',
    backgroundColor: ' #b0e4c2',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    '&:hover': { backgroundColor: '#bbe8ca' },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    marginLeft: '1rem !important',
    color: 'black !important',
    [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
