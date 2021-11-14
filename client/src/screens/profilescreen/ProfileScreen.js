import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  TextField,
  Grid,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'

import CancelIcon from '@material-ui/icons/Cancel'

import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'
import GreenAlertBox from '../../components/alert/GreenAlert'
import {
  userDetailsAction,
  updateProfileAction,
} from '../../redux/actions/userActions'
import { orderListAction } from '../../redux/actions/orderActions'
import { useStyles } from './styles'

const ProfileScreen = ({ location, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, profileData, error } = userDetails

  console.log(profileData)

  const userLogin = useSelector((state) => state.userLogin)
  const { userData } = userLogin

  const updateProfile = useSelector((state) => state.updateProfile)
  const { success } = updateProfile

  const {
    loading: loadingOrders,
    orders,
    error: errorOrders,
  } = useSelector((state) => state.orderList)

  useEffect(() => {
    if (!userData) {
      history.push('/login')
    } else {
      if (!profileData.name) {
        dispatch(userDetailsAction('profile'))
        dispatch(orderListAction())
      } else {
        setName(profileData.name)
        setEmail(profileData.email)
      }
    }
  }, [profileData, history, userData, dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("Password doesn't match")
    } else {
      dispatch(
        updateProfileAction({ id: profileData._id, name, email, password })
      )
    }
  }

  return (
    <Grid container spacing={5}>
      <Grid item md={3}>
        <div className={classes.paper}>
          <Typography variant='h4'>User Profile</Typography>
          {message && <RedAlertBox alert={message} />}
          {success && <GreenAlertBox alert={'User updated successfully'} />}
          {error && <RedAlertBox alert={error} />}
          {loading && <Loader />}
          <form className={classes.form} noValidate onSubmit={submitHandler}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='name'
              label='Name'
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
              label='Email Address'
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
              label='Password'
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='confirm password'
              label='Confirm Password'
              type='password'
              id='confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Update
            </Button>
          </form>
        </div>
      </Grid>
      <Divider
        orientation='vertical'
        variant='fullWidth'
        flexItem
        className={classes.divider}
      />
      <Grid item md={8} className={classes.wrapper}>
        <Typography variant='h4' className={classes.orderHeader}>
          Placed Orders
        </Typography>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <RedAlertBox alert="There's some problems while fetching orders" />
        ) : (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align='right'>DATE</TableCell>
                  <TableCell align='right'>TOTAL(g)</TableCell>
                  <TableCell align='right'>PAID</TableCell>
                  <TableCell align='right'>DELIVERED</TableCell>
                  <TableCell align='right'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell component='th' scope='row'>
                      {order._id}
                    </TableCell>
                    <TableCell align='right'>
                      {order.createdAt.substring(0, 10)}
                    </TableCell>
                    <TableCell align='right'>{order.totalPrice}</TableCell>
                    <TableCell align='right'>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <CancelIcon style={{ color: 'red' }} />
                      )}
                    </TableCell>
                    <TableCell align='right'>
                      {order.isDelivered ? (
                        order.DeliveredAt.substring(0, 10)
                      ) : (
                        <CancelIcon style={{ color: 'red' }} />
                      )}
                    </TableCell>
                    <TableCell align='right'>
                      <a
                        href={`/order/${order._id}`}
                        style={{ textDecoration: 'none', color: '#161616' }}
                      >
                        <Button color='primary' variant='contained'>
                          Details
                        </Button>
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Grid>
    </Grid>
  )
}

export default ProfileScreen
