/* eslint-disable no-unused-vars */
import { commentActionTypes as commentTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const getSingleProperty = (id) => (dispatch) => dispatch(apiAction({
  method: 'get',
  // httpOptions: { token: localStorage.token },
  url: `${REACT_APP_BASIC_URL}/${id}/comment/single`,
  onStart: commentTypes.FETCH_COMMENT_START,
  onEnd: commentTypes.FETCH_COMMENT_END,
  onSuccess: commentTypes.FETCH_COMMENT_SUCCESS,
  onFailure: commentTypes.FETCH_COMMENT_FAILURE
}));

export default getSingleProperty
