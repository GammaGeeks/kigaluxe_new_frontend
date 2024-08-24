/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Navigation from '../../components/Navigation'
import Header from '../../components/AllPropertiesPage/HeaderProperties'
import MainSection from '../../components/AllPropertiesPage/MainSection'
import Footer from '../../components/Footer'

// import './index.scss'

const AllProperties = () => {
  return (
  <div className='container-fluid'>
    <Navigation />
    <Header title='All Properties' />
    <MainSection />
    <Footer />
  </div>
  )
}

export default AllProperties