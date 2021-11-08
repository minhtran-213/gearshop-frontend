import { CategoryAdminType } from './ActionTypes';
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
    console.log(response);
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
export { getCategories, updateCategory, addNewCategory };
