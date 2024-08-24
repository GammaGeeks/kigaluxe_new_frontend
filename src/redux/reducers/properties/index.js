/* eslint-disable import/no-anonymous-default-export */
import initialState from '../../initialStates';
import propertiesReducer from './propertiesReducer';

export default (state = initialState, action) => {
  const properties = propertiesReducer(state, action);

  return (
    properties
    || state
  );
};