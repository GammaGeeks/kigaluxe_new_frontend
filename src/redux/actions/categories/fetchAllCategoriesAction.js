/* eslint-disable no-unused-vars */
import { categoriesActionTypes as categoriesTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const getAllCategories = (page = 1, limit = 12,append = false) => (dispatch) => dispatch(apiAction({
  method: 'get',
  httpOptions: { token: localStorage.token },
  url: `${REACT_APP_BASIC_URL}/api/categories?page=${page}&limit=${limit}`,
  onStart: categoriesTypes.FETCH_CATEGORIES_START,
  onEnd: categoriesTypes.FETCH_CATEGORIES_END,
  onSuccess: categoriesTypes.FETCH_CATEGORIES_SUCCESS,
  onFailure: categoriesTypes.FETCH_CATEGORIES_FAILURE,
  append
}));

export default getAllCategories
