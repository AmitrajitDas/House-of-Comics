import React,{ useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

import { Container, Button, Grid, Typography, Card, Divider } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import Rating from '../../components/rating/Rating'
import { useStyles } from './styles'

const ProductScreen = ({ match }) => {

    const classes = useStyles()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)

            setProduct(data) 
        }

        fetchProduct()

    }, [])

    return (
       <Container className={classes.wrapper}>
           <Link to='/' style={{ textDecoration:'none'}}>
            <Button className={classes.button}>
                <ArrowBackIcon />
            </Button>
           </Link>
           <div className={classes.productWrapper}>
           <Grid container spacing={2}>
               <Grid item lg={4}>
                   <img className={classes.image} src={product.image} alt={product.name} />
               </Grid>
               <Grid item lg={4}>
                <Grid container className={classes.detailWrapper} spacing={3}>
                    <Grid item sm={12}>
                    <Typography variant='h4' align='center'>
                        {product.name}
                    </Typography>
                   </Grid>
                   <Grid item sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Rating 
                    value={product.rating} 
                    text={`${product.numReviews} reviews`} 
                    />
                   </Grid>
                   <Grid item sm={12}>
                        <Typography variant='h5' align='center'>
                            ${product.price}
                        </Typography>
                   </Grid>
                   <Grid item sm={12}>
                        <Typography variant='body1' align='center'>
                            {product.description}
                        </Typography>
                   </Grid>
                </Grid>
               </Grid>
               <Grid item lg={4}>
                    <Card className={classes.card}>
                        <Grid container>
                            <Grid item sm={12}>
                                <Grid container>
                                    <Grid item sm={6}>
                                        <Typography variant='h6' align='center'>
                                            Price:
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <Typography variant='h6' align='center'>
                                            ${product.price}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider />
                            </Grid>
                            <Grid item sm={12}>
                                <Grid container>
                                    <Grid item sm={6}>
                                        <Typography variant='h6' align='center'>
                                            Status:
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <Typography variant='h6' align='center'>
                                            { product.countInStock >0 ? 'In Stock' : 'Out of Stock'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider />
                            </Grid>
                            <Grid item sm={12} className={classes.addtocartButtonWrapper}>
                                <Button className={classes.addtocartButton} disabled={product.countInStock ===0}>
                                    <Typography variant='body1' align='center'>
                                        Add to Cart
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
               </Grid>
           </Grid>
           </div>
       </Container>
    )
}

export default ProductScreen
