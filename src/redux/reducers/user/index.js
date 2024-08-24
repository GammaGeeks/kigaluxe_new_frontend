/* eslint-disable import/no-anonymous-default-export */
import initialState from '../../initialStates';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import logoutReducer from './logoutReducer';
import confirmReducer from './confirmReducer';

export default (state = initialState, action) => {
  const login = loginReducer(state, action);
  const signup = signupReducer(state, action);
  const confirm = confirmReducer(state, action);
  const logout = logoutReducer(state, action);

  return (
    login
    || signup
    || confirm
    || logout
    || state
  );
};
