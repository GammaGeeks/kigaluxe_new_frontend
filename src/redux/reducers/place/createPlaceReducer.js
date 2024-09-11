/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import openSocket from 'socket.io-client';
import { REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { placeActionTypes as placeTypes } from '../../actionTypes';
import place from '../../initialStates';

export default (state = place, { type, payload }) => {
  switch (type) {
    case placeTypes.CREATE_PLACE_START:
      // return {
      //   ...state,
      //   loading: true,
      //   getPlace: { ...state.getPlace, message: '', loading: true, error: '' }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getPlace.loading = true
        draft.getPlace.message = ''
        draft.getPlace.error = '';
      })
    case placeTypes.CREATE_PLACE_SUCCESS:
      const connectIO = openSocket(REACT_APP_SOCKET_URL);
      connectIO.emit('createPlace');
      // return {
      //   ...state,
      //   place: {...payload.data},
      //   loading: false,
      //   getPlace: {
      //     ...state.getPlace,
      //     loading: false,
      //     message: payload.message,
      //     error: ''
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.place = {...payload.data}
        draft.getPlace.loading = false
        draft.getPlace.message = payload.message
        draft.getPlace.error = ''
      })
    case placeTypes.CREATE_PLACE_FAILURE:
      // return {
      //   ...state,
      //   loading: false,
      //   error: payload.error,
      //   getPlace: {
      //     loading: false,
      //     message: '',
      //     error: payload.error
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getPlace.loading = false
        draft.getPlace.message = ''
        draft.getPlace.error = payload.error
      })
    case placeTypes.CREATE_PLACE_END:
      // return {
      //   ...state,
      //   getPlace: { ...state.getPlace }
      // };
      return produce(state, (draft) => {
        draft.loading = false
        draft.getPlace.loading = false
      })
    default:
      return null;
  }
};
