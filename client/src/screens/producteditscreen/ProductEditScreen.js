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

import UpdateIcon from '@mui/icons-material/Update'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'
import {
  productDetailsAction,
  productUpdateAction,
} from '../../redux/actions/productActions'
import { useStyles } from './styles'
import { PRODUCT_UPDATE_RESET } from '../../redux/constants/productConstants'

const ProductEditScreen = ({ location, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const params = useParams()

  const productId = params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [publisher, setPublisher] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')

  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  )

  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = useSelector((state) => state.productUpdate)

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(productDetailsAction(productId))
      } else {
        setName(product && product.name)
        setPrice(product && product.price)
        setImage(product && product.image)
        setPublisher(product && product.publisher)
        setCategory(product && product.category)
        setCountInStock(product && product.countInStock)
        setDescription(product && product.description)
      }
    }
  }, [product, dispatch, productId, history, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      productUpdateAction({
        _id: productId,
        name,
        price,
        image,
        publisher,
        category,
        countInStock,
        description,
      })
    )
    history.push('/admin/productlist')
  }

  const backButtonHandler = () => {
    history.push('/admin/productlist')
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
              Edit Product
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
                type='email'
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
                id='price'
                placeholder='Price'
                type='number'
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='image'
                placeholder='Image'
                type='text'
                name='image'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='publisher'
                placeholder='publisher'
                type='text'
                name='publisher'
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='category'
                placeholder='category'
                type='text'
                name='category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='countInStock'
                placeholder='countInStock'
                type='number'
                name='countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                multiline
                id='description'
                placeholder='description'
                type='text'
                name='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

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

export default ProductEditScreen
