/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer'
import { categoryActionTypes as categoryTypes } from '../../actionTypes';
import category from '../../initialStates';

export default (state = category, { type, payload }) => {
  switch (type) {
    case categoryTypes.FETCH_CATEGORY_START:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getCategory.loading = true
        draft.getCategory.message = ''
        draft.getCategory.error = '';
      })
    case categoryTypes.FETCH_CATEGORY_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.category = {...payload.category}
        draft.getCategory.loading = false
        draft.getCategory.message = payload.message
        draft.getCategory.error = ''
      })
    case categoryTypes.FETCH_CATEGORY_FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getCategory.loading = false
        draft.getCategory.message = ''
        draft.getCategory.error = payload.error
      })
    case categoryTypes.FETCH_CATEGORY_END:
      return produce(state, (draft) => {
        draft.loading = false
        draft.getCategory.loading = false
      })
    default:
      return null;
  }
};
