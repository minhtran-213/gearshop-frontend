import {
  ProductsActionType,
  ProductsAdminActionType,
} from '../actions/ActionTypes';

const initialState = {
  productAdminLoading: false,
  productAdmin: [],
  productAdminTotalPages: 0,
  productAdminCurrentPage: 0,
  message: '',
  error: '',
};

const productAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductsAdminActionType.GET_PRODUCT_ADMIN_REQUEST:
      return { ...state, ...{ productAdminLoading: true } };
    case ProductsAdminActionType.GET_PRODUCT_ADMIN_SUCCESS:
      return {
        ...state,
        ...{
          productAdminLoading: false,
          productAdmin: action.payload.content,
          productAdminTotalPages: action.payload.totalPages,
          productAdminCurrentPage: action.payload.currentPage,
        },
      };
    case ProductsAdminActionType.GET_PRODUCT_ADMIN_FAIL:
      return {
        ...state,
        ...{ error: action.payload },
      };
    case ProductsAdminActionType.ADD_PRODUCT:
      return { ...state, ...{ message: action.payload } };
    case ProductsAdminActionType.UPDATE_PRODUCT:
      return { ...state, ...{ message: action.payload } };
    case ProductsAdminActionType.DELETE_PRODUCT:
      return { ...state, ...{ message: action.payload } };
    case ProductsAdminActionType.ADD_PRODUCT_DETAIL:
      return { ...state, ...{ message: action.payload } };
    case ProductsAdminActionType.UPDATE_PRODUCT_DETAIL:
      return { ...state, ...{ message: action.payload } };
    case ProductsAdminActionType.DELETE_PRODUCT_DETAIL:
      return { ...state, ...{ message: action.payload } };
    default:
      return state;
  }
};

export default productAdminReducer;
