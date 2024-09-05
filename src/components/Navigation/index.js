import React, { useState } from 'react'
import FixedHeader from './FixedHeader'
import Header from './Header'
import SideMenu from './SideMenu'

function Navigation() {
  const [isAsideActive, setIsAsideActive] = useState(false)

  return (
    <>
      <FixedHeader setIsAsideActive={setIsAsideActive}/>
      <Header setIsAsideActive={setIsAsideActive}/>
      <SideMenu isAsideActive={isAsideActive}  setIsAsideActive={setIsAsideActive}/>
    </>
  )
}

export default Navigation