/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import { categoryActionTypes as categoryTypes } from '../../actionTypes';
import category from '../../initialStates';

export default (state = category, { type, payload }) => {
  switch (type) {
    case categoryTypes.UPDATE_CATEGORY_START:
      // return {
      //   ...state,
      //   loading: true,
      //   getCategory: { ...state.getCategory, message: '', loading: true, errors: '' }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getCategory.loading = true
        draft.getCategory.message = ''
        draft.getCategory.error = '';
      })
    case categoryTypes.UPDATE_CATEGORY_SUCCESS:
      // return {
      //   ...state,
      //   category: {...payload.data},
      //   loading: false,
      //   getCategory: {
      //     ...state.getCategory,
      //     loading: false,
      //     message: payload.message,
      //     errors: ''
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.category = {...payload.data}
        draft.getCategory.loading = false
        draft.getCategory.message = payload.message
        draft.getCategory.error = ''
      })
    case categoryTypes.UPDATE_CATEGORY_FAILURE:
      // return {
      //   ...state,
      //   loading: false,
      //   errors: payload.error,
      //   getCategory: {
      //     loading: false,
      //     message: '',
      //     errors: payload.error
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getCategory.loading = false
        draft.getCategory.message = ''
        draft.getCategory.error = payload.error
      })
    case categoryTypes.UPDATE_CATEGORY_END:
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
