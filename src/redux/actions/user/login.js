/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes as userTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';

export default (payload = {}) => (dispatch) => dispatch(apiAction({
  method: 'post',
  httpOptions: { token: localStorage.token },
  data: { ...payload },
  url: `${REACT_APP_BASIC_URL}/api/auth/signin`,
  onStart: userTypes.LOGIN_USER_START,
  onEnd: userTypes.LOGIN_USER_END,
  onSuccess: userTypes.LOGIN_USER_SUCCESS,
  onFailure: userTypes.LOGIN_USER_FAILURE
}));
