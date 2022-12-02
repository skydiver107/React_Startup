import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../layout/header'

import {
  Home,
  About,
  Marketplace,
  Staking,
} from '../pages'

import MarketplaceInfo from '../pages/MarketplaceInfo'

const Router = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/marketplace/marketInfo/:id' element={<MarketplaceInfo />} />
        <Route path='/staking' element={<Staking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router