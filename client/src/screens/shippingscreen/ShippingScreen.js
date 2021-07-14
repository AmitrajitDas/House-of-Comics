import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Link,
  Checkbox,
  Grid,
  Typography,
  Container,
  InputAdornment,
  IconButton,
} from '@material-ui/core'

import LocalShippingIcon from '@material-ui/icons/LocalShipping'

import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'

import CheckOutSteps from '../../components/checkout/CheckOutSteps'
import { saveShippingAddressAction } from '../../redux/actions/cartAction'
import { useStyles } from './styles'

const ShippingScreen = ({ location, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { shippingAddress } = useSelector((state) => state.cart)

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddressAction({ address, city, postalCode, country }))
    history.push('/payment')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div Paper className={classes.paper}>
        <CheckOutSteps step1 step2 />
        <Avatar className={classes.avatar}>
          <LocalShippingIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Shipping
        </Typography>
        {/* { error && <RedAlertBox alert='Invalid email or password' /> }
        { loading && <Loader /> } */}
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='address'
            placeholder='Address'
            name='placeholder'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='city'
            placeholder='City'
            type='text'
            id='password'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='postal'
            placeholder='Postal'
            type='text'
            id='postal'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='country'
            placeholder='Country'
            type='text'
            id='country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
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

export default ShippingScreen
