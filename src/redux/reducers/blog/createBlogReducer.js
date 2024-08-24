/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import openSocket from 'socket.io-client';
import { REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { blogActionTypes as blogTypes } from '../../actionTypes';
import blog from '../../initialStates';

export default (state = blog, { type, payload }) => {
  switch (type) {
    case blogTypes.CREATE_BLOG_START:
      // return {
      //   ...state,
      //   loading: true,
      //   getBlog: { ...state.getBlog, message: '', loading: true, error: '' }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getBlog.loading = true
        draft.getBlog.message = ''
        draft.getBlog.error = '';
      })
    case blogTypes.CREATE_BLOG_SUCCESS:
      const connectIO = openSocket(REACT_APP_SOCKET_URL);
      connectIO.emit('createBlog');
      // return {
      //   ...state,
      //   blog: {...payload.data},
      //   loading: false,
      //   getBlog: {
      //     ...state.getBlog,
      //     loading: false,
      //     message: payload.message,
      //     error: ''
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.blog = {...payload.data}
        draft.getBlog.loading = false
        draft.getBlog.message = payload.message
        draft.getBlog.error = ''
      })
    case blogTypes.CREATE_BLOG_FAILURE:
      // return {
      //   ...state,
      //   loading: false,
      //   error: payload.error,
      //   getBlog: {
      //     loading: false,
      //     message: '',
      //     error: payload.error
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getBlog.loading = false
        draft.getBlog.message = ''
        draft.getBlog.error = payload.error
      })
    case blogTypes.CREATE_BLOG_END:
      // return {
      //   ...state,
      //   getBlog: { ...state.getBlog }
      // };
      return produce(state, (draft) => {
        draft.loading = false
        draft.getBlog.loading = false
      })
    default:
      return null;
  }
};
