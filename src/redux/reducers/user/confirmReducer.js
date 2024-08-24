/* eslint-disable import/no-anonymous-default-export */
import { userActionTypes } from '../../actionTypes';
import { produce } from 'immer'

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.CONFIRM_USER_START:
      return produce(state, draft => {
        draft.loading = true;
        draft.confirm.loading = true;
        draft.confirm.message = '';
        draft.confirm.errors = '';
      })
    case userActionTypes.CONFIRM_USER_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.message = payload.message;
        draft.token = payload.token;
        draft.confirm.loading = false;
        draft.confirm.message = payload.message;
        draft.confirm.error = '';
      })
    case userActionTypes.CONFIRM_USER_FAILURE:
      return produce(state, draft => {
        draft.loading = false;
        draft.confirm.loading = false;
        draft.confirm.message = '';
        draft.confirm.error = payload.error;
      })
    case userActionTypes.CONFIRM_USER_END:
      return produce(state, draft => {
        draft.loading = false;
        draft.confirm.loading = false;
      })
    default:
      return null;
  }
};
