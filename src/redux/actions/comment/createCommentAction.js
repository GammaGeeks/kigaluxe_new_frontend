/* eslint-disable no-unused-vars */
import { commentActionTypes as commentTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const createComment = (data, options) => (dispatch) => {
  // const connectIO = openSocket(REACT_APP_FRONTEND_SERVER_URL);
  // connectIO.emit('createComment');
  return dispatch(apiAction({
    method: 'post',
    data,
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data',
      options
    },
    url: `${REACT_APP_BASIC_URL}/comment`,
    onStart: commentTypes.CREATE_COMMENT_START,
    onEnd: commentTypes.CREATE_COMMENT_END,
    onSuccess: commentTypes.CREATE_COMMENT_SUCCESS,
    onFailure: commentTypes.CREATE_COMMENT_FAILURE
  }));
};

export default createComment
