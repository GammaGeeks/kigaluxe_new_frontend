import React, {useEffect} from 'react'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'
import { useDispatch } from 'react-redux'
import { userAction } from '../../redux/actions'

import './index.scss'

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

function GoogleAuthButton({text, page}) {
  const dispatch = useDispatch()
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }

    gapi.load('client:auth2', start)
  })

  const onSuccess = (res) => {
    console.log('LOGIN SUCCESS: current user: ', res.profileObj)

    if(page === 'sign_up') dispatch(userAction.signup({
      firstname: res.profileObj.givenName,
      lastname: res.profileObj.familyName,
      email: res.profileObj.email,
      profileImg: res.profileObj.imageUrl,
      isVerified: true,
      password: res.profileObj.googleId

    }))

    

    if(page === 'sign_in') dispatch(userAction.login({
      email: res.profileObj.email,
      password: res.profileObj.googleId
    }))
  }

  const onFailure = (res) => {
    console.log('LOGIN FAILED: res: ', res)
  }

  return (
    <div id="signUpButton">
      <GoogleLogin
        clientId={clientId}
        buttonText={text}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={false}
      />
    </div>
  )
}

export default GoogleAuthButton