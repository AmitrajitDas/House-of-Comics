import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Link,
  Checkbox,
  Grid,
  Typography,
  Container,
  InputAdornment,
  IconButton,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'
import { userLoginAction } from '../../redux/actions/userActions'
import { useStyles } from './styles'

const LoginScreen = ({ location, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)

  const { loading, userData, error } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userData) {
      history.push(redirect)
    }
  }, [userData, history, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userLoginAction(email, password))
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.wrapper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        {error && <RedAlertBox alert='Invalid email or password' />}
        {loading && <Loader />}
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            placeholder='Password'
            type={showPassword ? 'text' : 'password'}
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='current-password'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href={redirect ? `/signup?redirect=${redirect}` : '/signup'}
                variant='body2'
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default LoginScreen
