/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Navigation from '../../components/Navigation'
import Header from '../../components/ForSalePage/HeaderProperties'
import MainSection from '../../components/ForSalePage/MainSection'
import Footer from '../../components/Footer'

import './index.scss'

const ForSale = () => {
  return (
  <div className='container-fluid'>
    <Navigation />
    <Header title='Properties For Sale' />
    <MainSection />
    <Footer />
  </div>
  )
}

export default ForSale