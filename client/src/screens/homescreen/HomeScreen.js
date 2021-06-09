import React, { useState, useEffect } from 'react'

import { Typography, Grid } from '@material-ui/core'
import axios from 'axios'

import Product from '../../components/product/Product'
import { useStyles } from './styles'

const HomeScreen = () => {

    const classes = useStyles()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }

        fetchProducts()
        
    }, [])


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
