import { AppBar, Toolbar, IconButton, Grid, Typography, Box } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

import React from 'react'

export const NavBar = ({drawerWidth = 240}) => {
  return (
    <AppBar position='fixed' xs={{}}>
        <Toolbar>
            <IconButton color='inherit'>
                <MenuOutlined />
            </IconButton>
            <Grid container direction='row' justifyContent='space-around' alignItems='center'>
            {/* <Typography variant="h6" noWrap component='div'>Liverpool</Typography> */}
              <Box
                component="img"
                sx={{
                height: 30,
                width: 350,
                maxHeight: { xs: 30, md: 30 },
                maxWidth: { xs: 350, md: 250 },
                }}
                alt="Logo liverpool"
                src='src/assets/images/liverpool-logo.svg'
              />  
              <IconButton color='inherit'>
                <LogoutOutlined />
              </IconButton>
              
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
