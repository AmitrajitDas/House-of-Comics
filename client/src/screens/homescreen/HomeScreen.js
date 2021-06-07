import React from 'react'

import { Typography, Grid } from '@material-ui/core'

import products from '../../products'
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
                    <Grid item lg={4}>
                        <Typography variant='h6' align='center'>
                            {product.name}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default HomeScreen
