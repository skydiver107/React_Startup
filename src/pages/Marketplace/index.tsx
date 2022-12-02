import { useState } from 'react'
import { Box, Typography } from '@mui/material'

import ProgressBar from '../../components/ProgressBar/ProgressBar'
import StakingData from '../../components/StakingData/StakingData'
import CustomFilter from '../../components/CustomFilter/CustomFilter'
import CustomSort from '../../components/CustomSort/CustomSort'
import { ProductModal } from '../../components'

import './marketplace.scss'

const Marketplace = () => {
  const [isOpenModal, setOpen] = useState(false);
  const [nftLists, setNftLists] = useState<any[]>([
    { id: 0, name: `NO. 1`, img: `assets/images/staking1.png`, price: 300, type: 'Rebels' },
    { id: 1, name: `NO. 2`, img: `assets/images/staking2.png`, price: 500, type: `TSAS` },
    { id: 2, name: `NO. 3`, img: `assets/images/staking3.png`, price: 200, type: `Rebels` },
    { id: 3, name: `NO. 4`, img: `assets/images/staking4.png`, price: 800, type: `Rebels` },
    { id: 4, name: `NO. 5`, img: `assets/images/staking2.png`, price: 100, type: `TSAS` },
    { id: 5, name: `NO. 6`, img: `assets/images/staking3.png`, price: 450, type: `Rebels` },
    { id: 6, name: `NO. 7`, img: `assets/images/staking4.png`, price: 120, type: `Rebels` },
  ])
  const [object, setObject] = useState()
  return (
    <Box sx={{
      background: {
        sm: `none`,
        ss: `#222222`
      }
    }} >
      <ProductModal setOpen={setOpen} open={isOpenModal} object={object} />
      <Box sx={{
        maxWidth: {
          lg: `1164px`,
          ss: `90%`
        },
        margin: `0 auto`,
        mt: 9,
        pb: 3
      }} >
        <Typography sx={{
          display: {
            sm: `none`,
            ss: `block`
          },
          textAlign: `center`,
          fontFamily: 'Montserrat',
          fontWeight: 800,
          fontSize: `20px`,
          color: `#FFFFFF`,
          textTransform: `uppercase`
        }} >marketplace</Typography>
        <ProgressBar />
        <StakingData />
        <Box>
          <Box sx={{
            width: `100%`,
            mt: 3
          }} >
            <Box sx={{
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `center`,
              padding: `16px 20px`,
              background: `black`,
              border: `1px solid #FFC000`,
              borderRadius: `5px 5px 0px 0px`
            }} >
              <Typography sx={{
                display: {
                  sm: `block`,
                  ss: `none`
                },
                fontFamily: 'Montserrat',
                color: `white`,
                fontWeight: 800,
                fontSize: `18px`,
                textTransform: `uppercase`
              }} >Marketplace</Typography>
              <Typography sx={{
                fontFamily: 'Montserrat',
                fontWeight: 800,
                fontSize: `20px`,
                color: `white`
              }} >
                {nftLists.length} Items
              </Typography>
              <Box sx={{
                display: `flex`,
                alignItems: `center`,
                gap: `8px`
              }} >
                <CustomFilter
                  nftLists={nftLists}
                  setNftLists={setNftLists}
                />
                <CustomSort
                  nftLists={nftLists}
                  setNftLists={setNftLists}
                />
              </Box>
            </Box>

            <Box sx={{
              mt: {
                sm: 0,
                ss: 2
              },
              padding: {
                sm: `20px`,
                ss: 0
              },
              background: `#222222;`,
              position: `relative`
            }}>

              {
                nftLists.length === 0 &&
                <Box sx={{
                  minHeight: `450px`,
                  borderRadius: `0px 0px 5px 5px`
                }} >
                  <Typography sx={{
                    color: `#FFFFFF`,
                    fontFamily: 'Montserrat',
                    fontWeight: 800,
                    fontSize: `17px`,
                    position: `absolute`,
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(-50%,-50%)`,
                    textTransform: `uppercase`
                  }} >there are no nfts to purchase </Typography>
                </Box>
              }

              {
                nftLists.length > 0 && <Box sx={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  // justifyContent: `space-between`,
                  gap: `12px`,
                  height: `450px`,
                  overflow: `auto`,
                  borderRadius: `0px 0px 5px 5px`
                }}
                  className="custom-scroll"
                >
                  {
                    nftLists.map((item: any, idx: any) => {
                      return (
                        <Box
                          key={idx}
                          sx={{
                            width: {
                              md: `24%`,
                              sm: `32%`,
                              ss: `48%`
                            },
                            transition: `0.15s`,
                            my: {
                              sm: 0,
                              ss: 1
                            },
                            '&:hover': {
                              border: `1px solid #FFC000`,
                              borderRadius: `0px 0px 5px 5px`
                            }
                          }} >

                          <Box sx={{
                            background: `#333333`,
                            borderRadius: `5px 5px 0px 0px`,
                            textAlign: `center`,
                            fontSize: `12px`,
                            color: `#FFFFFF`,
                            textTransform: `uppearcase`,
                            padding: `12px 0px`
                          }} >{item.name}</Box>
                          <Box
                            component={`img`}
                            src={item.img}
                            sx={{
                              width: `100%`
                            }}
                          />
                          <Box
                            onClick={() => {
                              setOpen(true);
                              setObject(item);
                            }}
                            sx={{
                              background: `#333333`,
                              borderRadius: `0px 0px 5px 5px`,
                              textAlign: `center`,
                              fontSize: `13px`,
                              color: `#FFC000`,
                              fontWeight: 700,
                              textTransform: `uppercase`,
                              cursor: `pointer`,
                              padding: `12px 0px`,
                              border: `1px solid #FFC000`,
                              transition: `0.15s`,
                              '&:hover': {
                                color: `black`,
                                background: `#FFC000`
                              }
                            }} >
                            purchase
                          </Box>
                        </Box>
                      )
                    })
                  }
                </Box>
              }
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Marketplace