/* eslint-disable no-unused-vars */
import { placesActionTypes as placesTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const getAllPlaces = (page = 1, limit = 12) => (dispatch) => dispatch(apiAction({
  method: 'get',
  httpOptions: { token: localStorage.token },
  url: `${REACT_APP_BASIC_URL}/api/place?page=${page}&limit=${limit}`,
  onStart: placesTypes.FETCH_PLACES_START,
  onEnd: placesTypes.FETCH_PLACES_END,
  onSuccess: placesTypes.FETCH_PLACES_SUCCESS,
  onFailure: placesTypes.FETCH_PLACES_FAILURE
}));

export default getAllPlaces
