/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';

export default (payload = {}) => dispatch => dispatch(apiAction({
  method: 'get',
  httpOptions: { token: localStorage.token },
  data: { ...payload },
  url: `${REACT_APP_BASIC_URL}/api/auth/logout`,
  onStart: userActionTypes.LOGOUT_USER_START,
  onEnd: userActionTypes.LOGOUT_USER_END,
  onSuccess: userActionTypes.LOGOUT_USER_SUCCESS,
  onFailure: userActionTypes.LOGOUT_USER_FAILURE
}));
