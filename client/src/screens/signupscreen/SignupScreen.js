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
  IconButton,
  InputAdornment,
} from '@material-ui/core'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'
import GreenAlertBox from '../../components/alert/GreenAlert'
import { userRegisterAction } from '../../redux/actions/userActions'
import { useStyles } from './styles'

const SignupScreen = ({ location, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [message, setMessage] = useState('')

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, userData, success, error } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userData) {
      history.push('/login')
    }
  }, [userData, history])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("Password doesn't match")
    } else {
      dispatch(userRegisterAction(name, email, password))
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign Up
        </Typography>
        {success && <GreenAlertBox alert={'User created successfully'} />}
        {message && <RedAlertBox alert={message} />}
        {error && <RedAlertBox alert={error} />}
        {loading && <Loader />}
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete='name'
            autoFocus
          />
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
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='confirm password'
            placeholder='Confirm Password'
            type={showPassword ? 'text' : 'password'}
            id='confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href={redirect ? `/login?redirect=${redirect}` : '/login'}
                variant='body2'
              >
                {'Already have an account? Sign In'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default SignupScreen
