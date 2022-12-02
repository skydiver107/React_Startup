import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'

import ProgressBar from '../../components/ProgressBar/ProgressBar'
import StakingData from '../../components/StakingData/StakingData'
import StakingModal from '../../components/StakingModal/StakingModal'
import './staking.scss'

const Staking = () => {

  const [nftLists, setNftLists] = useState<any[]>([
    { id: 0, name: `NO. 1`, img: `assets/images/staking1.png` },
    { id: 1, name: `NO. 2`, img: `assets/images/staking2.png` },
    { id: 2, name: `NO. 3`, img: `assets/images/staking3.png` },
    { id: 3, name: `NO. 4`, img: `assets/images/staking4.png` },
    { id: 4, name: `NO. 5`, img: `assets/images/staking2.png` },
    { id: 5, name: `NO. 6`, img: `assets/images/staking3.png` },
    { id: 6, name: `NO. 7`, img: `assets/images/staking4.png` },
  ])
  const [stakedLists, setStakedLists] = useState<any[]>([])
  const [isOpenModal, setOpenModal] = useState(false)

  const [stakingIdx, setStakingIdx] = useState(-1)
  const [unStakingIdx, setUnStakingIdx] = useState(-1)
  const [isModalStake, setModalStake] = useState({
    isStake: false,
    isStakeAll: false,
    isUnStake: false,
    isUnStakeAll: false
  })


  const [isTab, setTab] = useState({
    stake: true,
    unStake: false
  })


  const handleStakeAll = () => {
    setStakedLists([...stakedLists, ...nftLists])
    setNftLists([])
    setOpenModal(false)
  }

  const handleUnstakeAll = () => {
    setStakedLists([])
    setNftLists([...nftLists, ...stakedLists])
    setOpenModal(false)
  }

  const handleStaking = () => {
    console.log('stakingIdx', stakingIdx)
    if (stakingIdx || stakingIdx == 0) {
      setStakedLists([...stakedLists, nftLists[stakingIdx]]);
      nftLists.splice(stakingIdx, 1)
      setNftLists([...nftLists])
    }
    setOpenModal(false)
    setOpenModal(false)
  }

  const handleUnStaking = () => {
    console.log('unStakingIdx', unStakingIdx, stakedLists)
    if (unStakingIdx || unStakingIdx == 0) {
      setNftLists([...nftLists, stakedLists[unStakingIdx]])
      stakedLists.splice(unStakingIdx, 1)
      setStakedLists([...stakedLists])
    }
    setOpenModal(false)
  }

  return (
    <Box sx={{
      background: {
        sm: `none`,
        ss: `#222222`
      }
    }} >
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
        }} >staking</Typography>
        <ProgressBar />
        <StakingData />

        {/* Desktop  */}
        <Box sx={{
          display: {
            sm: `flex`,
            ss: `none`
          },
          justifyContent: `space-between`,
          mt: 4
        }} >
          <Box sx={{
            width: `49%`
          }} >
            <Box sx={{
              display: {
                sm: `flex`,
                ss: `none`
              },
              justifyContent: `space-between`,
              alignItems: `center`,
              padding: `16px 20px`,
              background: `black`,
              border: `1px solid #FFC000`,
              borderRadius: `5px`
            }} >
              <Typography sx={{
                fontFamily: 'Montserrat',
                color: `white`,
                fontWeight: 800,
                fontSize: `18px`
              }} >MY WALLET</Typography>
              <Box
                onClick={() => {
                  if (nftLists.length !== 0) {
                    setOpenModal(true);
                  }
                  setModalStake({
                    ...isModalStake,
                    isStake: false,
                    isStakeAll: true,
                    isUnStake: false,
                    isUnStakeAll: false
                  })
                }}
                component={`button`}
                sx={{
                  background: nftLists.length !== 0 ? `#FFC000` : `#919191`,
                  borderRadius: `5px`,
                  padding: `12px 31px`,
                  color: `#151414`,
                  cursor: `pointer`,
                  border: `none`
                }} >
                STAKE ALL
              </Box>
            </Box>

            <Box sx={{
              padding: `20px`,
              background: `#222222;`,
              position: `relative`,
              borderRadius: `0 0 5px 5px`
            }}>

              {
                nftLists.length === 0 &&
                <Box sx={{
                  minHeight: `555px`
                }} >
                  <Typography sx={{
                    width: `100%`,
                    textAlign: `center`,
                    color: `#FFFFFF`,
                    fontFamily: 'Montserrat',
                    fontWeight: 800,
                    fontSize: `17px`,
                    position: `absolute`,
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(-50%,-50%)`,
                    textTransform: `uppercase`
                  }} >there are no nfts to stake </Typography>
                </Box>
              }

              {
                nftLists.length > 0 && <Box sx={{
                  paddingRight: `8px`,
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  height: `555px`,
                  overflow: `auto`,
                  rowGap: `10px`
                }}
                  className="custom-scroll"
                >
                  {
                    nftLists.map((item: any, idx: any) => {
                      return (
                        <Box sx={{
                          width: {
                            sm: `49%`,
                            ss: `100%`
                          },
                        }} >
                          <Box sx={{
                            transition: `0.15s`,
                            '&:hover': {
                              border: `2px solid #FFC000`,
                              borderRadius: `5px`
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
                            }} >{item?.name}</Box>
                            <Box
                              component={`img`}
                              src={item?.img}
                              sx={{
                                width: `100%`
                              }}
                            />
                            <Box
                              // onClick={() => handleStaking(idx)}
                              onClick={() => {
                                setOpenModal(true);
                                setStakingIdx(idx);
                                setModalStake({
                                  ...isModalStake,
                                  isStake: true,
                                  isStakeAll: false,
                                  isUnStake: false,
                                  isUnStakeAll: false
                                })
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
                              Stake
                            </Box>

                          </Box>

                        </Box>


                      )
                    })
                  }
                </Box>
              }

            </Box>


          </Box>

          <Box sx={{
            width: `49%`
          }} >

            <Box sx={{
              display: {
                sm: `flex`,
                ss: `none`
              },
              justifyContent: `space-between`,
              alignItems: `center`,
              padding: `16px 20px`,
              background: `black`,
              border: `1px solid #FFC000`,
              borderRadius: `5px`
            }} >
              <Typography sx={{
                fontFamily: 'Montserrat',
                color: `white`,
                fontWeight: 800,
                fontSize: `18px`
              }} >STAKED  Rebels</Typography>
              <Box
                onClick={() => {
                  if (stakedLists.length !== 0) {
                    setOpenModal(true);
                  }
                  setModalStake({
                    ...isModalStake,
                    isStake: false,
                    isStakeAll: false,
                    isUnStake: false,
                    isUnStakeAll: true
                  })
                }}
                component={`button`}
                sx={{
                  background: stakedLists.length !== 0 ? `#FFC000` : `#919191`,
                  borderRadius: `5px`,
                  padding: `12px 31px`,
                  color: `#151414`,
                  cursor: `pointer`,
                  border: `none`
                }} >
                UNSTAKE ALL
              </Box>
            </Box>

            <Box sx={{
              padding: `20px`,
              background: `#222222;`,
              position: `relative`,
              borderRadius: `0 0 5px 5px`
            }}>

              {
                stakedLists.length === 0 &&
                <Box sx={{
                  minHeight: `555px`
                }} >
                  <Typography sx={{
                    width: `100%`,
                    textAlign: `center`,
                    color: `#FFFFFF`,
                    fontFamily: 'Montserrat',
                    fontWeight: 800,
                    fontSize: `17px`,
                    position: `absolute`,
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(-50%,-50%)`,
                    textTransform: `uppercase`
                  }} >you didnt stake any nfts yet</Typography>
                </Box>
              }

              {
                stakedLists.length > 0 && <Box sx={{
                  paddingRight: `8px`,
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  height: `555px`,
                  overflow: `auto`,
                  rowGap: `10px`
                }}
                  className="custom-scroll"
                >
                  {
                    stakedLists.map((item: any, idx: any) => {
                      return (
                        <Box sx={{
                          width: {
                            sm: `49%`,
                            ss: `100%`
                          },
                        }} >
                          <Box
                            sx={{
                              transition: `0.15s`,
                              '&:hover': {
                                border: `2px solid #FFC000`,
                                borderRadius: `5px`
                              }
                            }}
                          >
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
                                // handleUnStaking(idx);
                                setUnStakingIdx(idx);
                                setOpenModal(true);
                                setModalStake({
                                  ...isModalStake,
                                  isStake: false,
                                  isStakeAll: false,
                                  isUnStake: true,
                                  isUnStakeAll: false
                                })
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
                              Unstake
                            </Box>
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



        {/* Mobile */}
        <Box sx={{
          display: {
            sm: `none`,
            ss: `flex`
          },
          alignItems: `center`,
          borderRadius: `5px`,
          mt: 4,
          border: `1px solid #FFC000`
        }} >
          <Box
            onClick={() => setTab({ ...isTab, stake: true, unStake: false })}
            sx={{
              width: `49%`,
              background: isTab.stake ? `#FFC000` : `#151414`,
              color: isTab.stake ? `#151414` : `#FFC000`,
              padding: 2,
              textAlign: `center`,
              borderRadius: `1px solid #FFC000`
            }} >
            MY WALLET
          </Box>
          <Box
            onClick={() => setTab({ ...isTab, stake: false, unStake: true })}
            sx={{
              width: `49%`,
              background: isTab.unStake ? `#FFC000` : `#151414`,
              color: isTab.unStake ? `#151414` : `#FFC000`,
              padding: 2,
              textAlign: `center`,
              borderRadius: `5px`
            }} >
            STAKED NFTS
          </Box>
        </Box>

        {
          isTab.stake && <Box sx={{
            display: {
              sm: `none`,
              ss: `block`
            },
            py: 3,
            background: `#222222;`,
            position: `relative`,
            borderRadius: `0 0 5px 5px`,
          }}>

            {
              nftLists.length === 0 &&
              <Box sx={{
                minHeight: `555px`
              }} >
                <Typography sx={{
                  width: `100%`,
                  textAlign: `center`,
                  color: `#FFFFFF`,
                  fontFamily: 'Montserrat',
                  fontWeight: 800,
                  fontSize: `17px`,
                  position: `absolute`,
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(-50%,-50%)`,
                  textTransform: `uppercase`
                }} >there are no nfts to stake </Typography>
              </Box>
            }

            {
              nftLists.length > 0 &&
              <Box>
                <Box sx={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  overflow: `auto`,
                  rowGap: `24px`
                }}
                  className="custom-scroll"
                >
                  {
                    nftLists.map((item: any, idx: any) => {
                      return (
                        <Box sx={{
                          width: `48%`
                        }} >
                          <Box sx={{
                            transition: `0.15s`,
                            '&:hover': {
                              border: `2px solid #FFC000`,
                              borderRadius: `5px`
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
                            }} >{item?.name}</Box>
                            <Box
                              component={`img`}
                              src={item?.img}
                              sx={{
                                width: `100%`
                              }}
                            />
                            <Box
                              // onClick={() => handleStaking(idx)}
                              onClick={() => {
                                setOpenModal(true);
                                setStakingIdx(idx);
                                setModalStake({
                                  ...isModalStake,
                                  isStake: true,
                                  isStakeAll: false,
                                  isUnStake: false,
                                  isUnStakeAll: false
                                })
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
                              Stake
                            </Box>

                          </Box>

                        </Box>


                      )
                    })
                  }
                </Box>
                <Box>
                  <Box
                    onClick={() => {
                      if (nftLists.length !== 0) {
                        setOpenModal(true);
                      }
                      setModalStake({
                        ...isModalStake,
                        isStake: false,
                        isStakeAll: true,
                        isUnStake: false,
                        isUnStakeAll: false
                      })
                    }}
                    component={`button`}
                    sx={{
                      width: `100%`,
                      mt: 2.5,
                      background: `#333333`,
                      borderRadius: `5px`,
                      padding: `12px 31px`,
                      cursor: `pointer`,
                      border: `1px solid #FFC000`,
                      color: `#FFC000`
                    }} >
                    STAKE ALL
                  </Box>
                </Box>

              </Box>


            }

          </Box>
        }
        {
          isTab.unStake &&

          <Box sx={{
            display: {
              sm: `none`,
              ss: `block`
            },
            py: 3,
            background: `#222222;`,
            position: `relative`,
            borderRadius: `0 0 5px 5px`,
          }}>

            {
              stakedLists.length === 0 &&
              <Box sx={{
                minHeight: `555px`
              }} >
                <Typography sx={{
                  width: `100%`,
                  textAlign: `center`,
                  color: `#FFFFFF`,
                  fontFamily: 'Montserrat',
                  fontWeight: 800,
                  fontSize: `17px`,
                  position: `absolute`,
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(-50%,-50%)`,
                  textTransform: `uppercase`
                }} >you didnt stake any nfts yet</Typography>
              </Box>
            }

            {
              stakedLists.length > 0 &&
              <Box>
                <Box sx={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  overflow: `auto`,
                  rowGap: `24px`
                }}
                  className="custom-scroll"
                >
                  {
                    stakedLists.map((item: any, idx: any) => {
                      return (
                        <Box sx={{
                          width: `48%`
                        }} >
                          <Box sx={{
                            transition: `0.15s`,
                            '&:hover': {
                              border: `2px solid #FFC000`,
                              borderRadius: `5px`
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
                            }} >{item?.name}</Box>
                            <Box
                              component={`img`}
                              src={item?.img}
                              sx={{
                                width: `100%`
                              }}
                            />
                            <Box
                              // onClick={() => handleStaking(idx)}
                              onClick={() => {
                                setOpenModal(true);
                                setUnStakingIdx(idx);
                                setModalStake({
                                  ...isModalStake,
                                  isStake: false,
                                  isStakeAll: false,
                                  isUnStake: true,
                                  isUnStakeAll: false
                                })
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
                              Unstake
                            </Box>
                          </Box>
                        </Box>

                      )
                    })
                  }
                </Box>
                <Box>
                  <Box
                    onClick={() => {
                      if (stakedLists.length !== 0) {
                        setOpenModal(true);
                      }
                      setModalStake({
                        ...isModalStake,
                        isStake: false,
                        isStakeAll: false,
                        isUnStake: false,
                        isUnStakeAll: true
                      })
                    }}
                    component={`button`}
                    sx={{
                      width: `100%`,
                      mt: 2.5,
                      background: `#333333`,
                      borderRadius: `5px`,
                      padding: `12px 31px`,
                      cursor: `pointer`,
                      border: `1px solid #FFC000`,
                      color: `#FFC000`
                    }} >
                    UNSTAKE ALL
                  </Box>
                </Box>

              </Box>


            }

          </Box>
        }
      </Box>
      <StakingModal
        isOpenModal={isOpenModal}
        setOpenModal={isOpenModal}
        closeModal={() => setOpenModal(false)}
        handleStaking={handleStaking}
        handleUnStaking={handleUnStaking}
        handleStakeAll={handleStakeAll}
        handleUnstakeAll={handleUnstakeAll}
        isModalStake={isModalStake}
      />
    </Box>
  )
}

export default Staking