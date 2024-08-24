/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

import './index.scss'
import SectionOne from '../../components/SingleProperty/Section_1'

const SinqleProperty = () => {
  return (
  <div className='container-fluid'>
    <Navigation />
    <SectionOne />
    <Footer />
  </div>
  )
}

export default SinqleProperty