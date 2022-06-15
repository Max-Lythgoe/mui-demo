import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <AppBar
    position="static"
    color="primary"
    sx={{height: 70, display: 'flex', alignItems: 'center'}}
    >
        <Toolbar sx={{height: "100%", display: "flex"}}>
        <Typography variant="h4">Site</Typography>
        <Stack sx={{display: "flex", flexDirection: "row"}}>
            <Link to="/">
            <Button color="inherit">Home</Button>
            </Link>
            <Link to="/About">
            <Button color="inherit">About</Button>
            </Link>
        </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Menu