import { AppBar, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';

const Footers = () => {
  return (
    <Box sx={{ flexGrow: 1 ,marginTop:'625px'}}>
    <AppBar  position="static" color='secondary'>
        
            <Typography variant='h6'>
                copyright@1992
            </Typography>
        </AppBar>
        </Box>

  )
}

export default Footers