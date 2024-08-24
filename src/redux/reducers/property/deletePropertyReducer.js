/* eslint-disable import/no-anonymous-default-export */
import openSocket from 'socket.io-client';
import { produce } from 'immer';
import { REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { propertyActionTypes as propertyTypes } from '../../actionTypes';
import property from '../../initialStates';

export default (state = property, { type, payload }) => {
  switch (type) {
    case propertyTypes.DELETE_PROPERTY_START:
      // return {
      //   ...state,
      //   loading: true,
      //   getProperty: { ...state.getProperty, message: '', loading: true, errors: '' }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getProperty.loading = true
        draft.getProperty.message = ''
        draft.getProperty.error = '';
      })
    case propertyTypes.DELETE_PROPERTY_SUCCESS:
      const connectIO = openSocket(REACT_APP_SOCKET_URL);
      connectIO.emit('deleteProperty');
      // return {
      //   ...state,
      //   property: {...payload.data},
      //   loading: false,
      //   getProperty: {
      //     ...state.getProperty,
      //     loading: false,
      //     message: payload.message,
      //     errors: ''
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.property = {...payload.data}
        draft.getProperty.loading = false
        draft.getProperty.message = payload.message
        draft.getProperty.error = ''
      })
    case propertyTypes.DELETE_PROPERTY_FAILURE:
      // return {
      //   ...state,
      //   loading: false,
      //   errors: payload.error,
      //   getProperty: {
      //     loading: false,
      //     message: '',
      //     errors: payload.error
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getProperty.loading = false
        draft.getProperty.message = ''
        draft.getProperty.error = payload.error
      })
    case propertyTypes.DELETE_PROPERTY_END:
      // return {
      //   ...state,
      //   getProperty: { ...state.getProperty }
      // };
      return produce(state, (draft) => {
        draft.loading = false
        draft.getProperty.loading = false
      })
    default:
      return null;
  }
};
