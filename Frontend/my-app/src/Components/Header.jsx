import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import recipe from '../Assets/recipe.jpg'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
          <AppBar  position="static" color='secondary'>
            <Toolbar>
               {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              > 
                <MenuIcon />
              </IconButton>  */}
              <img src={recipe} alt='logo' style={{width:'90px',height:'10vh'}}/>
              <Typography variant="h6" component="div" style={{fontFamily:'unset'}} sx={{ flexGrow: 1 }}>
                My recipe App
              </Typography>
              <Button style={{textTransform:'none',color:'white',fontFamily:'unset',fontSize:'18px'}}><Link to='/' style={{textDecoration:'none',color:'white'}}>Indian</Link></Button>
              <Button  style={{textTransform:'none',color:'white',fontFamily:'unset',fontSize:'18px'}}><Link to='/chineese' style={{textDecoration:'none',color:'white'}}>Chineese </Link></Button>
              <Button  style={{textTransform:'none',color:'white',fontFamily:'unset',fontSize:'18px'}}><Link to='/add' style={{textDecoration:'none',color:'white'}}>Add Cuisine</Link></Button>
            </Toolbar>
          </AppBar>
        </Box>
  )
}

export default Header