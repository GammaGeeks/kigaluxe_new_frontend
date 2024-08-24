/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Navigation from '../../components/Navigation'
import SectionOne from '../../components/HomePage/Section_1'
import Search from '../../components/HomePage/Search'
import SectionTwo from '../../components/HomePage/Section_2'
import SectionThree from '../../components/HomePage/Section_3'
import SectionFour from '../../components/HomePage/Section_4'

import './index.scss'
import SectionFive from '../../components/HomePage/Section_5'
import Footer from '../../components/Footer'

const Home = () => {
  return (
  <div className='container-fluid'>
    <Navigation />
    <SectionOne />
    <Search />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <Footer />
  </div>
  )
}

export default Home