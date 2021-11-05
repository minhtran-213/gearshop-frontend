import { UserAdminType } from './ActionTypes';
import axios from 'axios';

const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: UserAdminType.GET_USERS_REQUEST });
    const response = await axios.get('/admin/users');
    const { object } = response.data;
    // console.log(object.content);
    dispatch({
      type: UserAdminType.GET_USERS_SUCCESS,
      payload: object.content,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers };
