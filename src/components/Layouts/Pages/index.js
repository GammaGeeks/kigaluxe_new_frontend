import { Outlet } from 'react-router-dom'
import FixedHeader from '../../Navigation/FixedHeader'
import Header from '../../Navigation/Header'
import SideMenu from '../../Navigation/SideMenu'
import SocialMedia from '../../Navigation/SocialMedia'
import FooterPart from '../../Footer';

const Layout = () => {
  return (
    <div id="main-wrapper">
      <FixedHeader />
      <Header />
      <SideMenu />
      <SocialMedia />
      {/* <PopUp /> */}
      {/* <IntroVideo /> */}
      <Outlet />
      <FooterPart />
    </div>
  )
}

export default Layout