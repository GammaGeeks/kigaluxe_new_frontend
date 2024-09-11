/* eslint-disable no-unused-vars */
import { placeActionTypes as placeTypes } from '../../actionTypes';
import { REACT_APP_LOCAL_URL, REACT_APP_BASIC_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

const getSinglePlace = (id) => (dispatch) => dispatch(apiAction({
  method: 'get',
  // httpOptions: { token: localStorage.token },
  url: `${REACT_APP_BASIC_URL}/place/${id}`,
  onStart: placeTypes.FETCH_PLACE_START,
  onEnd: placeTypes.FETCH_PLACE_END,
  onSuccess: placeTypes.FETCH_PLACE_SUCCESS,
  onFailure: placeTypes.FETCH_PLACE_FAILURE
}));

export default getSinglePlace
