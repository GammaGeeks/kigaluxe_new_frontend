/* eslint-disable import/no-anonymous-default-export */
import initialState from '../../initialStates';
import createPropertyReducer from './createPropertyReducer';
import deletePropertyReducer from './deletePropertyReducer';
import editPropertyReducer from './editPropertyReducer';
import fetchPropertyReducer from './fetchPropertyReducer';

export default (state = initialState, action) => {
  const createProperty = createPropertyReducer(state, action);
  const deleteProperty = deletePropertyReducer(state, action);
  const editProperty = editPropertyReducer(state, action);
  const fetchProperty = fetchPropertyReducer(state, action);

  return (
    createProperty
    || deleteProperty
    || editProperty
    || fetchProperty
    || state
  );
};