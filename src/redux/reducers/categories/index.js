/* eslint-disable import/no-anonymous-default-export */
import initialState from '../../initialStates';
import categoriesReducer from './categoriesReducer';
import searchCategoriesReducer from './searchCategoriesReducer';

export default (state = initialState, action) => {
  const categories = categoriesReducer(state, action);
  const searchCategories = searchCategoriesReducer(state, action);

  return (
    categories
    || searchCategories
    || state
  );
};