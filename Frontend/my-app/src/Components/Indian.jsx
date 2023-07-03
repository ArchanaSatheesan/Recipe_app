import { Button } from '@mui/material'
import React from 'react'
import dosa from '../Assets/dosa.jpg'

const Indian = () => {
  return (
    <div className='card'>

        <div className='card-title'>
            Masala Dosa
        </div>

        <div className='card-img'>
            <img src={dosa} alt="dosa" />
        </div>

        <div className='carddata'>
            <div className='carddata1'>
              30mins
            </div>

            <div className='carddata2'>
              1per
            </div>
        </div>


          <div className='card-action'>
            <Button>EDIT</Button>
            <Button>DELETE</Button>
          </div>








    </div>
        
  )
}

export default Indian