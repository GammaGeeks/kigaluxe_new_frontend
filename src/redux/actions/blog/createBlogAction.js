/* eslint-disable no-unused-vars */
import { blogActionTypes as blogTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const createBlog = (data, options) => (dispatch) => {
  // const connectIO = openSocket(REACT_APP_FRONTEND_SERVER_URL);
  // connectIO.emit('createBlog');
  return dispatch(apiAction({
    method: 'post',
    data,
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data',
      options
    },
    url: `${REACT_APP_BASIC_URL}/blog`,
    onStart: blogTypes.CREATE_BLOG_START,
    onEnd: blogTypes.CREATE_BLOG_END,
    onSuccess: blogTypes.CREATE_BLOG_SUCCESS,
    onFailure: blogTypes.CREATE_BLOG_FAILURE
  }));
};

export default createBlog
