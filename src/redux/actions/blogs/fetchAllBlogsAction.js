/* eslint-disable no-unused-vars */
import { blogsActionTypes as blogsTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const getAllBlogs = (page = 1, limit = 12) => (dispatch) => dispatch(apiAction({
  method: 'get',
  httpOptions: { token: localStorage.token },
  url: `${REACT_APP_BASIC_URL}/api/blogs?page=${page}&limit=${limit}`,
  onStart: blogsTypes.FETCH_BLOGS_START,
  onEnd: blogsTypes.FETCH_BLOGS_END,
  onSuccess: blogsTypes.FETCH_BLOGS_SUCCESS,
  onFailure: blogsTypes.FETCH_BLOGS_FAILURE
}));

export default getAllBlogs
