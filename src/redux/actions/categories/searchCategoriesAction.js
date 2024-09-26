/* eslint-disable no-unused-vars */
import { categoriesActionTypes as categoriesTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const searchCategories = (query = '', page = 1, limit = 6) => (dispatch) => dispatch(apiAction({
  method: 'get',
  httpOptions: { token: localStorage.token },
  url: `${REACT_APP_BASIC_URL}/api/search?${query}&page=${page}&limit=${limit}`,
  onStart: categoriesTypes.SEARCH_CATEGORIES_START,
  onEnd: categoriesTypes.SEARCH_CATEGORIES_END,
  onSuccess: categoriesTypes.SEARCH_CATEGORIES_SUCCESS,
  onFailure: categoriesTypes.SEARCH_CATEGORIES_FAILURE
}));

export default searchCategories
