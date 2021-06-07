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
                    <Grid key={product._id} item sm={12} md={6} lg={4}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default HomeScreen
