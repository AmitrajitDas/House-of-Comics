import React from 'react'

import { Link } from 'react-router-dom';

import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'

import { useStyles } from './styles';

const Product = ({ product }) => {

    const classes= useStyles();

    return (
        <Card classname={classes.root}>
            <Link to={`/product/${product._id}`} style={{ textDecoration:'none'}}>
            <CardActionArea>
                <CardMedia className={classes.cardMedia} image={product.image} title={product.name} component='img' />
            </CardActionArea>
            </Link>
        </Card>
    )
}

export default Product
