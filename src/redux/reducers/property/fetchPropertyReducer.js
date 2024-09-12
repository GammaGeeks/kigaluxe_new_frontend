/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer'
import { propertyActionTypes as propertyTypes } from '../../actionTypes';
import property from '../../initialStates';

export default (state = property, { type, payload }) => {
  switch (type) {
    case propertyTypes.FETCH_PROPERTY_START:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getProperty.loading = true
        draft.getProperty.message = ''
        draft.getProperty.error = '';
      })
    case propertyTypes.FETCH_PROPERTY_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.property = {...payload.property}
        draft.getProperty.loading = false
        draft.getProperty.message = payload.message
        draft.getProperty.error = ''
      })
    case propertyTypes.FETCH_PROPERTY_FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getProperty.loading = false
        draft.getProperty.message = ''
        draft.getProperty.error = payload.error
      })
    case propertyTypes.FETCH_PROPERTY_END:
      return produce(state, (draft) => {
        draft.loading = false
        draft.getProperty.loading = false
      })
    default:
      return null;
  }
};
