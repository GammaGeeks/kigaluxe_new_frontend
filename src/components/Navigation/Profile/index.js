/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { NotificationManager } from 'react-notifications'
import { userAction } from '../../../redux/actions';
import 'react-notifications/lib/notifications.css';
import './index.scss'

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    {/* &#x25bc; */}
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    // const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        {/* <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        /> */}
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) => child.props.children.toLowerCase(),
          )}
        </ul>
      </div>
    );
  },
);


const Profile = ({profileImg, firstname}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { logout } = useSelector(state => state.user)

  const handleLogout = (e) => {
    // e.preventDefault()
    dispatch(userAction.logout())
    if (logout && logout.error) NotificationManager.error(logout.error, '', 3000);
    if (logout && logout.message) NotificationManager.success(logout.message, '', 3000);
  }

  return (
  <>
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <div className='d-flex justify-content-center mt-2'>
          <Image
            width="50"
            height="50"
            src={profileImg ? profileImg : require('../../../assets/avatar.png')}
            roundedCircle
          />
        </div>
        <div className='d-flex justify-content-center'>
          {firstname ? <p className='greeting'>Hi, {firstname}</p> : ''}
        </div>
      </Dropdown.Toggle>
  
      <Dropdown.Menu className='profile_ul' as={CustomMenu}>
        <Dropdown.Item onClick={() => navigate('/profile')} className='link' eventKey="1">Profile</Dropdown.Item>
        <Dropdown.Item className='link' eventKey="2">Settings</Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleLogout()}
          className='link'
          eventKey="3"
        >
          Sign Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
  )
}

export default Profile