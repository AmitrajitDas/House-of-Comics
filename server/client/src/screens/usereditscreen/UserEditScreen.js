import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  IconButton,
  InputAdornment,
} from '@material-ui/core'

import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import UpdateIcon from '@mui/icons-material/Update'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'
import {
  userDetailsAction,
  userUpdateAction,
} from '../../redux/actions/userActions'
import { useStyles } from './styles'

import { USER_UPDATE_RESET } from '../../redux/constants/authConstants'

const UserEditScreen = ({ location, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const params = useParams()

  const userId = params.id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const { loading, profileData, error } = useSelector(
    (state) => state.userDetails
  )

  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = useSelector((state) => state.userUpdate)

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      history.push('/admin/userlist')
    } else {
      if (!profileData.name || profileData._id !== userId) {
        dispatch(userDetailsAction(userId))
      } else {
        setName(profileData && profileData.name)
        setEmail(profileData && profileData.email)
        setIsAdmin(profileData && profileData.isAdmin)
      }
    }
  }, [profileData, dispatch, userId, successUpdate, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userUpdateAction({ _id: userId, name, email, isAdmin }))
  }

  const backButtonHandler = () => {
    history.push('/admin/usertlist')
  }

  return (
    <>
      <Button className={classes.button} onClick={backButtonHandler}>
        <ArrowBackIcon />
      </Button>
      {loading ? (
        <Loader />
      ) : error ? (
        <RedAlertBox alert={error} />
      ) : (
        <Container component='main' maxWidth='xs' className={classes.wrapper}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <UpdateIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Edit User
            </Typography>
            {errorUpdate && <RedAlertBox alert={errorUpdate} />}
            {loadingUpdate && <Loader />}
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
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isAdmin}
                      onChange={(e) => setIsAdmin(e.target.checked)}
                      style={{ color: '#8fd9a8' }}
                    />
                  }
                  label='Make Admin'
                />
              </FormGroup>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={submitHandler}
              >
                Update
              </Button>
            </form>
          </div>
        </Container>
      )}
    </>
  )
}

export default UserEditScreen
