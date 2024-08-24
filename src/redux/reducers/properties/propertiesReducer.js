/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import { propertiesActionTypes as propertiesTypes } from '../../actionTypes';
import properties from '../../initialStates';

export default (state = properties, { type, payload }) => {
  switch (type) {
    case propertiesTypes.FETCH_PROPERTIES_START:
      // return {
      //   ...state,
      //   loading: true,
      //   getProperties: { ...state.getProperties, message: '', loading: true, error: {} }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getProperties.loading = true;
        draft.getProperties.message = '';
        draft.getProperties.error = '';
      })
    case propertiesTypes.FETCH_PROPERTIES_SUCCESS:
      // console.log([]...payload.data.paginate])
      // return {
      //   ...state,
      //   listOfProperties: [...payload.data.paginate],
      //   loading: false,
      //   Next: { ...payload.data.Next },
      //   Previous: { ...payload.data.Previous },
      //   getProperties: {
      //     ...state.getProperties,
      //     loading: false,
      //     message: payload.message,
      //     error: {}
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.listOfProperties = [...payload.data.paginate]
        draft.Next = {...payload.data.Next }
        draft.Prev = {...payload.data.Previous }
        draft.getProperties.loading = false;
        draft.getProperties.message = payload.message;
        draft.getProperties.error = '';
      })
    case propertiesTypes.FETCH_PROPERTIES_FAILURE:
      // return {
      //   ...state,
      //   getProperties: { ...state.getProperties, message: payload.message, loading: false, error: {...payload.message} }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getProperties.loading = false;
        draft.getProperties.message = ''
        draft.getProperties.error = payload.error
      })
    case propertiesTypes.FETCH_PROPERTIES_END:
      // return {
      //   ...state,
      //   error: payload.error,
      //   getProperties: {
      //     loading: false,
      //     message: state.getProperties.message,
      //     error: state.error
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false
        draft.getProperties.loading = false
      })
    default:
      return null;
  }
}