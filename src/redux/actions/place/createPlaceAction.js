/* eslint-disable no-unused-vars */
import { placeActionTypes as placeTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const createPlace = (data, options) => (dispatch) => {
  // const connectIO = openSocket(REACT_APP_FRONTEND_SERVER_URL);
  // connectIO.emit('createPlace');
  return dispatch(apiAction({
    method: 'post',
    data,
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data',
      options
    },
    url: `${REACT_APP_BASIC_URL}/place`,
    onStart: placeTypes.CREATE_PLACE_START,
    onEnd: placeTypes.CREATE_PLACE_END,
    onSuccess: placeTypes.CREATE_PLACE_SUCCESS,
    onFailure: placeTypes.CREATE_PLACE_FAILURE
  }));
};

export default createPlace
