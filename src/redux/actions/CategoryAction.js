import { CategoryAdminType } from './ActionTypes';
import axios from 'axios';

const getCategories = (page) => async (dispatch) => {
  try {
    dispatch({ type: CategoryAdminType.GET_CATEGORY_REQUEST });
    const response = await axios.get(`/admin/categories?page=${page}`);
    console.log(response);
    const { object } = response.data;
    dispatch({ type: CategoryAdminType.GET_CATEGORY_SUCCESS, payload: object });
  } catch (error) {
    console.log(error);
  }
};

export { getCategories };
