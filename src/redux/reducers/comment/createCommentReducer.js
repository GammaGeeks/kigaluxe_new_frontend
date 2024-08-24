/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import openSocket from 'socket.io-client';
import { REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { commentActionTypes as commentTypes } from '../../actionTypes';
import comment from '../../initialStates';

export default (state = comment, { type, payload }) => {
  switch (type) {
    case commentTypes.CREATE_COMMENT_START:
      // return {
      //   ...state,
      //   loading: true,
      //   getComment: { ...state.getComment, message: '', loading: true, error: '' }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getComment.loading = true
        draft.getComment.message = ''
        draft.getComment.error = '';
      })
    case commentTypes.CREATE_COMMENT_SUCCESS:
      const connectIO = openSocket(REACT_APP_SOCKET_URL);
      connectIO.emit('createComment');
      // return {
      //   ...state,
      //   comment: {...payload.data},
      //   loading: false,
      //   getComment: {
      //     ...state.getComment,
      //     loading: false,
      //     message: payload.message,
      //     error: ''
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.comment = {...payload.data}
        draft.getComment.loading = false
        draft.getComment.message = payload.message
        draft.getComment.error = ''
      })
    case commentTypes.CREATE_COMMENT_FAILURE:
      // return {
      //   ...state,
      //   loading: false,
      //   error: payload.error,
      //   getComment: {
      //     loading: false,
      //     message: '',
      //     error: payload.error
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getComment.loading = false
        draft.getComment.message = ''
        draft.getComment.error = payload.error
      })
    case commentTypes.CREATE_COMMENT_END:
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
