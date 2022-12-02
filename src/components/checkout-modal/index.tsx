import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './checkout.scss'

const CheckModal = ({ setCheckModalOpen, checkModalOpen }: any) => {

  const [popup, setPopup] = useState(false)
  return (
    <>
      {checkModalOpen ?
        <div className='check-container'>
          {popup ?
            <div className='check-container'>
              <div className='popup-wrapper'>
                <img className='popup-close' onClick={() => setPopup(false)} src='/assets/images/close-btn.png' />
                <Typography variant='h3'>PURCHASE CONFIRMED</Typography>
                <Button className='marketplace-btn'><Typography variant='h5'>BACK TO MARKETPLACE</Typography></Button>
              </div>
            </div> : <></>
          }
          <div className='check-wrapper'>
            <div className='title-bar'>
              <Typography variant='h2'>CHECKOUT</Typography>
              <img className='check-close' onClick={() => setCheckModalOpen(false)} src='/assets/images/close-btn.png' />
            </div>
            <div className='sub-block'>
              <div className='sub-block-wrapper'>
                <div style={{ marginTop: '20px' }}>
                  <Typography variant='h5' sx={{ fontWeight: '400' }}>MY amount of RBS available for purchase</Typography>
                  <Typography variant='h5' sx={{ color: '#FFC000' }}>1000 RBS</Typography>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Typography variant='h5' sx={{ fontWeight: '400' }}>NFT price</Typography>
                  <Typography variant='h5' sx={{ color: '#FFC000' }}>50 RBS</Typography>
                </div>
                <div className='line'></div>
                <div style={{ marginTop: '20px' }}>
                  <Typography variant='h5' sx={{ fontWeight: '400' }}>RBS you will have left after the purchase</Typography>
                  <Typography variant='h5' sx={{ color: '#FFC000' }}>850 RBS</Typography>
                </div>
                <Button className='pay-btn' onClick={() => setPopup(true)}>
                  <Typography variant='h6' sx={{ fontSize: '14px' }}>PAY WITH MY RBS</Typography>
                </Button>
              </div>
            </div>
          </div>
        </div> : <></>
      }
    </>
  )
}

export default CheckModal