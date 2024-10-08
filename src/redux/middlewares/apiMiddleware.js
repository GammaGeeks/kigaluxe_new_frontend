import axiosHelper from '../helpers/axiosHelper';
import { apiActionTypes } from '../actionTypes';

const apiMiddleware = ({ dispatch, getState }) => (next) => async ({ type = '', payload = {} }) => {
  if (type !== apiActionTypes.API_REQUEST) {
    return next({ type, payload });
  }
  try {
    dispatch({ type: payload.onStart, payload: { loading: true } });
    const { data } = await axiosHelper(payload.httpOptions)[payload.method](
      payload.url,
      payload.data
    );
    dispatch({ type: payload.onSuccess, payload: {...data, append: payload.append }});
  } catch (error) {
    dispatch({
      type: payload.onFailure,
      payload: (error.response && error.response.data) || { errors: { message: error.message } }
    });
  }

  dispatch({ type: payload.onEnd, payload: { loading: false } });
  return getState();
};

export default apiMiddleware;
