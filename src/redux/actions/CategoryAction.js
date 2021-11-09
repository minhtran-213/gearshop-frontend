import { CategoryAdminType, CategoryType } from './ActionTypes';

import axios from 'axios';

const getCategories = (page) => async (dispatch) => {
  try {
    dispatch({ type: CategoryAdminType.GET_CATEGORY_REQUEST });
    const response = await axios.get(`/admin/categories?page=${page}`);
    const { object } = response.data;
    dispatch({ type: CategoryAdminType.GET_CATEGORY_SUCCESS, payload: object });
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = (category) => async (dispatch) => {
  try {
    const response = await axios.put(
      `/admin/category/${category.id}`,
      category
    );
    dispatch({
      type: CategoryAdminType.UPDATE_CATEGORY,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};
const addNewCategory = (category) => async (dispatch) => {
  try {
    const response = await axios.post(`/admin/category`, category);
    dispatch({
      type: CategoryAdminType.ADD_CATEGORY,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/admin/category/${id}`);
    dispatch({
      type: CategoryAdminType.DELETE_CATEGORY,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};

const getCategoriesUser = () => async (dispatch) => {
  try {
    dispatch({ type: CategoryType.GET_CATEGORY_USER_REQUEST });
    const response = await axios.get('/categories');
    const { object } = response.data;
    dispatch({ type: CategoryType.GET_CATEGORY_USER_SUCCESS, payload: object });
  } catch (error) {
    console.log(error);
  }
};
export {
  getCategories,
  updateCategory,
  addNewCategory,
  deleteCategory,
  getCategoriesUser,
};
