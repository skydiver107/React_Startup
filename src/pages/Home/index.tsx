import React from 'react'

import './styles.scss'

const Home = () => {

  return (
    <div className='home-container'>
      <div className='home-wrapper'>
        <img className='welcome-img' src='/assets/images/welcome.png'/>
        <img className='welcome2-img' src='/assets/images/welcome2.png'/>
        <img className='main-img' src='/assets/images/main-img.png'/>
      </div>
    </div>
  )
}

export default Home;