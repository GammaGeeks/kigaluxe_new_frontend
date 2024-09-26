/* eslint-disable no-unused-vars */
import { categoryActionTypes as categoryTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const editCategory = (id, data, options) => (dispatch) => {
  return dispatch(apiAction({
    method: 'patch',
    data,
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data',
      options
    },
    url: `${REACT_APP_BASIC_URL}/category/${id}`,
    onStart: categoryTypes.UPDATE_CATEGORY_START,
    onEnd: categoryTypes.UPDATE_CATEGORY_END,
    onSuccess: categoryTypes.UPDATE_CATEGORY_SUCCESS,
    onFailure: categoryTypes.UPDATE_CATEGORY_FAILURE
  }));
};

export default editCategory
