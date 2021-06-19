import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container, 
        Grid, 
        Typography, 
        Divider, 
        Button, 
        Card,
        InputLabel, 
        MenuItem, 
        FormHelperText, 
        FormControl, 
        Select } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'

import { addToCartAction, removeFromCartAction } from '../../redux/actions/cartAction'
import { useStyles } from './styles'
import AlertBox from '../../components/alert/Alert'

const CartScreen = ({ match, location, history }) => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const { cartItems } = useSelector(state => state.cart)

    useEffect(() => {
        if(productId){
            dispatch(addToCartAction(productId, qty))
        }
    },[dispatch, productId, qty])

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCartAction(productId))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Container className={classes.wrapper}>
            <Link to='/' style={{ textDecoration:'none'}}>
                <Button className={classes.button}>
                    <ArrowBackIcon />
                </Button>
            </Link>
            <div className={classes.header}>
                <Grid container spacing={3}>
                    <Grid item sm={8}>
                    { cartItems.length === 0 ? (
                        <AlertBox error='Cart is Empty'  />
                    )  
                    : 
                    (cartItems.map(item => (
                        <Grid container spacing={2} key={item.productId}>
                            <Grid item sm={3}>
                                <img className={classes.image} src={item.image} alt={item.name} />
                            </Grid>
                            <Grid item sm={3}>
                                <Typography variant='h6'>
                                    {item.name}
                                </Typography>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography variant='h6'>
                                    ${item.price}
                                </Typography>
                            </Grid>
                            <Grid item sm={2}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Qty</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={item.qty}
                                    onChange={(e) => dispatch(addToCartAction(item.productId, Number(e.target.value)))}
                                    label="QTY"
                                >
                                {[...Array(item.countInStock).keys()].map(count => (
                                    <MenuItem key={count+1} value={count+1}>
                                        {count+1}
                                    </MenuItem>
                                ))}
                                </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={2}>
                                <Button onClick={(e) => removeFromCartHandler(item.productId)}>
                                    <DeleteIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    )))}
                    </Grid>
                    <Grid item sm={4}>
                        <Card className={classes.card}>
                            <Grid item sm={12}>
                                <Typography variant='h5'>
                                    SUBTOTAL ({cartItems.reduce((acc, curr) => acc + curr.qty, 0)} items)
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant='h6'>
                                    ${cartItems.reduce((acc, curr) => acc + curr.qty * curr.price, 0).toFixed(2)}
                                </Typography>
                            </Grid>
                            <Divider />
                            <Grid item sm={12} className={classes.checkoutButtonWrapper}>
                                <Button 
                                    className={classes.checkoutButton} 
                                    disabled={cartItems.length === 0}
                                    onClick={checkoutHandler}
                                >
                                    <Typography variant='body1' align='center'>
                                       Proceed to Checkout
                                    </Typography>
                                </Button>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default CartScreen
