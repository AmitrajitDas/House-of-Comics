import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'
import CreateIcon from '@mui/icons-material/Create'
import CancelIcon from '@mui/icons-material/Cancel'
import DeleteIcon from '@mui/icons-material/Delete'
import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'
import { userDetailsAction } from '../../redux/actions/userActions'
import { orderListAction } from '../../redux/actions/orderActions'
import { useStyles } from './styles'

const OrderListScreen = ({ history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { loading, orders, error } = useSelector((state) => state.orderList)
  const { userData } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (userData && userData.isAdmin) {
      dispatch(orderListAction())
    } else {
      alert('Please login as an Admin to access this route')
      history.push('/')
    }
  }, [dispatch, history, userData])

  const editUserHandler = (id) => {
    history.push(`/admin/user/${id}/edit`)
  }

  return (
    <div className={classes.wrapper}>
      <Typography variant='h4'>List of Users</Typography>
      <div style={{ marginTop: '1rem' }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <RedAlertBox alert={error} />
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align='right'>USER</TableCell>
                    <TableCell align='right'>DATE</TableCell>
                    <TableCell align='right'>TOTAL</TableCell>
                    <TableCell align='right'>PAID</TableCell>
                    <TableCell align='right'>DELIVERED</TableCell>
                    <TableCell align='right'></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders &&
                    orders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell component='th' scope='row'>
                          {order._id}
                        </TableCell>
                        <TableCell align='right'>
                          {order.user && order.user.name}
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
                            order.deliveredAt.substring(0, 10)
                          ) : (
                            <CancelIcon style={{ color: 'red' }} />
                          )}
                        </TableCell>
                        <TableCell align='right'>
                          <a
                            href={`/order/${order._id}`}
                            style={{ textDecoration: 'none', color: '#161616' }}
                          >
                            <Button variant='contained' color='primary'>
                              Details
                            </Button>
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderListScreen
