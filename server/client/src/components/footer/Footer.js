import React from 'react'

import { Container, Typography, AppBar } from '@material-ui/core'

import { useStyles } from './styles'

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footerWrapper}>
      <AppBar position='static' className={classes.footer}>
        <Typography variant='h6' align='center' className={classes.text}>
          Copyright &copy; Amitrajit Das, 2021
        </Typography>
      </AppBar>
    </div>
  )
}

export default Footer
