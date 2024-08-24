/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import { blogActionTypes as blogTypes } from '../../actionTypes';
import blog from '../../initialStates';

export default (state = blog, { type, payload }) => {
  switch (type) {
    case blogTypes.UPDATE_BLOG_START:
      // return {
      //   ...state,
      //   loading: true,
      //   getBlog: { ...state.getBlog, message: '', loading: true, errors: '' }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getBlog.loading = true
        draft.getBlog.message = ''
        draft.getBlog.error = '';
      })
    case blogTypes.UPDATE_BLOG_SUCCESS:
      // return {
      //   ...state,
      //   blog: {...payload.data},
      //   loading: false,
      //   getBlog: {
      //     ...state.getBlog,
      //     loading: false,
      //     message: payload.message,
      //     errors: ''
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.blog = {...payload.data}
        draft.getBlog.loading = false
        draft.getBlog.message = payload.message
        draft.getBlog.error = ''
      })
    case blogTypes.UPDATE_BLOG_FAILURE:
      // return {
      //   ...state,
      //   loading: false,
      //   errors: payload.error,
      //   getBlog: {
      //     loading: false,
      //     message: '',
      //     errors: payload.error
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getBlog.loading = false
        draft.getBlog.message = ''
        draft.getBlog.error = payload.error
      })
    case blogTypes.UPDATE_BLOG_END:
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
