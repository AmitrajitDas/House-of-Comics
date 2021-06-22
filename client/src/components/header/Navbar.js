import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

//mui components
import {AppBar, 
        Toolbar, 
        Button, 
        Typography, 
        IconButton, 
        Grid
      } from '@material-ui/core'

//mui icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import UserInfo from './UserInfo';
import { useStyles } from './styles'

const Navbar = () => {
    
    const classes = useStyles()
    const dispatch = useDispatch()

    const { userData } = useSelector(state => state.userLogin)

    return (
        <div>
        <AppBar position='static' color='primary'>    
        <Toolbar>
        <Grid container spacing={3}>
          <Grid item sm={4} md={6} lg={9}>
          <Link to='/' style={{ textDecoration:'none'}}>     
            <Typography variant="h4" className={classes.title} style={{ color: '#161616'}}>
              House of Comics
            </Typography>
          </Link>
        </Grid>
        <Grid item sm={4} md={3} lg={1}> 
          <Link to='/cart/id?' style={{ textDecoration:'none'}}>
            <IconButton style={{ color: '#161616'}}>
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid item sm={4} md={3} lg={2}>
          { userData 
          ? (
            <UserInfo userData={userData} />
          ) 
          : 
          <Link to='/login' style={{ textDecoration:'none'}}>
            <Button style={{ color: '#161616', marginTop: '5px'}}>Login</Button>
          </Link>
          }
        </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
      </div>
    )
}

export default Navbar
