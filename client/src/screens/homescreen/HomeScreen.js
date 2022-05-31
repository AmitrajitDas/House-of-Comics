import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Grid } from '@material-ui/core'
import Paginate from '../../components/paginate/Paginate'
import Product from '../../components/product/Product'
import { productListAction } from '../../redux/actions/productActions'
import Loader from '../../components/loader/Loader'
import RedAlertBox from '../../components/alert/RedAlert'

import { useStyles } from './styles'

const HomeScreen = ({ location, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const query = new URLSearchParams(location.search)
  const keyword = query.get('name') || ''
  const pageNumber = query.get('page') || ''

  const { loading, products, error, page, pages } = useSelector(
    (state) => state.productList
  )

  console.log(page)

  useEffect(() => {
    dispatch(productListAction(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

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

          <Grid item xs={12} style={{ marginTop: '3rem' }}>
            <Paginate pages={pages} history={history} page={page} />
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default HomeScreen
