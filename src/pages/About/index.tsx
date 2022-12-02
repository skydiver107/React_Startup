import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button } from '@mui/material'

import {
  cardText,
  SlickComponent
} from '../../components'

import './about.scss'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-wrapper'>
        <div className='rect-angle1'>
          <Typography variant='h3'>
            ABOUT
          </Typography>
          <div className='text-block'>
            <div className='text-wrapper' style={{ marginTop: '10px' }}>
              <div className='text-bar1'>
                <Typography variant='h7' className='lettersping'>
                  <span className='span700'>Rebels NFT</span>&nbsp;
                  is a community-driven project building out a diversified DeFi ecosystem and innovative NFT staking Dapp supporting the Stargaze blockchain. 50% of the genesis mint was used for ecosystem development and DeFi investments such as NFTs, and yield staking which continue providing yield and profits for the treasury.
                </Typography>
                <div className='text mt61'>
                  <Typography variant='h7' className='lettersping'>
                    <span className='span700'>Our Mission</span>&nbsp;is to bring together a community of likeminded people and creating an ecosystem which supports and fosters the burgeoning NFT scene on Stargaze.
                  </Typography>
                </div>
              </div>
              <div className='text-bar2'>
                <Typography variant='h7' className='lettersping'>
                  <span className='span700'>Rebels is developing an ongoing value proposition</span>&nbsp;
                  for our community not only through NFT Utility, but also by crafting an exciting and rich sci-fi fantasy narrative, through world building, animations and gamification.
                </Typography>
                <div style={{ marginTop: '14px' }}>
                  <Typography variant='h7' className='lettersping'>
                    <span className='span700'>All core Rebels NFT collections can be staked</span>&nbsp;
                    in the Dapp to receive Rebels Token as the APR reward. The tokens can be utilised in the Rebels Marketplace to purchase items such as NFTs, exclusive 1/1s, comic books, gaming arena tickets, WL booking, raffles, physical merchandise. These items will be released in phases and will evolve as we continue to innovate.
                  </Typography>
                </div>
                <Typography variant='h5' sx={{ color: '#FFC000' }} className='text'>
                  Welcome to the Rebellion!
                </Typography>
              </div>
            </div>
            <img className='nft1-img' src='/assets/images/nft01.png' />
          </div>
        </div>
        <div className='slider-block'>
          <Typography variant='h3'
            sx={{ fontWeight: '700', color: '#FFC000' }}
          >
            THE REBELS TEAM
          </Typography>
          <div className='slider-body'>
            <SlickComponent>
              {
                cardText.map((item, idx) => {
                  return (
                    // <div className='card-container'>
                    <div key={idx} className='card-body'>
                      <img
                        style={{ width: '100%' }}
                        src={item.imgurl}
                      />
                      <div className='card-text'>
                        <Typography variant='h7'>
                          <Link to='' className='nft-name'>{item.nftname}</Link><br />
                          <div className='sub-name'>{item.subname}</div>
                          {item.text}
                        </Typography>
                      </div>
                      <Link to=''><img style={{ position: 'absolute', bottom: '10px', left: '15px' }} src='/assets/images/twitter.png' /></Link>
                    </div>
                    // </div> 
                  )
                })
              }
            </SlickComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About