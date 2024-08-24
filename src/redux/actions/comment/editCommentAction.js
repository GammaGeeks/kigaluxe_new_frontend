/* eslint-disable no-unused-vars */
import { commentActionTypes as commentTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const editComment = (id, data, options) => (dispatch) => {
  return dispatch(apiAction({
    method: 'patch',
    data,
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data',
      options
    },
    url: `${REACT_APP_BASIC_URL}/comment/${id}`,
    onStart: commentTypes.UPDATE_COMMENT_START,
    onEnd: commentTypes.UPDATE_COMMENT_END,
    onSuccess: commentTypes.UPDATE_COMMENT_SUCCESS,
    onFailure: commentTypes.UPDATE_COMMENT_FAILURE
  }));
};

export default editComment
