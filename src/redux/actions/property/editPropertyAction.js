/* eslint-disable no-unused-vars */
import { propertyActionTypes as propertyTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL, REACT_APP_SOCKET_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const editProperty = (id, data, options) => (dispatch) => {
  return dispatch(apiAction({
    method: 'patch',
    data,
    httpOptions: {
      token: localStorage.token,
      header: 'multipart/form-data',
      options
    },
    url: `${REACT_APP_BASIC_URL}/property/${id}`,
    onStart: propertyTypes.UPDATE_PROPERTY_START,
    onEnd: propertyTypes.UPDATE_PROPERTY_END,
    onSuccess: propertyTypes.UPDATE_PROPERTY_SUCCESS,
    onFailure: propertyTypes.UPDATE_PROPERTY_FAILURE
  }));
};

export default editProperty
