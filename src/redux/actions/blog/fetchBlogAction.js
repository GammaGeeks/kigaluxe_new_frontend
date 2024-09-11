/* eslint-disable no-unused-vars */
import { blogActionTypes as blogTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const getSingleBlog = (id) => (dispatch) => dispatch(apiAction({
  method: 'get',
  // httpOptions: { token: localStorage.token },
  url: `${REACT_APP_BASIC_URL}/${id}/blog/single`,
  onStart: blogTypes.FETCH_BLOG_START,
  onEnd: blogTypes.FETCH_BLOG_END,
  onSuccess: blogTypes.FETCH_BLOG_SUCCESS,
  onFailure: blogTypes.FETCH_BLOG_FAILURE
}));

export default getSingleBlog
