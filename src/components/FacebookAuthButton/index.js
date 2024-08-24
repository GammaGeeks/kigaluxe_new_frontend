import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userAction } from '../../redux/actions'
import { Button } from 'react-bootstrap'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import './index.scss'
const appId = process.env.REACT_APP_FACEBOOK_APP_ID

function FacebookAuthButton({text, page}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const dispatch = useDispatch()

  let fbContent

  const responseFacebook = (response) => {
    console.log(response)
    setIsLoggedIn(true)

    if(page === 'sign_up') dispatch(userAction.signup({
      firstname: response.name,
      email: response.email,
      profileImg: response.picture.data.url,
      isVerified: true,
      password: response.userID
    }))

    

    if(page === 'sign_in') dispatch(userAction.login({
      email: response.email,
      password: response.userID
    }))
  }
  const componentClicked = () => {
    console.log('clicked')
  }

  if (isLoggedIn){
    fbContent = (
      <FacebookLogin
        appId={appId}
        autoLoad={false}
        fields='name,email,picture'
        onClick={componentClicked}
        callback={responseFacebook}
        render={renderProps => (
          <Button className='sign_up_facebook d-flex justify-content-center align-content-center p-2' onClick={renderProps.onClick}>
            <FontAwesomeIcon className='mt-1 sign_up_facebook_icon' icon={faFacebook}/> {text}
          </Button>
        )}
      />
    )
  } else {
    fbContent = (
      <FacebookLogin
        appId={appId}
        autoLoad={false}
        fields='name,email,picture'
        onClick={componentClicked}
        callback={responseFacebook}
        render={renderProps => (
          <Button className='sign_up_facebook d-flex justify-content-center align-content-center p-2' onClick={renderProps.onClick}>
            <FontAwesomeIcon className='mt-1 sign_up_facebook_icon' icon={faFacebook}/> {text}
          </Button>
        )}
      />
    )
  }

  return (
    <div>
        {fbContent}
    </div>
  )
}

export default FacebookAuthButton