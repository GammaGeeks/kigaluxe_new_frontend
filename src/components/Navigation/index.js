import React, { useState } from 'react'
import FixedHeader from './FixedHeader'
import Header from './Header'
import SideMenu from './SideMenu'

function Navigation() {
  const [isAsideActive, setIsAsideActive] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const changeNavBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavBackground)

  return (
    <>
      <FixedHeader setIsAsideActive={setIsAsideActive} navbar={navbar}/>
      <Header setIsAsideActive={setIsAsideActive}/>
      <SideMenu isAsideActive={isAsideActive}  setIsAsideActive={setIsAsideActive}/>
    </>
  )
}

export default Navigation