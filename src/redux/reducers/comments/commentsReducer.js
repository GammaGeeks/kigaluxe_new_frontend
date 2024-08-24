/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import { commentsActionTypes as commentsTypes } from '../../actionTypes';
import comments from '../../initialStates';

export default (state = comments, { type, payload }) => {
  switch (type) {
    case commentsTypes.FETCH_COMMENTS_START:
    //   return {
    //     ...state,
    //     loading: true,
    //     getComments: { ...state.getComments, message: '', loading: true, error: {} }
    //   };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getComments.message = '';
        draft.getComments.error = '';
      })
    case commentsTypes.FETCH_COMMENTS_SUCCESS:
      console.log({...payload.data})
    //   return {
    //     ...state,
    //     listOfComments: [...payload.data.paginate],
    //     loading: false,
    //     Next: { ...payload.data.Next },
    //     Previous: { ...payload.data.Previous },
    //     getComments: {
    //       ...state.getComments,
    //       loading: false,
    //       message: payload.message,
    //       error: {}
    //     }
    //   };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.listOfComments = [...payload.data.paginate]
        draft.Next = {...payload.data.Next }
        draft.Previous = {...payload.data.Previous }
        draft.getComments.message = payload.message;
        draft.getComments.error = '';
      })
    case commentsTypes.FETCH_COMMENTS_FAILURE:
    //   return {
    //     ...state,
    //     getComments: { ...state.getComments, message: payload.message, loading: false, error: {...payload.message} }
    //   };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getComments.message = ''
        draft.getComments.error = payload.error
      })
    case commentsTypes.FETCH_COMMENTS_END:
    //   return {
    //     ...state,
    //     error: payload.error,
    //     getComments: {
    //       loading: false,
    //       message: state.getComments.message,
    //       error: state.error
    //     }
    //   };
      return produce(state, (draft) => {
        draft.loading = false
        draft.getComments.loading = false
      })
    default:
      return null;
  }
}