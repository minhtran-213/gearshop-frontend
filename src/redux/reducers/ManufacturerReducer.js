import { ManufacturerAdminType } from '../actions/ActionTypes';

const initialState = {
  manufacturerLoading: false,
  manufacturers: [],
  manufacturerCurrentPage: 0,
  manufacturerTotalPages: 0,
  manufacturerTotalElements: 0,
  message: '',
};

const manufacturerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ManufacturerAdminType.GET_MANUFACTURER_REQUEST:
      return { ...state, ...{ manufacturerLoading: true } };
    case ManufacturerAdminType.GET_MANUFACTURER_SUCCESS:
      return {
        ...state,
        ...{
          manufacturerLoading: false,
          manufacturers: action.payload.content,
          manufacturerCurrentPage: action.payload.currentPage,
          manufacturerTotalPages: action.payload.totalPages,
          manufacturerTotalElements: action.payload.totalElements,
        },
      };
    case ManufacturerAdminType.GET_MANUFACTURER_FAIL:
      return { ...state, ...{ error: action.payload } };
    case ManufacturerAdminType.ADD_MANUFACTURER:
      return { ...state, ...{ message: action.payload } };
    case ManufacturerAdminType.UPDATE_MANUFACTURER:
      return { ...state, ...{ message: action.payload } };
    default:
      return state;
  }
};

export default manufacturerReducer;
