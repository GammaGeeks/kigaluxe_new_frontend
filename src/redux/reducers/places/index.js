/* eslint-disable import/no-anonymous-default-export */
import initialState from '../../initialStates';
import placesReducer from './placesReducer';

export default (state = initialState, action) => {
  const places = placesReducer(state, action);

  return (
    places
    || state
  );
};