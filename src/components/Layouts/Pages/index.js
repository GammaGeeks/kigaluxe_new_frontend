import { Outlet } from 'react-router-dom'
import Navigation from '../../Navigation';
import SocialMedia from '../../Navigation/SocialMedia'
// import PopUp from '../../Navigation/PopUp'
import FooterPart from '../../Footer';

const Layout = () => {
  return (
    <div id="main-wrapper">
      <Navigation />
      <SocialMedia />
      {/* <PopUp /> */}
      {/* <IntroVideo /> */}
      <Outlet />
      <FooterPart />
    </div>
  )
}

export default Layout