import React from 'react'

import { Link } from 'react-router-dom';

//mui components
import { AppBar, Toolbar, Button, Typography, IconButton, Grid } from '@material-ui/core'

//mui icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useStyles } from './styles'

const Navbar = () => {
    
    const classes = useStyles()

    return (
        <div>
        <AppBar position='static' color='primary'>    
        <Toolbar>
        <Grid container spacing={3}>
          <Grid item sm={7} md={9} lg={10}>
          <Link to='/' style={{ textDecoration:'none'}}>     
            <Typography variant="h4" className={classes.title} style={{ color: '#161616'}}>
              House of Comics
            </Typography>
          </Link>
        </Grid>
        <Grid item sm={5} md={3} lg={2}> 
          <Link to='/cart/id?' style={{ textDecoration:'none'}}>
            <IconButton style={{ color: '#161616'}}>
              <ShoppingCartIcon />
            </IconButton>
          </Link>
          <Link to='/login' style={{ textDecoration:'none'}}>
            <Button style={{ color: '#161616'}}>Login</Button>
          </Link>
        </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Navbar
