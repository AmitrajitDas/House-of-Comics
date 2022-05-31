import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Link,
  Checkbox,
  Grid,
  Typography,
  Container,
  InputAdornment,
  IconButton,
} from '@material-ui/core'

import PaymentIcon from '@material-ui/icons/Payment'

import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'

import CheckOutSteps from '../../components/checkout/CheckOutSteps'
import { savePaymentMethodAction } from '../../redux/actions/cartActions'
import { useStyles } from './styles'

const PaymentScreen = ({ location, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { shippingAddress } = useSelector((state) => state.cart)

  if (!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('Paypal')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethodAction(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.wrapper}>
        <CheckOutSteps step1 step2 step3 />
        <Avatar className={classes.avatar}>
          <PaymentIcon />
        </Avatar>
        <Typography component='h1' variant='h5' className={classes.header}>
          Payment
        </Typography>
        {/* { error && <RedAlertBox alert='Invalid email or password' /> }
        { loading && <Loader /> } */}
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Select Payment Method</FormLabel>
            <RadioGroup
              aria-label='payment method'
              name='paymentmethod'
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value='Paypal'
                classes={{
                  root: classes.formControlLabelRoot,
                  label: classes.formControlLabel,
                }}
                control={
                  <Radio
                    disableRipple
                    classes={{ root: classes.radio, checked: classes.checked }}
                  />
                }
                label='Paypal or Credit Card'
              />
              {/* <FormControlLabel 
                    value="Stripe"
                    classes={{root: classes.formControlLabelRoot, label: classes.formControlLabel}} 
                    control={<Radio 
                    disableRipple
                    classes={{root: classes.radio, checked: classes.checked}}
                    />} 
                    label="Stripe" 
                    /> */}
            </RadioGroup>
          </FormControl>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Continue
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default PaymentScreen
