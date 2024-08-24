import { Outlet } from 'react-router-dom'
import './index.scss'

const Auth = () => {
  return (
    <div className='content'>
      <Outlet />
    </div>
  )
}

export default Auth