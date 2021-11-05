import { ManufacturerAdminType } from '../actions/ActionTypes';

const initialState = {
  manufacturerLoading: false,
  manufacturers: [],
};

const manufacturerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ManufacturerAdminType.GET_MANUFACTURER_REQUEST:
      return { ...state, ...{ manufacturerLoading: true } };
    case ManufacturerAdminType.GET_MANUFACTURER_SUCCESS:
      return {
        ...state,
        ...{ manufacturerLoading: false, manufacturers: action.payload },
      };
    case ManufacturerAdminType.GET_MANUFACTURER_FAIL:
      return { ...state, ...{ error: action.payload } };
    default:
      return state;
  }
};

export default manufacturerReducer;
