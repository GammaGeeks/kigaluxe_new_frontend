/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import { placesActionTypes as placesTypes } from '../../actionTypes';
import places from '../../initialStates';

export default (state = places, { type, payload }) => {
  switch (type) {
    case placesTypes.FETCH_PLACES_START:
      // return {
      //   ...state,
      //   loading: true,
      //   getPlaces: { ...state.getPlaces, message: '', loading: true, error: {} }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getPlaces.loading = true;
        draft.getPlaces.message = '';
        draft.getPlaces.error = '';
      })
    case placesTypes.FETCH_PLACES_SUCCESS:
      console.log("PAYLOAD", payload);
      return produce(state, (draft) => {
        draft.loading = false;
        draft.listOfPlaces = [...payload.data.paginate]
        draft.next = payload.data.next
        draft.currentPage = payload.data.currentPage
        draft.getPlaces.loading = false
        draft.getPlaces.message = payload.message;
        draft.getPlaces.error = '';
      })
    case placesTypes.FETCH_PLACES_FAILURE:
      // return {
      //   ...state,
      //   getPlaces: { ...state.getPlaces, message: payload.message, loading: false, error: {...payload.message} }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getPlaces.loading = false;
        draft.getPlaces.message = ''
        draft.getPlaces.error = payload.error
      })
    case placesTypes.FETCH_PLACES_END:
      // return {
      //   ...state,
      //   error: payload.error,
      //   getPlaces: {
      //     loading: false,
      //     message: state.getPlaces.message,
      //     error: state.error
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false
        draft.getPlaces.loading = false
      })
    default:
      return null;
  }
}