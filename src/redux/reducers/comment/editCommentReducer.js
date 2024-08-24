/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import { commentActionTypes as commentTypes } from '../../actionTypes';
import comment from '../../initialStates';

export default (state = comment, { type, payload }) => {
  switch (type) {
    case commentTypes.UPDATE_COMMENT_START:
      // return {
      //   ...state,
      //   loading: true,
      //   getComment: { ...state.getComment, message: '', loading: true, errors: '' }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getComment.loading = true
        draft.getComment.message = ''
        draft.getComment.error = '';
      })
    case commentTypes.UPDATE_COMMENT_SUCCESS:
      // return {
      //   ...state,
      //   comment: {...payload.data},
      //   loading: false,
      //   getComment: {
      //     ...state.getComment,
      //     loading: false,
      //     message: payload.message,
      //     errors: ''
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.comment = {...payload.data}
        draft.getComment.loading = false
        draft.getComment.message = payload.message
        draft.getComment.error = ''
      })
    case commentTypes.UPDATE_COMMENT_FAILURE:
      // return {
      //   ...state,
      //   loading: false,
      //   errors: payload.error,
      //   getComment: {
      //     loading: false,
      //     message: '',
      //     errors: payload.error
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getComment.loading = false
        draft.getComment.message = ''
        draft.getComment.error = payload.error
      })
    case commentTypes.UPDATE_COMMENT_END:
      // return {
      //   ...state,
      //   getComment: { ...state.getComment }
      // };
      return produce(state, (draft) => {
        draft.loading = false
        draft.getComment.loading = false
      })
    default:
      return null;
  }
};
