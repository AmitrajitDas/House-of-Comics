import React from 'react'

import { Link } from 'react-router-dom'

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'

import Rating from '../rating/Rating'
import { useStyles } from './styles'

const Product = ({ product }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <CardMedia
            className={classes.cardMedia}
            image={product.image}
            title={product.name}
            component='img'
          />
        </Link>
      </CardActionArea>
      <CardContent>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <Typography variant='h6' align='center' style={{ color: '#161616' }}>
            {product.name}
          </Typography>
        </Link>
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
  )
}

export default Product
