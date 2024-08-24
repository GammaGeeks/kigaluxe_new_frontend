/* eslint-disable import/no-anonymous-default-export */
import initialState from '../../initialStates';
import createBlogReducer from './createBlogReducer';
import deleteBlogReducer from './deleteBlogReducer';
import editBlogReducer from './editBlogReducer';
import fetchBlogReducer from './fetchBlogReducer';

export default (state = initialState, action) => {
  const createBlog = createBlogReducer(state, action);
  const deleteBlog = deleteBlogReducer(state, action);
  const editBlog = editBlogReducer(state, action);
  const fetchBlog = fetchBlogReducer(state, action);

  return (
    createBlog
    || deleteBlog
    || editBlog
    || fetchBlog
    || state
  );
};