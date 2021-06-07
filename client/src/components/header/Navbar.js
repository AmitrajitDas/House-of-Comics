import React from 'react'

//mui components
import { AppBar, Toolbar, Button, Typography, IconButton, Grid } from '@material-ui/core'

//mui icons
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useStyles } from './styles'

const Navbar = () => {
    
    const classes = useStyles()
    
    return (
        <div>
        <AppBar position='static' color='secondary'>    
        <Toolbar>
        <Grid container spacing={3}>
          <Grid item sm={7} md={9} lg={10}>     
          <Typography variant="h4" className={classes.title}>
            ComiXology
          </Typography>
        </Grid>
        <Grid item sm={5} md={3} lg={2}> 
          <Button color='inherit'><ShoppingCartIcon /></Button>
          <Button color='inherit'>Login</Button>
        </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Navbar
