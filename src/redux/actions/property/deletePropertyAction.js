/* eslint-disable no-unused-vars */
import openSocket from 'socket.io-client';
import { propertyActionTypes as propertyTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL, REACT_APP_FRONTEND_SERVER_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const deleteProperty = (id) => (dispatch) => {
  const connectIO = openSocket(REACT_APP_FRONTEND_SERVER_URL);
  connectIO.emit('createPath');
  return dispatch(apiAction({
    method: 'delete',
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data'
    },
    url: `${REACT_APP_BASIC_URL}/property/${id}`,
    onStart: propertyTypes.DELETE_PROPERTY_START,
    onEnd: propertyTypes.DELETE_PROPERTY_END,
    onSuccess: propertyTypes.DELETE_PROPERTY_SUCCESS,
    onFailure: propertyTypes.DELETE_PROPERTY_FAILURE
  }));
};

export default deleteProperty
