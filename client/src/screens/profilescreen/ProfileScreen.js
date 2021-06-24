import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Link, Checkbox, Grid, Typography, Container, Divider } from '@material-ui/core'
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded'

import Loader from '../../components/loader/Loader'
import AlertBox from '../../components/alert/Alert'
import { userDetailsAction } from '../../redux/actions/userDetailsAction'
import { useStyles } from './styles';

const ProfileScreen = ({ location, history }) => {
    
    const classes = useStyles()
    const dispatch = useDispatch()

    const [name, setName ] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

     const userDetails = useSelector(state => state.userDetails)

     const { loading, profileData, error } = userDetails

    const userLogin = useSelector(state => state.userLogin)

    const { userData } = userLogin

     useEffect(() => {
        
         if(!userData) {
             history.push('/login')
         } else {
             if(!profileData.name){
                 dispatch(userDetailsAction('profile'))
             } else {
                 setName(profileData.name)
                 setEmail(profileData.email)
             }
         }

     }, [ profileData, history, userData, dispatch ])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage("Password doesn't match")
        } else {
            
        }
        
    }

  return (
    <Grid container spacing={5}>
      <Grid item md={3}>
      <div className={classes.paper}>
        <Typography variant='h4'>
          Update Profile
        </Typography>
        { message && <AlertBox alert={message} /> }
        { error && <AlertBox alert={error} /> }
        { loading && <Loader /> }
        <form className={classes.form} noValidate onSubmit={submitHandler}>
         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            autoFocus
          />
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
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm password"
            label="Confirm Password"
            type="password"
            id="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
      </div>
      </Grid>
      <Divider orientation='vertical' variant='fullWidth' flexItem className={classes.divider} />
      <Grid item md={8} className={classes.wrapper}>
        <Typography variant='h4' className={classes.orderHeader}>
          Placed Orders
        </Typography>
      </Grid>
    </Grid>

  );
}

export default ProfileScreen