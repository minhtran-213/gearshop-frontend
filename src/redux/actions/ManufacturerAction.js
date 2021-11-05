import { ManufacturerAdminType } from './ActionTypes';
import axios from 'axios';

const getAllManufacturerAdmin = () => async (dispatch) => {
  try {
    dispatch({ type: ManufacturerAdminType.GET_MANUFACTURER_REQUEST });
    const response = await axios.get('/admin/manufacturers');
    // console.log(response);
    const { object } = response.data;
    dispatch({
      type: ManufacturerAdminType.GET_MANUFACTURER_SUCCESS,
      payload: object.content,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getAllManufacturerAdmin };
