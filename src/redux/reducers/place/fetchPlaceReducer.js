/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer'
import { placeActionTypes as placeTypes } from '../../actionTypes';
import place from '../../initialStates';

export default (state = place, { type, payload }) => {
  switch (type) {
    case placeTypes.FETCH_PLACE_START:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getPlace.loading = true
        draft.getPlace.message = ''
        draft.getPlace.error = '';
      })
    case placeTypes.FETCH_PLACE_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.place = {...payload.place}
        draft.getPlace.loading = false
        draft.getPlace.message = payload.message
        draft.getPlace.error = ''
      })
    case placeTypes.FETCH_PLACE_FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getPlace.loading = false
        draft.getPlace.message = ''
        draft.getPlace.error = payload.error
      })
    case placeTypes.FETCH_PLACE_END:
      return produce(state, (draft) => {
        draft.loading = false
        draft.getPlace.loading = false
      })
    default:
      return null;
  }
};
