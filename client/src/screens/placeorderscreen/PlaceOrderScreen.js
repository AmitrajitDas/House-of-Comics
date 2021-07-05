import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Button,  
        Grid, 
        Typography,
        Divider,
        Card 
        } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';

import CheckOutSteps from '../../components/checkout/CheckOutSteps'
import { useStyles } from './styles';

const PlaceOrderScreen = () => {
        
    const classes = useStyles()

    const cart = useSelector(state => state.cart)

    const addDecimal = (num) => {
        return (Math.round(num * 100)/100).toFixed(2)
    }

    cart.itemsPrice = addDecimal(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))
    cart.shippingPrice = addDecimal(cart.itemsPrice > 30 ? 0 : 10)
    cart.taxPrice = addDecimal(Number((0.15 * cart.itemsPrice).toFixed(2)))

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    const placeOrderHandler = () => {
        console.log('Place Order')
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.breadcrumbs}>
                <CheckOutSteps step1 step2 step3 step4 />
            </div>
            <Grid container spacing={3}>
                <Grid item sm={8} className={classes.leftContainer}>
                    <Typography variant='h4' component='h1' className={classes.header}>
                        SHIPPING
                    </Typography>
                    <Typography variant='h6' component='p' className={classes.paragraph}>
                        Address : {cart.shippingAddress.address},{' '}{cart.shippingAddress.city},
                        {' '}{cart.shippingAddress.postalCode},{' '}{cart.shippingAddress.country} 
                    </Typography>
                    <Divider />
                    <Typography variant='h4' component='h1' className={classes.header}>
                        Payment Method
                    </Typography>
                    <Typography variant='h6' component='p' className={classes.paragraph}>
                        Method : {cart.paymentMethod}
                    </Typography>
                    <Divider />
                    <Typography variant='h4' component='h1' className={classes.header}>
                        Placed Orders
                    </Typography>
                    {cart.cartItems.length === 0 ? <div className={classes.alert}><Alert severity="error">Cart is empty!</Alert></div> :
                    cart.cartItems.map((item, index) => (
                        <Grid container key={index}>
                            <Grid item sm={4}>
                                <img src={item.image} alt={item.name} className={classes.image} />
                            </Grid>
                            <Grid item sm={4} className={classes.productNameWrapper}>
                                <Link to={`/product/${item.productId}`} style={{ textDecoration:'none', color:'#161616' }}>
                                    <Typography variant='h6' component='p' className={classes.productName}>
                                        {item.name}
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item sm={4} className={classes.productNameWrapper}>
                                <Typography variant='h6' component='p' className={classes.productName}>
                                    ${item.price} x {item.qty} = ${item.price*item.qty}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                        
                </Grid>
                <Grid item sm={4} className={classes.cardWrapper}>
                        <Card className={classes.card}>
                            <Grid  container>
                                <Grid item sm={12}>
                                    <Typography variant='h4' component='h1' className={classes.cardHeader}>
                                        Order Summary
                                    </Typography>
                                <Divider />
                                </Grid>
                                <Grid item sm={12}>
                                    <Grid container>
                                        <Grid item sm={6} className={classes.cardLeft}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                {cart.cartItems.length > 0 ? "Items' Price" : "Item's Price" }:
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                ${cart.itemsPrice}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </Grid>
                                <Grid item sm={12}>
                                    <Grid container>
                                        <Grid item sm={6} className={classes.cardLeft}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                Shipping Price:
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                ${cart.shippingPrice}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </Grid>
                                <Grid item sm={12}>
                                    <Grid container>
                                        <Grid item sm={6} className={classes.cardLeft}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                Tax:
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                ${cart.taxPrice}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </Grid>
                                <Grid item sm={12}>
                                    <Grid container>
                                        <Grid item sm={6} className={classes.cardLeft}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                Total:
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                ${cart.totalPrice}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </Grid>
                                <Grid item sm={12} className={classes.orderButtonWrapper}>
                                    <Button
                                        className={classes.orderButton}
                                        disabled={cart.cartItems.length === 0}
                                    >
                                        Place Order
                                    </Button>
                                </Grid>
                            </Grid>    
                        </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default PlaceOrderScreen