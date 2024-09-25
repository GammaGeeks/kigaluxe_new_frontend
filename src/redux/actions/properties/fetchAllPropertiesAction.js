/* eslint-disable no-unused-vars */
import { propertiesActionTypes as propertiesTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const getAllProperties = (page = 1, limit = 12,append = false) => (dispatch) => dispatch(apiAction({
  method: 'get',
  httpOptions: { token: localStorage.token },
  url: `${REACT_APP_BASIC_URL}/api/properties?page=${page}&limit=${limit}`,
  onStart: propertiesTypes.FETCH_PROPERTIES_START,
  onEnd: propertiesTypes.FETCH_PROPERTIES_END,
  onSuccess: propertiesTypes.FETCH_PROPERTIES_SUCCESS,
  onFailure: propertiesTypes.FETCH_PROPERTIES_FAILURE,
  append
}));

export default getAllProperties
