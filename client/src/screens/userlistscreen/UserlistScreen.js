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
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'
import CreateIcon from '@mui/icons-material/Create'
import CancelIcon from '@mui/icons-material/Cancel'
import DeleteIcon from '@mui/icons-material/Delete'
import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'
import { userListAction } from '../../redux/actions/userListAction'
import { useStyles } from './styles'

const UserlistScreen = ({ history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { loading, users, error } = useSelector((state) => state.userList)
  const { userData } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (userData && userData.isAdmin) {
      dispatch(userListAction())
    } else {
      alert('Please login as an Admin to access this route')
      history.push('/')
    }
  }, [dispatch, history])

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
                    <TableCell align='right'>ID</TableCell>
                    <TableCell align='right'>NAME</TableCell>
                    <TableCell align='right'>EMAIL</TableCell>
                    <TableCell align='right'>ADMIN</TableCell>
                    <TableCell align='right'></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users &&
                    users.map((user) => (
                      <TableRow key={user._id}>
                        <TableCell component='th' scope='row'>
                          {user._id}
                        </TableCell>
                        <TableCell align='right'>{user.name}</TableCell>
                        <TableCell align='right'>
                          <a
                            href={`mailto:${user.email}`}
                            style={{ textDecoration: 'none', color: '#161616' }}
                          >
                            {user.email}
                          </a>
                        </TableCell>
                        <TableCell align='right'>
                          {user.isAdmin ? (
                            <CheckIcon style={{ color: 'green' }} />
                          ) : (
                            <CancelIcon style={{ color: 'red' }} />
                          )}
                        </TableCell>
                        <TableCell align='right'>
                          <IconButton color='primary' variant='contained'>
                            <CreateIcon style={{ color: '#161616' }} />
                          </IconButton>
                          <IconButton color='primary' variant='contained'>
                            <DeleteIcon style={{ color: 'red' }} />
                          </IconButton>
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

export default UserlistScreen
