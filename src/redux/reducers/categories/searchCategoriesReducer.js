/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import { categoriesActionTypes as categoriesTypes } from '../../actionTypes';
import categories from '../../initialStates';

export default (state = categories, { type, payload }) => {
  switch (type) {
    case categoriesTypes.SEARCH_CATEGORIES_START:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getCategories.loading = true;
        draft.getCategories.message = '';
        draft.getCategories.error = '';
      })
    case categoriesTypes.SEARCH_CATEGORIES_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.listOfCategories = [...payload.data.paginate]
        draft.next = payload.data.next
        draft.currentPage = payload.data.currentPage
        draft.getCategories.loading = false
        draft.getCategories.message = payload.message;
        draft.getCategories.error = '';
      })
    case categoriesTypes.SEARCH_CATEGORIES_FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getCategories.loading = false;
        draft.getCategories.message = ''
        draft.getCategories.error = payload.error
      })
    case categoriesTypes.SEARCH_CATEGORIES_END:
      return produce(state, (draft) => {
        draft.loading = false
        draft.getCategories.loading = false
      })
    default:
      return null;
  }
}