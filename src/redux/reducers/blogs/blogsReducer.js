/* eslint-disable import/no-anonymous-default-export */
import { produce } from 'immer';
import { blogsActionTypes as blogsTypes } from '../../actionTypes';
import blogs from '../../initialStates';

export default (state = blogs, { type, payload }) => {
  switch (type) {
    case blogsTypes.FETCH_BLOGS_START:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.getBlogs.loading = true;
        draft.getBlogs.message = '';
        draft.getBlogs.error = '';
      })
    case blogsTypes.FETCH_BLOGS_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.listOfBlogs = [...payload.data.paginate]
        draft.next = payload.data.next
        draft.currentPage = payload.data.currentPage
        draft.getBlogs.loading = false
        draft.getBlogs.message = payload.message;
        draft.getBlogs.error = '';
      })
    case blogsTypes.FETCH_BLOGS_FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload.error
        draft.getBlogs.loading = false;
        draft.getBlogs.message = ''
        draft.getBlogs.error = payload.error
      })
    case blogsTypes.FETCH_BLOGS_END:
      return produce(state, (draft) => {
        draft.loading = false
        draft.getBlogs.loading = false
      })
    default:
      return null;
  }
}