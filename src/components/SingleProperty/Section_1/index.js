/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import "./index.scss"

function SectionOne() {
  const { profile } = useSelector(state => state.user)
  // const dispatch = useDispatch()

  const { firstname } = profile

  return (
    <div className='section_1 pt-5'>
      <div className="container">
        <div className='d-flex justify-content-center'>
          <Image src={require('../../../assets/avatar.png')} roundedCircle />
        </div>
        <div>
          <h1>Welcome, {firstname}</h1>
        </div>
      </div>
    </div>
  )
}

export default SectionOne
