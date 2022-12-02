import React, { useState, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

import './header.scss'

const Header = () => {

  const hideMenu = React.useRef<any>(null);
  const [account, setAccount] = useState(false)
  const [flag, setFlag] = useState(false)
  const Path = useLocation();

  useEffect(()=>{
    if(flag) {
      hideMenu.current.style.height = '100vh'
    } else {
      hideMenu.current.style.height = '0px'
    }
  }, [flag])
  
  return (
    <div className='header-container'>
      <div className='header-wrapper'>
        <Link to='/' className='logo-bar'>
          <img className='logo-img' src='/assets/images/logo.png'/>
          <img className='logo-text' src='/assets/images/logo-text.png'/>
        </Link>
        <Button className='menu-icon' onClick={()=>setFlag(!flag)}><img src='/assets/images/menu.png'/></Button>
        <div className='nav-bar'>
          <div className='nav-items'>
            <Link to='/' className='item'>
              <Typography variant='h6' className={`${Path.pathname === '/' ? "colorffc" : "" }`}>HOME</Typography>
            </Link>
            <Link to='/about' className='item'>
              <Typography variant='h6' className={`${Path.pathname === '/about' ? "colorffc" : "" }`}>ABOUT</Typography>
            </Link>
            <Link to='/staking' className='item'>
              <Typography variant='h6' className={`${Path.pathname === '/staking' ? "colorffc" : "" }`}>STAKING</Typography>
            </Link>
            <Link to='/marketplace' className='item'>
              <Typography variant='h6' className={`${Path.pathname === '/marketplace' ? "colorffc" : "" }`}>MARKETPLACE</Typography>
            </Link>
          </div>
          <div>
            <Button className='wallet-btn'>
              <Typography variant='h6'>Connect wallet</Typography>
            </Button>
          </div>
        </div>
      </div>
      <Box ref={hideMenu} className='hide-items'>
        <div className='hide-items-wrapper'>
          {/* <div className='hide-wallet-btn'> */}
            <Button className={`hide-wallet-btn ${account? 'bgcolorFFC' : 'bgcolor333'}`}>
              <Typography variant='h6'>Connect your wallet</Typography>
            </Button>
          {/* </div> */}
          <Link to='/' className='item' onClick={()=>setFlag(!flag)}>
            <Button className={`${Path.pathname === '/' ? "colorffc" : "" }`}>
              <Typography variant='h4'>HOME</Typography>
            </Button>
          </Link>
          <Link to='/about' className='item' onClick={()=>setFlag(!flag)}>
            <Button className={`${Path.pathname === '/about' ? "colorffc" : "" }`}>
              <Typography variant='h4'>ABOUT</Typography>
            </Button>
          </Link>
          <Link to='/staking' className='item' onClick={()=>setFlag(!flag)}>
            <Button className={`${Path.pathname === '/staking' ? "colorffc" : "" }`}>
              <Typography variant='h4'>STAKING</Typography>
            </Button>
          </Link>
          <Link to='/marketplace' className='item' onClick={()=>setFlag(!flag)}>
            <Button className={`${Path.pathname === '/marketplace' ? "colorffc" : "" }`}>
              <Typography variant='h4'>MARKETPLACE</Typography>
            </Button>
          </Link>
        </div>
        <div className='menu-foot-items'>
          <Button className='menu-foot-item'><img src='/assets/images/twitter-b.png'/></Button>
          <Button className='menu-foot-item'><img src='/assets/images/discord-b.png'/></Button>
          <Button className='menu-foot-item'><img src='/assets/images/menu-foot-b.png'/></Button>
        </div>
      </Box>
    </div>
  )
}

export default Header