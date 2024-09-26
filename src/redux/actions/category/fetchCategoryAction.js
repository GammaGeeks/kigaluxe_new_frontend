/* eslint-disable no-unused-vars */
import { categoryActionTypes as categoryTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const getSingleCategory = (category_id) => (dispatch) => dispatch(apiAction({
  method: 'get',
  httpOptions: { token: localStorage.token },
  url: `${REACT_APP_BASIC_URL}/api/properties/${category_id}`,
  onStart: categoryTypes.FETCH_CATEGORY_START,
  onEnd: categoryTypes.FETCH_CATEGORY_END,
  onSuccess: categoryTypes.FETCH_CATEGORY_SUCCESS,
  onFailure: categoryTypes.FETCH_CATEGORY_FAILURE
}));

export default getSingleCategory
