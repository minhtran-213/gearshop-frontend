import { ManufacturerAdminType } from './ActionTypes';
import axios from 'axios';

const getAllManufacturerAdmin = (page) => async (dispatch) => {
  try {
    dispatch({ type: ManufacturerAdminType.GET_MANUFACTURER_REQUEST });
    const response = await axios.get(`/admin/manufacturers?page=${page}`);
    const { object } = response.data;
    dispatch({
      type: ManufacturerAdminType.GET_MANUFACTURER_SUCCESS,
      payload: object,
    });
  } catch (error) {
    console.log(error);
  }
};

const addNewManufacturer = (manufacturer) => async (dispatch) => {
  try {
    const response = await axios.post('/admin/manufacturer', manufacturer);
    dispatch({
      type: ManufacturerAdminType.ADD_MANUFACTURER,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateManufacturer = (manufacturer) => async (dispatch) => {
  // console.log(manufacturer.id);
  try {
    const response = await axios.put(
      `/admin/manufacturer/${manufacturer.id}`,
      manufacturer
    );
    dispatch({
      type: ManufacturerAdminType.UPDATE_MANUFACTURER,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteManufacturer = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/admin/manufacturer/${id}`);
    dispatch({
      type: ManufacturerAdminType.DELETE_MANUFACTURER,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};
export {
  getAllManufacturerAdmin,
  addNewManufacturer,
  updateManufacturer,
  deleteManufacturer,
};
