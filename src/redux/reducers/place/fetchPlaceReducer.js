/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer'
import { placeActionTypes as placeTypes } from '../../actionTypes';
import place from '../../initialStates';

export default (state = place, { type, payload }) => {
  switch (type) {
    case placeTypes.FETCH_PLACE_START:
      // return {
      //   ...state,
      //   loading: true,
      //   getPlace: { ...state.getPlace, message: '', loading: true, errors: '' }
      // };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getPlace.loading = true
        draft.getPlace.message = ''
        draft.getPlace.error = '';
      })
    case placeTypes.FETCH_PLACE_SUCCESS:
      // return {
      //   ...state,
      //   loading: false,
      //   place: {...payload.data},
      //   getPlace: {
      //     ...state.getPlace,
      //     loading: false,
      //     message: payload.message,
      //     errors: ''
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.place = {...payload.data}
        draft.getPlace.loading = false
        draft.getPlace.message = payload.message
        draft.getPlace.error = ''
      })
    case placeTypes.FETCH_PLACE_FAILURE:
      // return {
      //   ...state,
      //   loading: false,
      //   errors: payload.error,
      //   getPlace: {
      //     loading: false,
      //     message: '',
      //     errors: payload.error
      //   }
      // };
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getPlace.loading = false
        draft.getPlace.message = ''
        draft.getPlace.error = payload.error
      })
    case placeTypes.FETCH_PLACE_END:
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
