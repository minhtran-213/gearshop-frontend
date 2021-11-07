import { UserAdminType } from './ActionTypes';
import axios from 'axios';

const getAllUsers = (page) => async (dispatch) => {
  try {
    dispatch({ type: UserAdminType.GET_USERS_REQUEST });
    const response = await axios.get(`/admin/users?page=${page}`);
    const { object } = response.data;
    dispatch({
      type: UserAdminType.GET_USERS_SUCCESS,
      payload: object,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: UserAdminType.GET_USERS_FAIL });
  }
};

const sortUser = (page, sorter) => async (dispatch) => {
  try {
    const response = await axios.get(
      `/admin/users?page=${page}&sort=${sorter.name}&direction=${sorter.direction}`
    );
    const { object } = response.data;
    dispatch({ type: UserAdminType.GET_USERS_SUCCESS, payload: object });
  } catch (error) {
    console.log(error);
    dispatch({ type: UserAdminType.GET_USERS_FAIL });
  }
};

export { getAllUsers, sortUser };
