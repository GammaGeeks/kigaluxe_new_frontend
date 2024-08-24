/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes } from '../../actionTypes';
import { produce } from 'immer'

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.SIGNUP_USER_START:
      return produce(state, (draft) => {
        draft.loading = true
        draft.signup.loading = true
        draft.signup.message = ''
        draft.signup.error = ''
      })
    case userActionTypes.SIGNUP_USER_SUCCESS:
      localStorage.user = JSON.stringify(payload.user);
      localStorage.token = payload.token;
      return produce(state, (draft) => {
        draft.loading = false
        draft.message = payload.message
        draft.token = payload.token
        draft.user = payload.user
        draft.signup.loading = false
        draft.signup.message = payload.message
        draft.signup.error = ''
      })
    case userActionTypes.SIGNUP_USER_FAILURE:
      return produce(state, (draft) => {
        draft.loading = false
        draft.signup.loading = false
        draft.signup.message = ''
        draft.signup.error = payload.error
      })
    case userActionTypes.SIGNUP_USER_END:
      return produce(state, (draft) => {
        draft.loading = false
        draft.signup.loading = false
      })
    default:
      return null;
  }
};
