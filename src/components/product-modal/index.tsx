import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import './product.scss'
import { Typography } from '@mui/material';
import CheckModal from '../checkout-modal';

const style = {
  // position: 'absolute' as 'absolute',
  // transform: 'translate(-50%, -50%)',
  boxShadow: 24,
};

const subblockText = [
  {
    name: 'background',
    text: 'Legendary Cloak Burgundy'
  },
  {
    name: 'Pants',
    text: 'Legendary CLoak Burgundy'
  },
  {
    name: 'Back Weapons',
    text: 'Legendary Cloak Burgundy'
  },
  {
    name: 'Skin',
    text: 'Legendary Cloak Burgundy'
  },
  {
    name: 'Belt',
    text: 'Legendary Cloak Burgundy'
  },
  {
    name: 'Belt',
    text: 'Legendary Cloak Burgundy'
  },
  {
    name: 'Shirt',
    text: 'Legendary Cloak Burgundy'
  },
  {
    name: 'Front Weapons',
    text: 'Legendary Cloak Burgundy'
  },
  {
    name: 'Glove',
    text: 'Legendary Cloak Burgundy'
  },
  {
    name: 'Helmet',
    text: 'Legendary Cloak Burgundy'
  },
  {
    name: 'Armor',
    text: 'Legendary Cloak Burgundy'
  },
]

const modail_head_text = [
  {
    text1: 'PROJECT',
    text2: 'REBELS'
  },
  {
    text1: 'COLLECTION',
    text2: 'OG REBELS'
  },
  {
    text1: 'NFTS',
    text2: '1'
  },
]


export default function ProductModal(props: any) {
  const {
    open,
    setOpen,
    object
  } = props
  const [checkModalOpen, setCheckModalOpen] = useState<any>(false);


  return (
    <>
      {open ?
        <div className='modal-container'>
          <CheckModal
            setCheckModalOpen={setCheckModalOpen}
            checkModalOpen={checkModalOpen}
          />
          <div className='product-container'>
            <Box className='modal-wrapper'>
              <div className='hidden-block'>
                <Box className='hidden-title-bar'>
                  <img className='close-btn' onClick={() => setOpen(false)} src='/assets/images/exit.png' />
                  <Typography variant='h3'>BUY NOW-REBEL #4232</Typography>
                </Box>
                <Box className='hidden-block-wrapper'>
                  {
                    modail_head_text.map((item, idx) => {
                      return (
                        <Box key={idx} className='hidden-card'>
                          <Typography variant='h7' sx={{ color: '#FFC000' }}>{item.text1}</Typography>
                          <Typography variant='h3' sx={{ fontSize: '16px' }}>
                            {item.text2}
                          </Typography>
                        </Box>
                      )
                    })
                  }
                </Box>
              </div>
              <img style={{ maxWidth: '466px', width: '100%', borderRadius: '5px 5px 0px 0px' }} src={object.img} />
              <Box className='right-block'>
                <Box className='center-block'>
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Typography variant='h2'>BUY NOW</Typography>
                    <img className='close-btn' onClick={() => setOpen(false)} src='/assets/images/close-btn.png' />
                  </Box>
                  <Box className='rectangle150'>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontSize: '15px', color: '#FFC000' }}>PROJECT</Typography>
                      <Typography variant="h6" sx={{ fontSize: '15px' }}>REBELS</Typography>
                    </Box>
                    <div className='line'></div>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontSize: '15px', color: '#FFC000' }}>COLLECTION</Typography>
                      <Typography variant="h6" sx={{ fontSize: '15px' }}>OG REBELS</Typography>
                    </Box>
                    <div className='line'></div>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontSize: '15px', color: '#FFC000' }}>NFTS</Typography>
                      <Typography variant="h6" sx={{ fontSize: '15px' }}>1</Typography>
                    </Box>
                  </Box>
                  <Typography variant='h5' sx={{ fontWeight: '400' }}>
                    <Typography variant="h5">Description</Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </Typography>
                </Box>

                <Box className='buybtn-wrapper'>
                  <Box className='text-bar'>
                    <Typography variant='h5' sx={{
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <Typography variant='h4' sx={{ fontWeight: '400' }}>Price: </Typography>
                      &nbsp;50 RBS
                    </Typography>
                    <Typography variant='h5' sx={{
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <Typography variant='h4' sx={{ fontWeight: '400' }}>Total supply:</Typography>
                      &nbsp; 1 NFT
                    </Typography>
                  </Box>
                  <Button className='buynow-btn' onClick={() => setCheckModalOpen(true)}>
                    <Typography variant='h6' sx={{ fontSize: '14px' }}>BUY NOW</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box className='sub-block-wrapper'>
              {
                subblockText.map((item, idx) => {
                  return (
                    <Box className='block' key={idx}>
                      <Typography variant='h7' sx={{ fontSize: '15px', color: '#FFC000', whiteSpace: 'nowrap' }}>{item.name}</Typography><br />
                      <Typography variant='h7' sx={{ fontSize: '14px' }}>{item.text}</Typography>
                    </Box>
                  )
                })
              }
            </Box>
          </div>
        </div> : <></>
      }
    </>
  );
}
