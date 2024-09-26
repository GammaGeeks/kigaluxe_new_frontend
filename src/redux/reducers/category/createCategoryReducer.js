/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import openSocket from 'socket.io-client';
import { REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { categoryActionTypes as categoryTypes } from '../../actionTypes';
import category from '../../initialStates';

export default (state = category, { type, payload }) => {
  switch (type) {
    case categoryTypes.CREATE_CATEGORY_START:
      // return {
      //   ...state,
      //   loading: true,
      //   getCategory: { ...state.getCategory, message: '', loading: true, error: '' }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getCategory.loading = true
        draft.getCategory.message = ''
        draft.getCategory.error = '';
      })
    case categoryTypes.CREATE_CATEGORY_SUCCESS:
      const connectIO = openSocket(REACT_APP_SOCKET_URL);
      connectIO.emit('createCategory');
      // return {
      //   ...state,
      //   category: {...payload.data},
      //   loading: false,
      //   getCategory: {
      //     ...state.getCategory,
      //     loading: false,
      //     message: payload.message,
      //     error: ''
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.category = {...payload.data}
        draft.getCategory.loading = false
        draft.getCategory.message = payload.message
        draft.getCategory.error = ''
      })
    case categoryTypes.CREATE_CATEGORY_FAILURE:
      // return {
      //   ...state,
      //   loading: false,
      //   error: payload.error,
      //   getCategory: {
      //     loading: false,
      //     message: '',
      //     error: payload.error
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getCategory.loading = false
        draft.getCategory.message = ''
        draft.getCategory.error = payload.error
      })
    case categoryTypes.CREATE_CATEGORY_END:
      // return {
      //   ...state,
      //   getCategory: { ...state.getCategory }
      // };
      return produce(state, (draft) => {
        draft.loading = false
        draft.getCategory.loading = false
      })
    default:
      return null;
  }
};
