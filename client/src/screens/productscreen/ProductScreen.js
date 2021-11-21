import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
} from '@material-ui/core'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import Rating from '../../components/rating/Rating'
import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'
import {
  productDetailsAction,
  productReviewCreateAction,
} from '../../redux/actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../../redux/constants/productConstants'
import { useStyles } from './styles'

const ProductScreen = ({ match, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  )
  const { success: successProductReview, error: errorProductReview } =
    useSelector((state) => state.productReviewCreate)

  const { userData } = useSelector((state) => state.userLogin)

  useEffect(() => {
    dispatch(productDetailsAction(match.params.id))
  }, [match, dispatch])

  const addToCartHandler = (e) => {
    if (userData) {
      history.push(`/cart/${match.params.id}?qty=${qty}`)
    } else {
      e.preventDefault()
    }
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
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
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
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </Container>
  )
}

export default ProductScreen
