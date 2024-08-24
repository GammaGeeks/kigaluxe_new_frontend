/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../../components/Navigation'
import SectionOne from '../../components/ProfilePage/Section_1'

import './index.scss'
import Footer from '../../components/Footer'

const Profile = () => {
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  const navigate = useNavigate()

  useEffect(() => {
    if (!token && !user) {
      localStorage.clear()
      navigate('/auth/sign_in')
    }}, [token, user, navigate])

  return (
  <div className='container-fluid'>
    <Navigation />
    <SectionOne />
    <Footer />
  </div>
  )
}

export default Profile