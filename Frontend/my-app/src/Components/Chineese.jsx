import React from 'react'
import noodles from '../Assets/noodles.jpg'
import friedrice from '../Assets/friedrice.jpg'
import gobimanch from '../Assets/gobimanch.jpg'
import drygobi from '../Assets/drygobi.jpg'
import { Button, cardActionAreaClasses } from '@mui/material'

const Chineese = () => {
  return (
    
      <><div className='card'>

      <div className='card-title'>
        Friedrice
      </div>

      <div className='card-img'>
        <img src={friedrice} alt="rice" />
      </div>

      <div className='carddata'>
        <div className='carddata1'>
          30mins
        </div>

        <div className='carddata2'>
          2per
        </div>
      </div>


      <div className='card-action'>
        <Button>EDIT</Button>
        <Button>DELETE</Button>
      </div>








    </div><div className='card'>

        <div className='card-title'>
          Noodles
        </div>

        <div className='card-img'>
          <img src={noodles} alt="noodles" />
        </div>

        <div className='carddata'>
          <div className='carddata1'>
            30mins
          </div>

          <div className='carddata2'>
            2per
          </div>
        </div>


        <div className='card-action'>
          <Button>EDIT</Button>
          <Button>DELETE</Button>
        </div>








      </div><div className='card'>

        <div className='card-title'>
          Gobi
        </div>

        <div className='card-img'>
          <img src={gobimanch} alt="noodles" />
        </div>

        <div className='carddata'>
          <div className='carddata1'>
            30mins
          </div>

          <div className='carddata2'>
            3per
          </div>
        </div>


        <div className='card-action'>
          <Button>EDIT</Button>
          <Button>DELETE</Button>
        </div>








      </div>
      <div className='card'>

      <div className='card-title'>
        Gobi dry
      </div>

      <div className='card-img'>
        <img src={drygobi} alt="gobi" />
      </div>

      <div className='carddata'>
        <div className='carddata1'>
          15mins
        </div>

        <div className='carddata2'>
          2per
        </div>
      </div>


      <div className='card-action'>
        <Button>EDIT</Button>
        <Button>DELETE</Button>
      </div>








    </div></>

  )
}

export default Chineese