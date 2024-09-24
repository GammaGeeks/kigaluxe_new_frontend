/* eslint-disable no-unused-vars */
import { propertiesActionTypes as propertiesTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const searchProperties = (query = '', page = 1, limit = 6) => (dispatch) => dispatch(apiAction({
  method: 'get',
  httpOptions: { token: localStorage.token },
  url: `${REACT_APP_BASIC_URL}/api/search?${query}&page=${page}&limit=${limit}`,
  onStart: propertiesTypes.SEARCH_PROPERTIES_START,
  onEnd: propertiesTypes.SEARCH_PROPERTIES_END,
  onSuccess: propertiesTypes.SEARCH_PROPERTIES_SUCCESS,
  onFailure: propertiesTypes.SEARCH_PROPERTIES_FAILURE
}));

export default searchProperties
