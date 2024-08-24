/* eslint-disable no-unused-vars */
import openSocket from 'socket.io-client';
import { commentActionTypes as commentTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL, REACT_APP_FRONTEND_SERVER_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const deleteComment = (id) => (dispatch) => {
  const connectIO = openSocket(REACT_APP_FRONTEND_SERVER_URL);
  connectIO.emit('createComment');
  return dispatch(apiAction({
    method: 'delete',
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data'
    },
    url: `${REACT_APP_BASIC_URL}/comment/${id}`,
    onStart: commentTypes.DELETE_COMMENT_START,
    onEnd: commentTypes.DELETE_COMMENT_END,
    onSuccess: commentTypes.DELETE_COMMENT_SUCCESS,
    onFailure: commentTypes.DELETE_COMMENT_FAILURE
  }));
};

export default deleteComment
