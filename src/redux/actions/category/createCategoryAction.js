/* eslint-disable no-unused-vars */
import { categoryActionTypes as categoryTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const createCategory = (data, options) => (dispatch) => {
  // const connectIO = openSocket(REACT_APP_FRONTEND_SERVER_URL);
  // connectIO.emit('createCategory');
  return dispatch(apiAction({
    method: 'post',
    data,
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data',
      options
    },
    url: `${REACT_APP_BASIC_URL}/category`,
    onStart: categoryTypes.CREATE_CATEGORY_START,
    onEnd: categoryTypes.CREATE_CATEGORY_END,
    onSuccess: categoryTypes.CREATE_CATEGORY_SUCCESS,
    onFailure: categoryTypes.CREATE_CATEGORY_FAILURE
  }));
};

export default createCategory
