import React from 'react'

import { Typography, Grid } from '@material-ui/core'

import products from '../../products'
import Product from '../../components/product/Product'
import { useStyles } from './styles'

const HomeScreen = () => {

    const classes = useStyles()

    return (
        <div className={classes.homewrapper}>
            <Typography variant='h4'>
                Latest Releases
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default HomeScreen
