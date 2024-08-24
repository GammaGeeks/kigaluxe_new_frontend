/* eslint-disable no-unused-vars */
import { blogActionTypes as blogTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const editBlog = (id, data, options) => (dispatch) => {
  return dispatch(apiAction({
    method: 'patch',
    data,
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data',
      options
    },
    url: `${REACT_APP_BASIC_URL}/blog/${id}`,
    onStart: blogTypes.UPDATE_BLOG_START,
    onEnd: blogTypes.UPDATE_BLOG_END,
    onSuccess: blogTypes.UPDATE_BLOG_SUCCESS,
    onFailure: blogTypes.UPDATE_BLOG_FAILURE
  }));
};

export default editBlog
