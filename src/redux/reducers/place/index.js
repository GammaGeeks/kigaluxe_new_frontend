/* eslint-disable import/no-anonymous-default-export */
import initialState from '../../initialStates';
import createPlaceReducer from './createPlaceReducer';
import deletePlaceReducer from './deletePlaceReducer';
import editPlaceReducer from './editPlaceReducer';
import fetchPlaceReducer from './fetchPlaceReducer';

export default (state = initialState, action) => {
  const createPlace = createPlaceReducer(state, action);
  const deletePlace = deletePlaceReducer(state, action);
  const editPlace = editPlaceReducer(state, action);
  const fetchPlace = fetchPlaceReducer(state, action);

  return (
    createPlace
    || deletePlace
    || editPlace
    || fetchPlace
    || state
  );
};