import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Button,  
        Grid, 
        Typography,
        Divider,
        Card 
        } from '@material-ui/core'

import CheckOutSteps from '../../components/checkout/CheckOutSteps'
import { useStyles } from './styles';

const PlaceOrderScreen = () => {
        
    const classes = useStyles()

    const cart = useSelector(state => state.cart)

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
                        {' '}{cart.shippingAddress.postal},{' '}{cart.shippingAddress.country} 
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
                    {cart.cartItems.map((item, index) => (
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
                        <div className={classes.divider}>
                            <Divider />
                        </div>
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
                                                Items
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                $
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </Grid>
                                <Grid item sm={12}>
                                    <Grid container>
                                        <Grid item sm={6} className={classes.cardLeft}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                Shipping
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                $
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </Grid>
                                <Grid item sm={12}>
                                    <Grid container>
                                        <Grid item sm={6} className={classes.cardLeft}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                Tax
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                $
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </Grid>
                                <Grid item sm={12}>
                                    <Grid container>
                                        <Grid item sm={6} className={classes.cardLeft}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                Total
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={3}>
                                            <Typography variant='h6' component='p' className={classes.paragraph}>
                                                $
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