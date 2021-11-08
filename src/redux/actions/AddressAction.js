import { AddressAdminType } from './ActionTypes';
import axios from 'axios';

const getAllAddressInAdmin = (userId) => async (dispatch) => {
  try {
    dispatch({ type: AddressAdminType.GET_ADDRESS_REQUEST });
    const response = await axios.get(`/admin/users/${userId}/address`);
    const { object } = response.data;
    dispatch({ type: AddressAdminType.GET_ADDRESS_SUCCESS, payload: object });
  } catch (error) {
    console.log(error);
  }
};

export { getAllAddressInAdmin };
