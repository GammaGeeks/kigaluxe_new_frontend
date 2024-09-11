/* eslint-disable no-unused-vars */
import { placeActionTypes as placeTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const editPlace = (id, data, options) => (dispatch) => {
  return dispatch(apiAction({
    method: 'patch',
    data,
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data',
      options
    },
    url: `${REACT_APP_BASIC_URL}/place/${id}`,
    onStart: placeTypes.UPDATE_PLACE_START,
    onEnd: placeTypes.UPDATE_PLACE_END,
    onSuccess: placeTypes.UPDATE_PLACE_SUCCESS,
    onFailure: placeTypes.UPDATE_PLACE_FAILURE
  }));
};

export default editPlace
