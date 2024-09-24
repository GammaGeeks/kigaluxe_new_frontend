/* eslint-disable import/no-anonymous-default-export */
import initialState from '../../initialStates';
import propertiesReducer from './propertiesReducer';
import searchPropertiesReducer from './searchPropertiesReducer';

export default (state = initialState, action) => {
  const properties = propertiesReducer(state, action);
  const searchProperties = searchPropertiesReducer(state, action);

  return (
    properties
    || searchProperties
    || state
  );
};