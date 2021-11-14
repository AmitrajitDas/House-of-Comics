import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Grid, Typography, Divider, Card } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { PayPalButton } from 'react-paypal-button-v2'

import Loader from '../../components/loader/Loader'
import {
  orderDetailsAction,
  orderPaymentAction,
} from '../../redux/actions/orderActions'
import { ORDER_PAYMENT_RESET } from '../../redux/constants/orderConstants'
import { useStyles } from './styles'

const OrderScreen = ({ match }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [sdkReady, setSdkReady] = useState(false)

  const orderId = match.params.id

  const cart = useSelector((state) => state.cart)
  const { loading, order, error } = useSelector((state) => state.orderDetails)
  const { loading: paymentLoading, success: paymentSuccess } = useSelector(
    (state) => state.orderPayment
  )

  useEffect(() => {
    const paypalScript = async () => {
      const { data: clientId } = await axios.get(
        'http://localhost:5000/api/config/paypal'
      )
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
        Object.keys(window).forEach((key) => {
          if (/paypal|zoid|post_robot/.test(key)) {
            delete window[key]
          }
        })
      }

      document.body.appendChild(script)
    }

    paypalScript()

    if (!order || paymentSuccess) {
      dispatch({ type: ORDER_PAYMENT_RESET })
      dispatch(orderDetailsAction(orderId))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        paypalScript()
      } else {
        setSdkReady(true)
      }
    }

    // eslint-disable-next-line
  }, [dispatch, orderId, order, paymentSuccess, Object, window])

  const paymentSuccessHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(orderPaymentAction(orderId, paymentResult))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Alert severity='error'>{error}</Alert>
  ) : (
    <>
      <div className={classes.wrapper}>
        <Typography variant='h4' component='h1' style={{ fontWeight: '500' }}>
          ORDER : {orderId}
        </Typography>
        <Grid container spacing={3}>
          <Grid item sm={8} className={classes.leftContainer}>
            <Typography variant='h4' component='h1' className={classes.header}>
              SHIPPING
            </Typography>
            <Typography
              variant='h6'
              component='p'
              className={classes.paragraph}
            >
              Name : {order.user.name}
            </Typography>
            <Typography
              variant='h6'
              component='p'
              className={classes.paragraph}
            >
              Email :{' '}
              <a
                href={`mailto:${order.email}`}
                style={{ textDecoration: 'none', color: '#161616' }}
              >
                {order.user.email}
              </a>
            </Typography>
            <Typography
              variant='h6'
              component='p'
              className={classes.paragraph}
            >
              Address : {order.shippingAddress.address},{' '}
              {order.shippingAddress.city}, {order.shippingAddress.postalCode},{' '}
              {order.shippingAddress.country}
            </Typography>
            {order.isDelivered ? (
              <Alert severity='success'>Delivered on {order.deliveredAt}</Alert>
            ) : (
              <Alert severity='error'>Not delivered</Alert>
            )}
            <Divider />
            <Typography variant='h4' component='h1' className={classes.header}>
              Payment Method
            </Typography>
            <Typography
              variant='h6'
              component='p'
              className={classes.paragraph}
            >
              Method : {order.paymentMethod}
            </Typography>
            {order.isPaid ? (
              <Alert severity='success'>Paid on {order.paidAt}</Alert>
            ) : (
              <Alert severity='error'>Not paid</Alert>
            )}
            <Divider />
            <Typography variant='h4' component='h1' className={classes.header}>
              Placed Orders
            </Typography>
            {order.orderItems.length === 0 ? (
              <div className={classes.alert}>
                <Alert severity='error'>Cart is empty!</Alert>
              </div>
            ) : (
              order.orderItems.map((item, index) => (
                <Grid container key={index}>
                  <Grid item sm={4}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={classes.image}
                    />
                  </Grid>
                  <Grid item sm={4} className={classes.productNameWrapper}>
                    <Typography
                      variant='h6'
                      component='p'
                      className={classes.productName}
                    >
                      {item.name}
                    </Typography>
                  </Grid>
                  <Grid item sm={4} className={classes.productNameWrapper}>
                    <Typography
                      variant='h6'
                      component='p'
                      className={classes.productName}
                    >
                      ${item.price} x {item.qty} = ${item.price * item.qty}
                    </Typography>
                  </Grid>
                </Grid>
              ))
            )}
          </Grid>
          <Grid item sm={4} className={classes.cardWrapper}>
            <Card className={classes.card}>
              <Grid container>
                <Grid item sm={12}>
                  <Typography
                    variant='h4'
                    component='h1'
                    className={classes.cardHeader}
                  >
                    Order Summary
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item sm={12}>
                  <Grid container>
                    <Grid item sm={6} className={classes.cardLeft}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.paragraph}
                      >
                        {order.orderItems.length > 1
                          ? "Items' Price"
                          : "Item's Price"}
                        :
                      </Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.paragraph}
                      >
                        ${order.itemsPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Grid>
                <Grid item sm={12}>
                  <Grid container>
                    <Grid item sm={6} className={classes.cardLeft}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.paragraph}
                      >
                        Shipping Price:
                      </Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.paragraph}
                      >
                        ${order.shippingPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Grid>
                <Grid item sm={12}>
                  <Grid container>
                    <Grid item sm={6} className={classes.cardLeft}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.paragraph}
                      >
                        Tax:
                      </Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.paragraph}
                      >
                        ${order.taxPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Grid>
                <Grid item sm={12}>
                  <Grid container>
                    <Grid item sm={6} className={classes.cardLeft}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.paragraph}
                      >
                        Total:
                      </Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.paragraph}
                      >
                        ${order.totalPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Grid>
                {!order.isPaid && (
                  <Grid item sm={12} className={classes.orderButtonWrapper}>
                    {paymentLoading && <Loader />}
                    {!sdkReady ? (
                      <Loader />
                    ) : (
                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={paymentSuccessHandler}
                      />
                    )}
                  </Grid>
                )}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default OrderScreen
