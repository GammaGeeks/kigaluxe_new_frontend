/* eslint-disable import/no-anonymous-default-export */
import initialState from '../../initialStates';
import createCategoryReducer from './createCategoryReducer';
import deleteCategoryReducer from './deleteCategoryReducer';
import editCategoryReducer from './editCategoryReducer';
import fetchCategoryReducer from './fetchCategoryReducer';

export default (state = initialState, action) => {
  const createCategory = createCategoryReducer(state, action);
  const deleteCategory = deleteCategoryReducer(state, action);
  const editCategory = editCategoryReducer(state, action);
  const fetchCategory = fetchCategoryReducer(state, action);

  return (
    createCategory
    || deleteCategory
    || editCategory
    || fetchCategory
    || state
  );
};