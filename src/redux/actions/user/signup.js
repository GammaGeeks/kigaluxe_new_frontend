/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';

export default (payload = {}) => async(dispatch) => await dispatch(apiAction({
  method: 'post',
  httpOptions: { token: localStorage.token },
  data: { ...payload },
  url: `${REACT_APP_BASIC_URL}/api/auth/signup`,
  onStart: userActionTypes.SIGNUP_USER_START,
  onEnd: userActionTypes.SIGNUP_USER_END,
  onSuccess: userActionTypes.SIGNUP_USER_SUCCESS,
  onFailure: userActionTypes.SIGNUP_USER_FAILURE
}));
