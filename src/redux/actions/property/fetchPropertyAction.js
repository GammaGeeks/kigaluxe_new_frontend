/* eslint-disable no-unused-vars */
import { propertyActionTypes as propertyTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const getSingleProperty = (arrival, departure) => (dispatch) => dispatch(apiAction({
  method: 'get',
  // httpOptions: { token: localStorage.token },
  url: `${REACT_APP_BASIC_URL}/${departure}/property/single`,
  onStart: propertyTypes.FETCH_PROPERTY_START,
  onEnd: propertyTypes.FETCH_PROPERTY_END,
  onSuccess: propertyTypes.FETCH_PROPERTY_SUCCESS,
  onFailure: propertyTypes.FETCH_PROPERTY_FAILURE
}));

export default getSingleProperty
