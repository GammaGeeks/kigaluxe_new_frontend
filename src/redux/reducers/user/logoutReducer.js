/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes } from '../../actionTypes';
import { produce } from 'immer';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.LOGOUT_USER_START:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.logout.loading = true;
      });
    case userActionTypes.LOGOUT_USER_SUCCESS:
      localStorage.clear();
      return produce(state, (draft) => {
        draft.token = undefined;
        draft.profile = undefined;
        draft.loading = false;
        draft.logout.loading = false;
        draft.logout.error = '';
        draft.logout.message = payload.message;
      });
    case userActionTypes.LOGOUT_USER_FAILURE:
      return produce(state, (draft) => {
        draft.loading = false
        draft.logout.loading = false
        draft.logout.message = '';
        draft.logout.error = payload.error
      })
    case userActionTypes.LOGOUT_USER_END:
      return produce(state, (draft) => {
        draft.loading = false
        draft.logout.loading = false;
      })
    default:
      return null;
  }
};
