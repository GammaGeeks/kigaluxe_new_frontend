/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Navigation from '../../components/Navigation'
import Header from '../../components/ForRentPage/HeaderProperties'
import MainSection from '../../components/ForRentPage/MainSection'
import Footer from '../../components/Footer'

import './index.scss'

const Home = () => {
  return (
  <div className='container-fluid'>
    <Navigation />
    <Header title='Properties For Rent' />
    <MainSection />
    <Footer />
  </div>
  )
}

export default Home