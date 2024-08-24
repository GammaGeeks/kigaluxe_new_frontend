/* eslint-disable import/no-anonymous-default-export */
import initialState from '../../initialStates';
import blogsReducer from './blogsReducer';

export default (state = initialState, action) => {
  const blogs = blogsReducer(state, action);

  return (
    blogs
    || state
  );
};