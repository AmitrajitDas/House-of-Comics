import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Link, Checkbox, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import Loader from '../../components/loader/Loader'
import AlertBox from '../../components/alert/Alert'
import { userLoginAction } from '../../redux/actions/authAction'
import { useStyles } from './styles';

const LoginScreen = ({ location, history }) => {
    
    const classes = useStyles()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loading, userData, error } = useSelector(state => state.userLogin)

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        
        if(userData) {
            history.push(redirect)
        }

    }, [userData, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(userLoginAction(email, password))
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        { error && <AlertBox alert='Invalid email or password' /> }
        { loading && <Loader /> }
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href={ redirect ? `/register?redirect=${redirect}` : '/redirect'} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default LoginScreen