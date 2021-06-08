import React from 'react'

import { Link } from 'react-router-dom'

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'

import Rating from '../rating/Rating'
import { useStyles } from './styles'

const Product = ({ product }) => {

    const classes= useStyles();

    return (
        <Link to={`/product/${product._id}`} style={{ textDecoration:'none'}}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia 
                className={classes.cardMedia} 
                image={product.image} 
                title={product.name} 
                component='img' 
                />
            </CardActionArea>
                <CardContent>
                    <Typography variant='h6' align='center'>
                        {product.name}
                    </Typography>
                    <Typography variant='body1' align='center'>
                    <Rating 
                    value={product.rating} 
                    text={`${product.numReviews} reviews`} 
                    />
                     </Typography>
                    <Typography variant='h4' align='center'>
                        ${product.price}
                    </Typography>
                </CardContent>
        </Card>
        </Link>
    )
}

export default Product
