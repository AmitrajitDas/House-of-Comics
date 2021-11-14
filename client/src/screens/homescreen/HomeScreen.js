import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Grid } from '@material-ui/core'

import Product from '../../components/product/Product'
import { productListAction } from '../../redux/actions/productActions'
import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'

import { useStyles } from './styles'

const HomeScreen = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { loading, products, error } = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(productListAction())
  }, [dispatch])

  return (
    <div className={classes.homewrapper}>
      <Typography variant='h4'>Latest Releases</Typography>
      {loading ? (
        <Loader />
      ) : error ? (
        <RedAlertBox alert='Products not found' />
      ) : (
        <Grid container spacing={3}>
          {products &&
            products.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
              </Grid>
            ))}
        </Grid>
      )}
    </div>
  )
}

export default HomeScreen
