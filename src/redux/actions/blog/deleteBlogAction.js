/* eslint-disable no-unused-vars */
import openSocket from 'socket.io-client';
import { blogActionTypes as blogTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL, REACT_APP_FRONTEND_SERVER_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const deleteBlog = (id) => (dispatch) => {
  const connectIO = openSocket(REACT_APP_FRONTEND_SERVER_URL);
  connectIO.emit('createPath');
  return dispatch(apiAction({
    method: 'delete',
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data'
    },
    url: `${REACT_APP_BASIC_URL}/blog/${id}`,
    onStart: blogTypes.DELETE_BLOG_START,
    onEnd: blogTypes.DELETE_BLOG_END,
    onSuccess: blogTypes.DELETE_BLOG_SUCCESS,
    onFailure: blogTypes.DELETE_BLOG_FAILURE
  }));
};

export default deleteBlog
