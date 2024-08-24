/* eslint-disable no-unused-vars */
import { propertyActionTypes as propertyTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const createProperty = (data, options) => (dispatch) => {
  // const connectIO = openSocket(REACT_APP_FRONTEND_SERVER_URL);
  // connectIO.emit('createProperty');
  return dispatch(apiAction({
    method: 'post',
    data,
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data',
      options
    },
    url: `${REACT_APP_BASIC_URL}/property`,
    onStart: propertyTypes.CREATE_PROPERTY_START,
    onEnd: propertyTypes.CREATE_PROPERTY_END,
    onSuccess: propertyTypes.CREATE_PROPERTY_SUCCESS,
    onFailure: propertyTypes.CREATE_PROPERTY_FAILURE
  }));
};

export default createProperty
