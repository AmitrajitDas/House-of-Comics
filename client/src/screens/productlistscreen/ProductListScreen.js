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
import {
  productListAction,
  productDetailsAction,
  productDeleteAction,
  productCreateAction,
} from '../../redux/actions/productActions'
import { PRODUCT_CREATE_RESET } from '../../redux/constants/productConstants'
import { useStyles } from './styles'

const ProductListScreen = ({ history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { loading, products, error } = useSelector((state) => state.productList)
  const { userData } = useSelector((state) => state.userLogin)
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = useSelector((state) => state.productDelete)

  const {
    loading: loadingCreate,
    success: successCreate,
    error: errorCreate,
    product: createdProduct,
  } = useSelector((state) => state.productCreate)

  useEffect(() => {
    if (!userData.isAdmin) {
      alert('Please login as an Admin to access this route')
      history.push('/')
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(productListAction())
    }
  }, [
    dispatch,
    history,
    userData,
    successDelete,
    successCreate,
    createdProduct,
  ])

  const editProductHandler = (id) => {
    history.push(`/admin/product/${id}/edit`)
  }

  const deleteProductHandler = (id) => {
    if (window.confirm('Are you sure ?')) {
      dispatch(productDeleteAction(id))
    }
  }

  const createProductHandler = () => {
    dispatch(productCreateAction())
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Typography variant='h4'>List of Products</Typography>
        <Button
          variant='contained'
          className={classes.btn}
          onClick={createProductHandler}
        >
          + &nbsp; Create Product
        </Button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        {loadingDelete && <Loader />}
        {errorDelete && <RedAlertBox alert={error} />}
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
                    <TableCell align='right'>NAME</TableCell>
                    <TableCell align='right'>PRICE</TableCell>
                    <TableCell align='right'>CATEGORY</TableCell>
                    <TableCell align='right'>PUBLISHER</TableCell>
                    <TableCell align='right'></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products &&
                    products.map((product) => (
                      <TableRow key={product._id}>
                        <TableCell component='th' scope='row'>
                          {product._id}
                        </TableCell>
                        <TableCell align='right'>{product.name}</TableCell>
                        <TableCell align='right'>${product.price}</TableCell>
                        <TableCell align='right'>{product.category}</TableCell>
                        <TableCell align='right'>{product.publisher}</TableCell>
                        <TableCell align='right'>
                          <IconButton color='primary' variant='contained'>
                            <CreateIcon
                              style={{ color: '#161616' }}
                              onClick={() => editProductHandler(product._id)}
                            />
                          </IconButton>
                          <IconButton
                            color='primary'
                            variant='contained'
                            onClick={() => deleteProductHandler(product._id)}
                          >
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

export default ProductListScreen
