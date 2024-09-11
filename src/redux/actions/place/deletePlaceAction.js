/* eslint-disable no-unused-vars */
import openSocket from 'socket.io-client';
import { placeActionTypes as placeTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL, REACT_APP_FRONTEND_SERVER_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const deletePlace = (id) => (dispatch) => {
  const connectIO = openSocket(REACT_APP_FRONTEND_SERVER_URL);
  connectIO.emit('createPath');
  return dispatch(apiAction({
    method: 'delete',
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data'
    },
    url: `${REACT_APP_BASIC_URL}/place/${id}`,
    onStart: placeTypes.DELETE_PLACE_START,
    onEnd: placeTypes.DELETE_PLACE_END,
    onSuccess: placeTypes.DELETE_PLACE_SUCCESS,
    onFailure: placeTypes.DELETE_PLACE_FAILURE
  }));
};

export default deletePlace
