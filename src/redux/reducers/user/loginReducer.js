/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes } from '../../actionTypes';
import { produce } from 'immer'

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.LOGIN_USER_START:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.login.loading = true;
        draft.login.message = '';
        draft.login.error = '';
      })
    case userActionTypes.LOGIN_USER_SUCCESS:
      localStorage.user = JSON.stringify(payload.user);
      localStorage.token = payload.token;
      return produce(state, (draft) => {
        draft.loading = false
        draft.token = payload.token
        draft.profile = payload.user
        draft.login.loading = false
        draft.login.message = payload.message
        draft.login.error = ''
      })
    case userActionTypes.LOGIN_USER_FAILURE:
      return produce(state, (draft) => {
        draft.loading = false
        draft.login.loading = false
        draft.login.message = ''
        draft.login.error = payload.error
      })
    case userActionTypes.LOGIN_USER_END:
      return produce(state, (draft) => {
        draft.loading = false
        draft.login.loading = false
      })
    default:
      return null;
  }
};
