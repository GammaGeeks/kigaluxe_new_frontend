import React from 'react'

import './index.scss'

function Header({title}) {
  return (
    <div className='d-flex justify-content-center align-content-center bg_header_2'>
      <h2 className='my-auto'>{title}</h2>
    </div>
  )
}

export default Header