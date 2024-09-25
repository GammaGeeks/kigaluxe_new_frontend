/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import { propertiesActionTypes as propertiesTypes } from '../../actionTypes';
import properties from '../../initialStates';

export default (state = properties, { type, payload }) => {
  switch (type) {
    case propertiesTypes.FETCH_PROPERTIES_START:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getProperties.loading = true;
        draft.getProperties.message = '';
        draft.getProperties.error = '';
      })
    case propertiesTypes.FETCH_PROPERTIES_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        if (payload.append) {
          draft.listOfProperties = [...draft.listOfProperties, ...payload.data.paginate];
        } else {
          draft.listOfProperties = payload.data.paginate;
        }
        draft.next = payload.data.next
        draft.currentPage = payload.data.currentPage
        draft.getProperties.loading = false
        draft.getProperties.message = payload.message;
        draft.getProperties.error = '';
      })
    case propertiesTypes.FETCH_PROPERTIES_FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getProperties.loading = false;
        draft.getProperties.message = ''
        draft.getProperties.error = payload.error
      })
    case propertiesTypes.FETCH_PROPERTIES_END:
      return produce(state, (draft) => {
        draft.loading = false
        draft.getProperties.loading = false
      })
    default:
      return null;
  }
}