import { Outlet } from 'react-router-dom'
import { NotificationContainer } from 'react-notifications'
import './index.scss'

const Layout = () => {
  return (
    <div className='content'>
      <Outlet />
      <NotificationContainer/>
    </div>
  )
}

export default Layout