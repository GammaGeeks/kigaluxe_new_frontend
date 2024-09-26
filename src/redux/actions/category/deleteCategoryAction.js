/* eslint-disable no-unused-vars */
import openSocket from 'socket.io-client';
import { categoryActionTypes as categoryTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL, REACT_APP_FRONTEND_SERVER_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const deleteCategory = (id) => (dispatch) => {
  const connectIO = openSocket(REACT_APP_FRONTEND_SERVER_URL);
  connectIO.emit('createPath');
  return dispatch(apiAction({
    method: 'delete',
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data'
    },
    url: `${REACT_APP_BASIC_URL}/category/${id}`,
    onStart: categoryTypes.DELETE_CATEGORY_START,
    onEnd: categoryTypes.DELETE_CATEGORY_END,
    onSuccess: categoryTypes.DELETE_CATEGORY_SUCCESS,
    onFailure: categoryTypes.DELETE_CATEGORY_FAILURE
  }));
};

export default deleteCategory
