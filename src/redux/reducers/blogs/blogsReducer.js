/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import { blogsActionTypes as blogsTypes } from '../../actionTypes';
import blogs from '../../initialStates';

export default (state = blogs, { type, payload }) => {
  switch (type) {
    case blogsTypes.FETCH_BLOGS_START:
    //   return {
    //     ...state,
    //     loading: true,
    //     getBlogs: { ...state.getBlogs, message: '', loading: true, error: {} }
    //   };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getBlogs.message = '';
        draft.getBlogs.error = '';
      })
    case blogsTypes.FETCH_BLOGS_SUCCESS:
      console.log({...payload.data})
    //   return {
    //     ...state,
    //     listOfBlogs: [...payload.data.paginate],
    //     loading: false,
    //     Next: { ...payload.data.Next },
    //     Previous: { ...payload.data.Previous },
    //     getBlogs: {
    //       ...state.getBlogs,
    //       loading: false,
    //       message: payload.message,
    //       error: {}
    //     }
    //   };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.listOfBlogs = [...payload.data.paginate]
        draft.Next = {...payload.data.Next }
        draft.Previous = {...payload.data.Previous }
        draft.getBlogs.message = payload.message;
        draft.getBlogs.error = '';
      })
    case blogsTypes.FETCH_BLOGS_FAILURE:
    //   return {
    //     ...state,
    //     getBlogs: { ...state.getBlogs, message: payload.message, loading: false, error: {...payload.message} }
    //   };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getBlogs.message = ''
        draft.getBlogs.error = payload.error
      })
    case blogsTypes.FETCH_BLOGS_END:
    //   return {
    //     ...state,
    //     error: payload.error,
    //     getBlogs: {
    //       loading: false,
    //       message: state.getBlogs.message,
    //       error: state.error
    //     }
    //   };
      return produce(state, (draft) => {
        draft.loading = false
        draft.getBlogs.loading = false
      })
    default:
      return null;
  }
}