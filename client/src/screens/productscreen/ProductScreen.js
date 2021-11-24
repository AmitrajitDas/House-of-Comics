import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import {
  Container,
  Button,
  Grid,
  Typography,
  Card,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  OutlinedInput,
} from '@material-ui/core'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import Rating from '../../components/rating/Rating'
import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'
import GreenAlertBox from '../../components/alert/GreenAlert'
import {
  productDetailsAction,
  productReviewCreateAction,
} from '../../redux/actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../../redux/constants/productConstants'
import { useStyles } from './styles'

const ProductScreen = ({ match, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const params = useParams()
  const productId = params.id
  console.log(productId)

  const ratingNums = [1, 2, 3, 4, 5]

  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(ratingNums[0])
  const [comment, setComment] = useState('')

  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  )
  const {
    success: successProductReview,
    error: errorProductReview,
    loading: loadingProductReview,
  } = useSelector((state) => state.productReviewCreate)

  const { userData } = useSelector((state) => state.userLogin)

  useEffect(() => {
    dispatch(productDetailsAction(match.params.id))
  }, [match, dispatch, successProductReview])

  const addToCartHandler = (e) => {
    if (userData) {
      history.push(`/cart/${match.params.id}?qty=${qty}`)
    } else {
      e.preventDefault()
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      productReviewCreateAction(productId, {
        rating,
        comment,
      })
    )
  }

  return (
    <Container className={classes.wrapper}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button className={classes.button}>
          <ArrowBackIcon />
        </Button>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <RedAlertBox alert='There was a problem getting product details' />
      ) : (
        <div className={classes.productWrapper}>
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <img
                className={classes.image}
                src={product.image}
                alt={product.name}
              />
            </Grid>
            <Grid item lg={5}>
              <Grid container className={classes.detailWrapper} spacing={3}>
                <Grid item sm={12}>
                  <Typography variant='h4' align='center'>
                    {product.name}
                  </Typography>
                </Grid>
                <Grid
                  item
                  sm={12}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </Grid>
                <Grid item sm={12}>
                  <Typography variant='h5' align='center'>
                    ${product.price}
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Typography variant='body1' align='center'>
                    {product.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={3}>
              <Card className={classes.card}>
                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <Grid container>
                      <Grid item xs={6} sm={6}>
                        <Typography variant='h6' align='center'>
                          Price:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography variant='h6' align='center'>
                          ${product.price}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Grid container>
                      <Grid item xs={6} sm={6}>
                        <Typography variant='h6' align='center'>
                          Status:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <Typography variant='h6' align='center'>
                          {product.countInStock > 0
                            ? 'In Stock'
                            : 'Out of Stock'}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                  </Grid>
                  {product.countInStock > 0 && (
                    <Grid item xs={12} sm={12}>
                      <Grid container>
                        <Grid item xs={6} sm={6}>
                          <Typography
                            variant='h6'
                            align='center'
                            style={{ marginTop: '3vh' }}
                          >
                            Qty
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <FormControl
                            variant='outlined'
                            className={classes.formControl}
                          >
                            <InputLabel id='demo-simple-select-outlined-label'>
                              Qty
                            </InputLabel>
                            <Select
                              labelId='demo-simple-select-outlined-label'
                              id='demo-simple-select-outlined'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                              label='QTY'
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (count) => (
                                  <MenuItem key={count + 1} value={count + 1}>
                                    {count + 1}
                                  </MenuItem>
                                )
                              )}
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Divider />
                    </Grid>
                  )}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    className={classes.addtocartButtonWrapper}
                  >
                    <Button
                      className={classes.addtocartButton}
                      variant='contained'
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                      color='primary'
                    >
                      <Typography variant='body1' align='center'>
                        Add to Cart
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <Grid container className={classes.reviewContainer}>
            <Grid item xs={6}>
              <Typography variant='h4' style={{ marginBottom: '2rem' }}>
                REVIEWS
              </Typography>
              {product.reviews && product.reviews.length === 0 && (
                <RedAlertBox alert='No reviews' />
              )}

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {product.reviews &&
                  product.reviews.map((review) => (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '1rem',
                      }}
                    >
                      <Typography variant='h6'>{review.name}</Typography>
                      <Rating value={review.rating} />
                      <Typography variant='h6' component='p'>
                        {review.createdAt.substring(0, 10)}
                      </Typography>
                      <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                        <Typography variant='h6' component='p'>
                          {review.comment}
                        </Typography>
                      </div>
                      <Divider />
                    </div>
                  ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant='h4'
                  style={{ marginTop: '1rem', marginBottom: '2rem' }}
                >
                  WRITE A CUSTOMER REVIEW
                </Typography>
                {successProductReview && (
                  <GreenAlertBox alert='Review submitted successfully' />
                )}
                {loadingProductReview && <Loader />}
                {errorProductReview && (
                  <RedAlertBox alert={errorProductReview} />
                )}
                {userData ? (
                  <form
                    className={classes.form}
                    noValidate
                    onSubmit={submitHandler}
                  >
                    <FormControl
                      variant='outlined'
                      className={classes.formControl}
                    >
                      <InputLabel id='demo-simple-select-outlined-label'>
                        Rating
                      </InputLabel>
                      <Select
                        labelId='demo-simple-select-outlined-label'
                        id='demo-simple-select-outlined'
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        label='Rating'
                        placeholder='Please select a rating'
                        variant='outlined'
                        className={classes.select}
                      >
                        {ratingNums.map((rating) => (
                          <MenuItem key={rating} value={rating}>
                            {rating}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <TextField
                      variant='outlined'
                      margin='normal'
                      required
                      fullWidth
                      multiline
                      id='comment'
                      placeholder='Leave a comment'
                      type='text'
                      name='comment'
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <Button
                      className={classes.reviewSubmitButton}
                      variant='contained'
                      color='primary'
                      type='submit'
                    >
                      <Typography variant='body1' align='center' type='submit'>
                        Submit
                      </Typography>
                    </Button>
                  </form>
                ) : (
                  <RedAlertBox alert='Please Login to write a review' />
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </Container>
  )
}

export default ProductScreen
